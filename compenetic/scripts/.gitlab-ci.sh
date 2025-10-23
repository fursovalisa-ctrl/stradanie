#!/bin/bash

# GitLab CI Helper Functions
# =========================

set -euo pipefail

# Настройка NPM аутентификации
setup_npm_auth() {
    local registry="${1:-registry.npmjs.org}"
    
    if [ -z "${NPM_TOKEN:-}" ]; then
        echo "❌ ERROR: NPM_TOKEN environment variable is required"
        return 1
    fi
    
    echo "🔐 Setting up NPM authentication for $registry..."
    echo "//$registry/:_authToken=${NPM_TOKEN}" > .npmrc
}

# Очистка NPM аутентификации
cleanup_npm_auth() {
    rm -f .npmrc 2>/dev/null || true
}

# Публикация пакета в NPM
npm_publish() {
    local tag="$1"
    local registry="${2:-registry.npmjs.org}"
    local access="${3:-public}"
    
    echo "📤 Publishing to NPM..."
    echo "🏷️ Tag: $tag"
    echo "🌐 Registry: $registry"
    echo "🔓 Access: $access"
    
    npm publish --access "$access" --tag "$tag" --registry "https://$registry"
}

# Проверка наличия необходимых файлов и директорий
validate_project() {
    if [ ! -f "package.json" ]; then
        echo "❌ ERROR: package.json not found"
        return 1
    fi
    
    if [ ! -d "dist" ]; then
        echo "❌ ERROR: dist directory not found. Run build first."
        return 1
    fi
    
    echo "✅ Project validation passed"
}

# Получение информации о пакете
get_package_info() {
    local package_name version
    package_name=$(node -p "require('./package.json').name")
    version=$(node -p "require('./package.json').version")
    
    echo "📦 Package: $package_name@$version"
}

# Валидация соответствия версии в package.json и git тега
validate_version() {
    local git_tag="${CI_COMMIT_TAG:-}"
    
    if [ -z "$git_tag" ]; then
        echo "❌ ERROR: No git tag found. This function should only be called on tag builds."
        return 1
    fi
    
    local package_version
    package_version=$(node -p "require('./package.json').version")
    
    # Убираем префикс 'v' из тега, если есть
    local tag_version="${git_tag#v}"
    
    echo "🔍 Validating version consistency..."
    echo "📦 Package version: $package_version"
    echo "🏷️  Git tag: $git_tag (version: $tag_version)"
    
    if [ "$package_version" != "$tag_version" ]; then
        echo "❌ ERROR: Version mismatch!"
        echo "   Package.json version: $package_version"
        echo "   Git tag version: $tag_version"
        echo "💡 Please update package.json version to match the tag or create correct tag"
        return 1
    fi
    
    echo "✅ Version validation passed! 🎉"
}

# Удаление префикса 'feature-' из slug
clean_feature_slug() {
    local slug="$1"
    # Убираем feature- в начале
    echo "${slug#feature-}"
}

# Создание уникальной pre-release версии
create_prerelease_version() {
    local tag_slug="$1"
    local base_version
    base_version=$(node -p "require('./package.json').version")
    
    # Проверяем наличие CI_JOB_ID
    if [ -z "${CI_JOB_ID:-}" ]; then
        echo "❌ ERROR: CI_JOB_ID environment variable is required"
        echo "This function should only be called within GitLab CI job"
        return 1
    fi
    
    # Очищаем slug от префикса feature-
    local clean_slug
    clean_slug=$(clean_feature_slug "$tag_slug")
    
    local prerelease_version="$base_version-$clean_slug.$CI_JOB_ID"
    
    echo "🔄 Creating unique pre-release version: $prerelease_version"
    echo "🔢 Using GitLab CI Job ID: $CI_JOB_ID"
    
    # Временно обновляем package.json
    node -e "const pkg = require('./package.json'); pkg.version = '$prerelease_version'; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));"
    
    echo "$prerelease_version"
}

# Восстановление оригинальной версии
restore_package_version() {
    git checkout -- package.json
}

# Публикация pre-release версии для feature веток
publish_prerelease() {
    local tag_slug="$1"
    local registry="${2:-registry.npmjs.org}"
    local access="${3:-public}"
    
    echo "🚧 Publishing pre-release version..."
    
    validate_project
    
    # Очищаем slug для NPM тега
    local clean_slug
    clean_slug=$(clean_feature_slug "$tag_slug")
    
    # Создаем уникальную версию
    local prerelease_version
    prerelease_version=$(create_prerelease_version "$tag_slug")
    
    get_package_info
    
    echo "🏷️  NPM Tag: $clean_slug"
    echo "📝 Each publish creates a unique version (no overwrites)"
    
    setup_npm_auth "$registry"
    npm_publish "$clean_slug" "$registry" "$access"
    cleanup_npm_auth
    restore_package_version
    
    local package_name
    package_name=$(node -p "require('./package.json').name")
    
    echo "✅ Pre-release published: $package_name@$prerelease_version"
    echo "💡 Install latest: npm install $package_name@$clean_slug"
    echo "💡 Install specific: npm install $package_name@$prerelease_version"
}

# Публикация релизной версии
publish_release() {
    local registry="${1:-registry.npmjs.org}"
    local access="${2:-public}"
    
    echo "🎆 Publishing release version..."
    
    validate_project
    get_package_info
    
    echo "🏷️  Tag: latest (stable release)"
    
    setup_npm_auth "$registry"
    npm_publish "latest" "$registry" "$access"
    cleanup_npm_auth
    
    local package_name
    package_name=$(node -p "require('./package.json').name")
    
    echo "✅ Release published!"
    echo "💡 Install: npm install $package_name"
}

# GitLab API helper
gitlab_api() {
    local method="$1"
    local path="$2"
    shift 2
    
    if [ -z "${CI_API_V4_URL:-}" ] || [ -z "${GITLAB_TOKEN:-}" ]; then
        echo "❌ ERROR: CI_API_V4_URL or GITLAB_TOKEN is not set"
        return 1
    fi
    
    if [ "$method" = "GET" ]; then
        curl -s \
            --header "Private-Token: $GITLAB_TOKEN" \
            "$CI_API_V4_URL/$path"
    else
        local json_data="{"
        local first=true
        
        while [ $# -gt 0 ]; do
            local key="${1#--}"
            local value="$2"
            
            if [ "$first" = true ]; then
                first=false
            else
                json_data="$json_data,"
            fi
            
            json_data="$json_data\"$key\":\"$value\""
            shift 2
        done
        
        json_data="$json_data}"
        
        curl -s \
            --request "$method" \
            --header "Private-Token: $GITLAB_TOKEN" \
            --header "Content-Type: application/json" \
            --data "$json_data" \
            "$CI_API_V4_URL/$path"
    fi
}

# Создание git тега через GitLab API
create_release_tag() {
    # Проверяем наличие CI_PROJECT_ID
    if [ -z "${CI_PROJECT_ID:-}" ]; then
        echo "❌ ERROR: CI_PROJECT_ID is not set"
        return 1
    fi
    
    local version
    version=$(node -p "require('./package.json').version")
    
    local tag_name="v$version"
    
    echo "🏷️  Creating release tag..."
    echo "📦 Package version: $version"
    echo "🏷️  Tag name: $tag_name"
    
    # Проверяем существование тега
    echo "🔍 Checking if tag exists..."
    
    local check_response
    check_response=$(gitlab_api "GET" "projects/$CI_PROJECT_ID/repository/tags/$tag_name")
    
    if echo "$check_response" | grep -q '"name"'; then
        echo "⚠️  Tag $tag_name already exists!"
        echo "💡 Please update package.json version"
        return 1
    fi
    
    # Создаем тег
    echo "🚀 Creating tag via GitLab API..."
    
    local response
    response=$(gitlab_api "POST" "projects/$CI_PROJECT_ID/repository/tags" \
        --tag_name "$tag_name" \
        --ref "$CI_COMMIT_SHA" \
        --message "Release version $version")
    
    if echo "$response" | grep -q '"name"'; then
        echo "✅ Release tag $tag_name created!"
        echo "🚀 This will trigger release pipeline"
    else
        echo "❌ Failed to create tag"
        echo "Response: $response"
        return 1
    fi
}

