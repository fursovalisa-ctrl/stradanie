import { cosmiconfigSync } from 'cosmiconfig';

/**
 * Модуль конфигурации генератора компонентов
 *
 * Этот модуль отвечает за:
 * 1. Загрузку конфигурации из файла проекта
 * 2. Обработку опций командной строки
 * 3. Слияние пользовательских настроек с дефолтными значениями
 *
 * Конфигурация может быть определена в файле проекта и включает:
 * - Пути к директориям компонентов
 * - Опции генерации по умолчанию
 * - Настройки шаблонов
 *
 * @module config
 */

export interface ComponentOptions {
  withI18n: boolean;
  withHook: boolean;
  withStories: boolean;
  withIndex: boolean;
}

export interface ComponentConfig extends ComponentOptions {
  componentsDir: string;
  style: string;
  indexFile: string;
  appFile: string;
  storybookUrl: string;
}

export const DEFAULT_CONFIG: ComponentConfig = {
  componentsDir: 'components',
  style: 'css',
  withStories: true,
  withHook: true,
  withI18n: true,
  withIndex: true,
  indexFile: 'src/index.ts',
  appFile: 'src/App.tsx',
  storybookUrl: 'http://localhost:6006',
};

/**
 * Loads configuration from .skillgridrc.json
 */
export const loadConfig = (): ComponentConfig => {
  const explorer = cosmiconfigSync('skillgrid');
  const searchResult = explorer.search();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return { ...DEFAULT_CONFIG, ...searchResult?.config };
};

/**
 * Processes CLI options and merges them with config
 */
export const processOptions = (
  options: Record<string, boolean | undefined>,
  config: ComponentConfig,
): ComponentOptions => {
  return {
    withI18n: options.i18n === undefined ? config.withI18n : options.i18n,
    withHook: options.hook === undefined ? config.withHook : options.hook,
    withStories: options.stories === undefined ? config.withStories : options.stories,
    withIndex: options.withIndex === undefined ? config.withIndex : options.withIndex,
  };
};
