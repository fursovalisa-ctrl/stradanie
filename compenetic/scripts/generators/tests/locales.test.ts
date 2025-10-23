import { describe, it, expect, beforeEach, vi } from 'vitest';
import fs from 'fs-extra';
import path from 'path';
import { updateLocaleFiles, updateLocaleTypeFile } from '../modules/locales';

vi.mock('fs-extra', () => {
  const mockFunctions = {
    readFile: vi.fn(),
    writeFile: vi.fn(),
  };
  return {
    default: mockFunctions,
    ...mockFunctions,
  };
});

vi.mock('../modules/utils', () => ({
  getLocaleDir: vi.fn().mockReturnValue('/mock/src/locale'),
  logFileOperation: vi.fn(),
  formatError: vi.fn().mockImplementation((msg: string) => msg),
  formatLocaleVarName: vi
    .fn()
    .mockImplementation(
      (componentName: string, lang: string) =>
        `${componentName.toLowerCase()}${lang.charAt(0).toUpperCase() + lang.slice(1)}`,
    ),
}));

describe('Localization Module', () => {
  const mockComponentName = 'TestComponent';
  // Используем path.join для кроссплатформенных путей
  const mockTypePath = path.join('/', 'mock', 'src', 'locale', 'type.ts');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('updateLocaleTypeFile', () => {
    const mockTypeContent = `
import type { ModalLocale } from '../components/Modal/Modal.type';
import type { ButtonLocale } from '../components/Button/Button.type';

export type ComponentLocale<T> = {
  [K in keyof T]: T[K];
};

export type Locale = ComponentLocale<{
  Modal: ModalLocale;
  Button: ButtonLocale;
}>;`;

    it('should add component type import and type definition', async () => {
      vi.mocked(fs.readFile).mockResolvedValue(mockTypeContent);
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const result = await updateLocaleTypeFile(mockComponentName);

      expect(result.success).toBe(true);
      expect(fs.writeFile).toHaveBeenCalledWith(
        mockTypePath,
        expect.stringContaining(`import type { TestComponentLocale }`),
      );
      expect(fs.writeFile).toHaveBeenCalledWith(
        mockTypePath,
        expect.stringContaining(`TestComponent: TestComponentLocale;`),
      );
    });

    it('should handle file read errors', async () => {
      const error = new Error('File read error');
      vi.mocked(fs.readFile).mockRejectedValue(error);

      const result = await updateLocaleTypeFile(mockComponentName);

      expect(result.success).toBe(false);
      expect(result.error).toContain('File read error');
    });
  });

  describe('updateLocaleFiles', () => {
    const mockLocaleContent = `
import type { Locale } from './type';
import { en as modalEn } from '../components/Modal/Modal.i18n';

const locale: Locale = {
  Modal: modalEn
};

export default locale;`;

    it('should update both locale files with component imports and entries', async () => {
      vi.mocked(fs.readFile).mockResolvedValue(mockLocaleContent);
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const result = await updateLocaleFiles(mockComponentName);

      expect(result.success).toBe(true);
      expect(fs.writeFile).toHaveBeenCalledTimes(2);
      expect(fs.writeFile).toHaveBeenCalledWith(
        expect.any(String),
        expect.stringContaining(`import { en as testcomponentEn }`),
      );
      expect(fs.writeFile).toHaveBeenCalledWith(
        expect.any(String),
        expect.stringContaining(`TestComponent: testcomponentEn,`),
      );
    });

    it('should handle file read errors', async () => {
      const error = new Error('File read error');
      vi.mocked(fs.readFile).mockRejectedValue(error);

      const result = await updateLocaleFiles(mockComponentName);

      expect(result.success).toBe(false);
      expect(result.error).toContain('File read error');
    });

    it('should not update files if no changes needed', async () => {
      const mockEnContent = `
import type { Locale } from './type';
import { en as testcomponentEn } from '../components/TestComponent/TestComponent.i18n';

const locale: Locale = {
  TestComponent: testcomponentEn
};

export default locale;`;

      const mockRuContent = `
import type { Locale } from './type';
import { ru as testcomponentRu } from '../components/TestComponent/TestComponent.i18n';

const locale: Locale = {
  TestComponent: testcomponentRu
};

export default locale;`;

      vi.mocked(fs.readFile).mockImplementation((path: string) => {
        if (path.includes('en_US.ts')) {
          return Promise.resolve(mockEnContent);
        } else if (path.includes('ru_RU.ts')) {
          return Promise.resolve(mockRuContent);
        }
        return Promise.reject(new Error('Unknown file'));
      });

      const result = await updateLocaleFiles(mockComponentName);

      expect(result.success).toBe(true);
      expect(fs.writeFile).not.toHaveBeenCalled();
    });
  });
});
