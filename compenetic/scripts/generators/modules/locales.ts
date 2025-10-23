/**
 * Модуль для управления локализацией компонентов
 *
 * Этот модуль отвечает за автоматическое обновление файлов локализации при добавлении новых компонентов.
 * Он поддерживает два основных аспекта локализации:
 * 1. Обновление типов локализации в файле type.ts
 * 2. Обновление файлов локализации для каждого поддерживаемого языка (en_US.ts и ru_RU.ts)
 *
 * Структура файлов локализации:
 * ```
 * src/locale/
 * ├── type.ts              # Типы для всех локализаций компонентов
 * ├── en_US.ts             # Английская локализация
 * └── ru_RU.ts             # Русская локализация
 * ```
 *
 * Каждый компонент, требующий локализации, должен иметь:
 * 1. Файл с типами локализации: ComponentName.type.ts
 * 2. Файл с текстами локализации: ComponentName.i18n.ts
 *
 * @module locales
 */

import fs from 'fs-extra';
import path from 'path';
import { getLocaleDir, formatLocaleVarName, logFileOperation, formatError } from './utils';

interface LocaleUpdateResult {
  success: boolean;
  error?: string;
}

/**
 * Обновляет файл с типами локализации (type.ts)
 *
 * Функция выполняет следующие операции:
 * 1. Добавляет импорт типа локализации нового компонента
 * 2. Добавляет тип компонента в общий тип Locale
 *
 * Пример результата:
 * ```typescript
 * import type { ButtonLocale } from '../components/Button/Button.type';
 * import type { NewComponentLocale } from '../components/NewComponent/NewComponent.type';
 *
 * export type Locale = ComponentLocale<{
 *   Button: ButtonLocale;
 *   NewComponent: NewComponentLocale;
 * }>;
 * ```
 *
 * @param componentName - Имя компонента в PascalCase (например, 'Button', 'Modal')
 * @returns Promise<LocaleUpdateResult> - Результат операции
 * @throws Не выбрасывает исключения, все ошибки обрабатываются и возвращаются в объекте результата
 */
export const updateLocaleTypeFile = async (componentName: string): Promise<LocaleUpdateResult> => {
  const typePath = path.join(getLocaleDir(), 'type.ts');
  try {
    let content = await fs.readFile(typePath, 'utf8');
    const changes: string[] = [];

    // Добавляем импорт типа локализации компонента
    const importStatement = `import type { ${componentName}Locale } from '../components/${componentName}/${componentName}.type';`;
    if (!content.includes(importStatement)) {
      const lastImportIndex = content.lastIndexOf('import');
      const endOfImports = content.indexOf('\n', lastImportIndex);
      content =
        content.slice(0, endOfImports) + '\n' + importStatement + content.slice(endOfImports);
      changes.push(`added import for ${componentName}Locale`);
    }

    // Добавляем тип в Locale
    const localeTypeStart = content.indexOf('export type Locale = ComponentLocale<{');
    if (localeTypeStart !== -1) {
      const localeTypeEnd = content.indexOf('}>');
      const beforeClosingBrace = content.lastIndexOf('\n', localeTypeEnd);

      const componentEntry = `  ${componentName}: ${componentName}Locale;`;

      if (!content.includes(componentEntry)) {
        content =
          content.slice(0, beforeClosingBrace) +
          (content.slice(beforeClosingBrace).trim().startsWith('}') ? '  ' : '\n') +
          componentEntry +
          content.slice(beforeClosingBrace);
        changes.push(`added ${componentName} to Locale type`);
      }
    }

    if (changes.length > 0) {
      await fs.writeFile(typePath, content);
      logFileOperation({
        operation: 'update',
        filePath: typePath,
        details: changes.join(', '),
      });
    }
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: formatError(`Error updating locale type definitions: ${error.message}`),
    };
  }
};

/**
 * Обновляет файлы локализации для всех поддерживаемых языков
 *
 * Функция обрабатывает каждый языковой файл (en_US.ts и ru_RU.ts) и выполняет следующие операции:
 * 1. Добавляет импорт локализации компонента с правильным алиасом для языка
 * 2. Добавляет запись компонента в объект локализации
 *
 * Особенности работы:
 * - Проверяет наличие существующих импортов и записей, чтобы избежать дублирования
 * - Сохраняет форматирование файла
 * - Добавляет запятые и отступы в нужных местах
 * - Обрабатывает оба языковых файла независимо
 *
 * Пример результата для en_US.ts:
 * ```typescript
 * import { en as buttonEn } from '../components/Button/Button.i18n';
 * import { en as newComponentEn } from '../components/NewComponent/NewComponent.i18n';
 *
 * const locale: Locale = {
 *   Button: buttonEn,
 *   NewComponent: newComponentEn
 * };
 * ```
 *
 * Пример результата для ru_RU.ts:
 * ```typescript
 * import { ru as buttonRu } from '../components/Button/Button.i18n';
 * import { ru as newComponentRu } from '../components/NewComponent/NewComponent.i18n';
 *
 * const locale: Locale = {
 *   Button: buttonRu,
 *   NewComponent: newComponentRu
 * };
 * ```
 *
 * @param componentName - Имя компонента в PascalCase (например, 'Button', 'Modal')
 * @returns Promise<LocaleUpdateResult> - Результат операции
 * @throws Не выбрасывает исключения, все ошибки обрабатываются и возвращаются в объекте результата
 */
export const updateLocaleFiles = async (componentName: string): Promise<LocaleUpdateResult> => {
  const localeFiles = ['en_US.ts', 'ru_RU.ts'];
  const localeDir = getLocaleDir();

  try {
    for (const localeFile of localeFiles) {
      const filePath = path.join(localeDir, localeFile);
      let content = await fs.readFile(filePath, 'utf8');
      const changes: string[] = [];

      // Определяем язык из имени файла
      const lang = localeFile.startsWith('en') ? 'en' : 'ru';
      const varName = formatLocaleVarName(componentName, lang);

      // Добавляем импорт, если его еще нет
      const importStatement = `import { ${lang} as ${varName} } from '../components/${componentName}/${componentName}.i18n';`;
      const componentEntry = `  ${componentName}: ${varName}`;

      let needsUpdate = false;

      // Check if import exists - use exact match to avoid partial matches
      const hasImport = content.includes(importStatement);
      if (!hasImport) {
        const lastImportIndex = content.lastIndexOf('import');
        const endOfImports = content.indexOf('\n', lastImportIndex);
        content =
          content.slice(0, endOfImports) + '\n' + importStatement + content.slice(endOfImports);
        changes.push(`added import for ${lang} locale`);
        needsUpdate = true;
      }

      // Check if component entry exists - use exact match to avoid partial matches
      const localeObjectStart = content.indexOf('const locale: Locale = {');
      const hasComponentEntry = content.includes(componentEntry);
      if (localeObjectStart !== -1 && !hasComponentEntry) {
        const localeObjectEnd = content.indexOf('};', localeObjectStart);
        const beforeClosingBrace = content.lastIndexOf('\n', localeObjectEnd);

        content =
          content.slice(0, beforeClosingBrace) +
          (content.slice(beforeClosingBrace).trim().startsWith('}') ? '  ' : ',\n') +
          componentEntry +
          ',' +
          content.slice(beforeClosingBrace);
        changes.push(`added ${componentName} to locale object`);
        needsUpdate = true;
      }

      if (needsUpdate) {
        await fs.writeFile(filePath, content);
        logFileOperation({
          operation: 'update',
          filePath,
          details: changes.join(', '),
        });
      }
    }
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: formatError(`Error updating locale files: ${error.message}`),
    };
  }
};
