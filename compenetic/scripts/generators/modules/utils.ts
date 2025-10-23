import path from 'path';
import chalk from 'chalk';

export interface FileOperation {
  operation: 'create' | 'update';
  filePath: string;
  details?: string;
}

/**
 * Вспомогательный модуль генератора компонентов
 *
 * Этот модуль предоставляет набор утилитарных функций для:
 * 1. Работы с путями файловой системы
 * 2. Форматирования имен и идентификаторов
 * 3. Логирования операций генерации
 * 4. Обработки ошибок
 *
 * Основные функции:
 * - getLocaleDir() - Получение пути к директории локализации
 * - formatLocaleVarName() - Форматирование имени переменной локализации
 * - logFileOperation() - Логирование операций с файлами
 * - formatError() - Форматирование сообщений об ошибках
 *
 * Особенности:
 * - Кроссплатформенная работа с путями
 * - Единый формат логирования
 * - Стандартизированная обработка ошибок
 *
 * @module utils
 */

/**
 * Formats and logs a file operation
 */
export const logFileOperation = (operation: FileOperation): void => {
  const { operation: op, filePath, details = '' } = operation;
  const relativePath = path.relative(process.cwd(), filePath);
  const icon = op === 'create' ? '✨' : op === 'update' ? '📝' : '🔄';
  const color = op === 'create' ? 'green' : op === 'update' ? 'blue' : 'yellow';

  console.log(
    chalk[color](`${icon} ${op.charAt(0).toUpperCase() + op.slice(1)}d:`),
    chalk.bold(relativePath),
    details ? chalk.gray(`(${details})`) : '',
  );
};

/**
 * Formats an error message
 */
export const formatError = (message: string): string => {
  return chalk.red(`❌ ${message}`);
};

/**
 * Gets the component directory path
 */
export const getComponentDir = (componentName: string, componentsDir: string): string => {
  return path.join(process.cwd(), 'src', componentsDir, componentName);
};

/**
 * Gets the locale directory path
 */
export const getLocaleDir = (): string => {
  return path.join(process.cwd(), 'src', 'locale');
};

/**
 * Formats a component name to match locale variable naming convention
 */
export const formatLocaleVarName = (componentName: string, lang: string): string => {
  return `${componentName.toLowerCase()}${lang.charAt(0).toUpperCase() + lang.slice(1)}`;
};
