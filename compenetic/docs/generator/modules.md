# Модули генератора

## Основные модули

### Config
Модуль для работы с конфигурацией:
- Загрузка конфигурации из `.skillgridrc.json`
- Обработка опций командной строки
- Слияние пользовательских настроек с дефолтными значениями

### Templates
Модуль для работы с шаблонами:
- Загрузка шаблонов из файлов
- Компиляция через Handlebars
- Подстановка переменных и форматирование кода

### Files
Модуль для работы с файлами:
- Создание структуры директорий компонента
- Генерация файлов из шаблонов
- Обновление индексных файлов
- Интеграция компонента в приложение

### Locales
Модуль для работы с локализацией:
- Обновление типов локализации в type.ts
- Обновление файлов локализации для каждого языка
- Синхронизация переводов между языками

## Структура кода

```typescript
// config.ts
interface ComponentConfig {
  componentsDir: string;
  style: string;
  withStories: boolean;
  withIndex: boolean;
  withHook: boolean;
  withI18n: boolean;
  indexFile: string;
  appFile: string;
  storybookUrl: string;
}

export const loadConfig = (): ComponentConfig => { /* ... */ };
export const processOptions = (options: Record<string, any>, config: ComponentConfig): ComponentOptions => { /* ... */ };

// templates.ts
export const TEMPLATES = {
  component: (name: string, styleExt: string, options?: ComponentOptions) => string;
  test: (name: string, options?: ComponentOptions) => string;
  type: (name: string, options?: ComponentOptions) => string;
  style: () => string;
  hook: (name: string) => string;
  story: (name: string, options: ComponentOptions, storybookUrl: string) => string;
  index: (name: string, options: ComponentOptions) => string;
  i18n: (name: string) => string;
};

// files.ts
interface FileGenerationResult {
  success: boolean;
  error?: string;
  filesCreated?: string[];
}

export const generateComponentFiles = async (
  componentName: string,
  config: ComponentConfig,
  options: ComponentOptions
): Promise<FileGenerationResult>;

export const updateIndexFile = async (
  componentName: string,
  config: ComponentConfig
): Promise<FileGenerationResult>;

// locales.ts
interface LocaleUpdateResult {
  success: boolean;
  error?: string;
}

export const updateLocaleTypeFile = async (
  componentName: string
): Promise<LocaleUpdateResult>;

export const updateLocaleFiles = async (
  componentName: string
): Promise<LocaleUpdateResult>;
```

## Расширение

Для добавления нового модуля:

1. Создайте файл модуля в директории `modules/`
2. Определите необходимые интерфейсы и типы
3. Реализуйте основные функции
4. Добавьте тесты в директорию `tests/`
5. Обновите документацию 