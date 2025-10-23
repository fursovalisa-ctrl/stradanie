import fs from 'fs-extra';
import path from 'path';
import Handlebars from 'handlebars';
import { formatError } from './utils';
import type { ComponentOptions } from './config';

// Регистрируем хелперы
Handlebars.registerHelper('lowercase', (str: string): string => str.toLowerCase());

/**
 * Модуль управления шаблонами компонентов
 *
 * Этот модуль отвечает за:
 * 1. Загрузку шаблонов из файлов
 * 2. Обработку переменных в шаблонах
 * 3. Форматирование сгенерированного кода
 *
 * Система шаблонов поддерживает:
 * - Подстановку переменных (например, ${componentName})
 * - Условные блоки (для опциональных частей)
 * - Форматирование кода по правилам проекта
 *
 * Доступные шаблоны:
 * - component.tsx.template      # Шаблон React компонента
 * - component.type.ts.template  # Шаблон файла типов
 * - component.i18n.ts.template  # Шаблон локализации
 * - component.hook.ts.template  # Шаблон хука
 * - component.stories.template  # Шаблон историй
 * - index.ts.template          # Шаблон индексного файла
 *
 * Переменные шаблона:
 * - ${componentName} - Имя компонента
 * - ${styles} - Импорт стилей
 * - ${imports} - Дополнительные импорты
 * - ${props} - Пропсы компонента
 * - ${hooks} - Используемые хуки
 *
 * @module templates
 */

const defaultOptions: ComponentOptions = {
  withI18n: true,
  withHook: false,
  withStories: true,
  withIndex: true,
};

/**
 * Loads and compiles a template
 */
export const loadTemplate = (templateName: string): Handlebars.TemplateDelegate => {
  const templatePath = path.join(
    process.cwd(),
    'scripts',
    'generators',
    'templates',
    `${templateName}.hbs`,
  );
  try {
    const template = fs.readFileSync(templatePath, 'utf8');
    return Handlebars.compile(template);
  } catch (error) {
    throw new Error(formatError(`Error loading template ${templateName}: ${error.message}`));
  }
};

export const TEMPLATES = {
  component: (name: string, styleExt: string, options: ComponentOptions = defaultOptions) => {
    const template = loadTemplate(options.withI18n ? 'component' : 'component-no-i18n');
    return template({ name, styleExt });
  },

  test: (name: string, options: ComponentOptions = defaultOptions) => {
    const template = loadTemplate(options.withI18n ? 'test' : 'test-no-i18n');
    return template({ name });
  },

  type: (name: string, options: ComponentOptions = defaultOptions) => {
    const template = loadTemplate(options.withI18n ? 'type' : 'type-no-i18n');
    return template({ name });
  },

  style: () => {
    const template = loadTemplate('style');
    return template({});
  },

  hook: (name: string) => {
    const template = loadTemplate('hook');
    return template({ name });
  },

  story: (name: string, options: ComponentOptions = defaultOptions, storybookUrl: string) => {
    const template = loadTemplate(options.withI18n ? 'story' : 'story-no-i18n');
    return template({ name, storybookUrl });
  },

  index: (name: string, options: ComponentOptions = defaultOptions) => {
    const template = loadTemplate('index');
    return template({
      name,
      withIndex: options.withIndex,
      withHook: options.withHook,
    });
  },

  i18n: (name: string) => {
    const template = loadTemplate('i18n');
    return template({ name });
  },

  appComponent: (name: string, storybookUrl: string) => {
    const template = loadTemplate('app-component');
    return template({ name, storybookUrl });
  },
};

export const getTemplateData = (
  componentName: string,
  options: ComponentOptions,
): TemplateData => ({
  componentName,
  withI18n: options.withI18n,
  withHook: options.withHook,
  withStories: options.withStories,
});
