import fs from 'fs-extra';
import path from 'path';
import { logFileOperation, formatError, getComponentDir } from './utils';
import { TEMPLATES } from './templates';
import type { ComponentConfig, ComponentOptions } from './config';

interface FileGenerationResult {
  success: boolean;
  error?: string;
  filesCreated?: string[];
}

/**
 * Модуль генерации файлов компонента
 *
 * Этот модуль отвечает за создание и обновление файлов компонента:
 * 1. Создание структуры директорий
 * 2. Генерация файлов компонента из шаблонов
 * 3. Обновление индексных файлов
 * 4. Интеграция компонента в приложение
 *
 * Структура генерируемых файлов:
 * ```
 * ComponentName/
 * ├── ComponentName.tsx          # Основной файл компонента
 * ├── ComponentName.type.ts      # Типы компонента
 * ├── ComponentName.module.scss  # Стили компонента
 * ├── ComponentName.i18n.ts      # Локализация (опционально)
 * ├── ComponentName.hook.ts      # Хук компонента (опционально)
 * ├── ComponentName.stories.tsx  # Истории (опционально)
 * └── index.ts                  # Индексный файл (опционально)
 * ```
 *
 * Особенности работы:
 * - Проверка существования файлов перед созданием
 * - Сохранение форматирования при обновлении файлов
 * - Поддержка различных опций генерации
 * - Обработка ошибок с подробным логированием
 *
 * @module files
 */

/**
 * Updates the main index file with component exports
 */
export const updateIndexFile = async (
  componentName: string,
  config: ComponentConfig,
): Promise<FileGenerationResult> => {
  if (!config.withIndex) return { success: true };

  const indexPath = path.join(process.cwd(), config.indexFile);
  const exportStatement = `export * from './${config.componentsDir}/${componentName}';\n`;

  try {
    await fs.ensureFile(indexPath);
    const content = await fs.readFile(indexPath, 'utf8');

    if (!content.includes(exportStatement)) {
      await fs.appendFile(indexPath, exportStatement);
      logFileOperation({
        operation: 'update',
        filePath: indexPath,
        details: `added export for ${componentName}`,
      });
    }
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: formatError(`Error updating index file: ${error.message}`),
    };
  }
};

/**
 * Updates App.tsx with component registration
 */
export const updateAppFile = async (
  componentName: string,
  config: ComponentConfig,
): Promise<FileGenerationResult> => {
  const appPath = path.join(process.cwd(), config.appFile);

  try {
    let content = await fs.readFile(appPath, 'utf8');
    const changes: string[] = [];

    // Добавляем импорт компонента
    const importStatement = `import { ${componentName} } from './components/${componentName}';`;
    if (!content.includes(importStatement)) {
      const importInsertPosition =
        content.indexOf("import './App.css'") + "import './App.css'".length;
      content =
        content.slice(0, importInsertPosition) +
        '\n' +
        importStatement +
        content.slice(importInsertPosition);
      changes.push('added component import');
    }

    // Добавляем компонент в массив компонентов
    const componentEntry = TEMPLATES.appComponent(componentName, config.storybookUrl);
    const componentsArrayStart = content.indexOf('const components = [');
    if (componentsArrayStart !== -1) {
      const componentsArrayEnd = content.indexOf('];', componentsArrayStart);
      const arrayContent = content.slice(componentsArrayStart, componentsArrayEnd);

      if (!arrayContent.includes(`name: '${componentName}'`)) {
        const insertPosition = componentsArrayEnd;
        content =
          content.slice(0, insertPosition) +
          (arrayContent.trim().endsWith('{') ? '' : ',\n  ') +
          componentEntry +
          content.slice(insertPosition);
        changes.push('added component to components array');
      }
    }

    if (changes.length > 0) {
      await fs.writeFile(appPath, content);
      logFileOperation({
        operation: 'update',
        filePath: appPath,
        details: changes.join(', '),
      });
    }
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: formatError(`Error updating App.tsx: ${error.message}`),
    };
  }
};

/**
 * Generates all component files
 */
export const generateComponentFiles = async (
  componentName: string,
  config: ComponentConfig,
  options: ComponentOptions,
): Promise<FileGenerationResult> => {
  const componentDir = getComponentDir(componentName, config.componentsDir);

  try {
    if (await fs.pathExists(componentDir)) {
      return {
        success: false,
        error: formatError(`Component "${componentName}" already exists!`),
      };
    }

    await fs.ensureDir(componentDir);
    const filesCreated: string[] = [];

    const files = {
      [`${componentName}.tsx`]: TEMPLATES.component(componentName, config.style, options),
      [`${componentName}.test.tsx`]: TEMPLATES.test(componentName, options),
      [`${componentName}.module.${config.style}`]: TEMPLATES.style(),
      [`${componentName}.type.ts`]: TEMPLATES.type(componentName, options),
      'index.ts': TEMPLATES.index(componentName, options),
    };

    if (options.withI18n) {
      files[`${componentName}.i18n.ts`] = TEMPLATES.i18n(componentName);
    }

    if (options.withHook) {
      files[`${componentName}.hook.ts`] = TEMPLATES.hook(componentName);
    }

    if (options.withStories) {
      files[`${componentName}.stories.tsx`] = TEMPLATES.story(
        componentName,
        options,
        config.storybookUrl,
      );
    }

    for (const [fileName, content] of Object.entries(files)) {
      const filePath = path.join(componentDir, fileName);
      await fs.writeFile(filePath, content);
      logFileOperation({
        operation: 'create',
        filePath,
      });
      filesCreated.push(fileName);
    }

    return {
      success: true,
      filesCreated,
    };
  } catch (error) {
    return {
      success: false,
      error: formatError(`Error generating component files: ${error.message}`),
    };
  }
};
