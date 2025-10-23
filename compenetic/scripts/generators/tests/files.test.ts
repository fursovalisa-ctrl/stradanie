import { describe, it, expect, beforeEach, vi } from 'vitest';
import fs from 'fs-extra';
import { generateComponentFiles, updateIndexFile, updateAppFile } from '../modules/files';
import type { ComponentConfig, ComponentOptions } from '../modules/config';

vi.mock('fs-extra', () => ({
  default: {
    pathExists: vi.fn(),
    ensureDir: vi.fn(),
    writeFile: vi.fn(),
    readFile: vi.fn(),
    appendFile: vi.fn(),
    ensureFile: vi.fn(),
  },
  pathExists: vi.fn(),
  ensureDir: vi.fn(),
  writeFile: vi.fn(),
  readFile: vi.fn(),
  appendFile: vi.fn(),
  ensureFile: vi.fn(),
}));

vi.mock('../modules/templates', () => ({
  TEMPLATES: {
    component: vi.fn().mockReturnValue('mock component content'),
    test: vi.fn().mockReturnValue('mock test content'),
    style: vi.fn().mockReturnValue('mock style content'),
    type: vi.fn().mockReturnValue('mock type content'),
    index: vi.fn().mockReturnValue('mock index content'),
    i18n: vi.fn().mockReturnValue('mock i18n content'),
    hook: vi.fn().mockReturnValue('mock hook content'),
    story: vi.fn().mockReturnValue('mock story content'),
    appComponent: vi.fn().mockReturnValue(`
import './App.css';
import { TestComponent } from './components/TestComponent';
import { Modal } from './components/Modal';

const components = [
  {
    name: 'Modal',
    component: Modal,
  },
  {
    name: 'TestComponent',
    component: TestComponent,
  }
];`),
  },
}));

vi.mock('../modules/utils', () => ({
  getComponentDir: vi.fn().mockImplementation((name, dir) => `/mock/src/${dir}/${name}`),
  logFileOperation: vi.fn(),
  formatError: vi.fn().mockImplementation((...args: unknown[]) => {
    const msg = args[0];
    return typeof msg === 'string' ? msg : String(msg);
  }),
}));

describe('Files Module', () => {
  const mockComponentName = 'TestComponent';
  const mockConfig: ComponentConfig = {
    componentsDir: 'components',
    style: 'css',
    withStories: true,
    withIndex: true,
    withHook: true,
    withI18n: true,
    indexFile: 'src/index.ts',
    appFile: 'src/App.tsx',
    storybookUrl: 'http://localhost:6006',
  };
  const mockOptions: ComponentOptions = {
    withI18n: true,
    withHook: true,
    withStories: true,
    withIndex: true,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('generateComponentFiles', () => {
    it('should generate all component files when all options are enabled', async () => {
      vi.mocked(fs.pathExists).mockResolvedValue(false);
      vi.mocked(fs.ensureDir).mockResolvedValue(undefined);
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const result = await generateComponentFiles(mockComponentName, mockConfig, mockOptions);

      expect(result.success).toBe(true);
      expect(result.filesCreated?.length).toBe(8); // All possible files
      expect(fs.writeFile).toHaveBeenCalledTimes(8);
    });

    it('should not generate optional files when options are disabled', async () => {
      const options: ComponentOptions = {
        withI18n: false,
        withHook: false,
        withStories: false,
        withIndex: true,
      };

      vi.mocked(fs.pathExists).mockResolvedValue(false);
      vi.mocked(fs.ensureDir).mockResolvedValue(undefined);
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const result = await generateComponentFiles(mockComponentName, mockConfig, options);

      expect(result.success).toBe(true);
      expect(result.filesCreated?.length).toBe(5); // Base files only
      expect(fs.writeFile).toHaveBeenCalledTimes(5);
    });

    it('should fail if component already exists', async () => {
      vi.mocked(fs.pathExists).mockResolvedValue(true);

      const result = await generateComponentFiles(mockComponentName, mockConfig, mockOptions);

      expect(result.success).toBe(false);
      expect(result.error).toContain('already exists');
      expect(fs.writeFile).not.toHaveBeenCalled();
    });
  });

  describe('updateIndexFile', () => {
    it('should add component export if not present', async () => {
      vi.mocked(fs.ensureFile).mockResolvedValue(undefined);
      vi.mocked(fs.readFile).mockResolvedValue('existing content');
      vi.mocked(fs.appendFile).mockResolvedValue(undefined);

      const result = await updateIndexFile(mockComponentName, mockConfig);

      expect(result.success).toBe(true);
      expect(fs.appendFile).toHaveBeenCalledWith(
        expect.any(String),
        expect.stringContaining('export * from'),
      );
    });

    it('should not add export if already present', async () => {
      const existingContent = `export * from './components/TestComponent';\n`;
      vi.mocked(fs.ensureFile).mockResolvedValue(undefined);
      vi.mocked(fs.readFile).mockResolvedValue(existingContent);

      const result = await updateIndexFile(mockComponentName, mockConfig);

      expect(result.success).toBe(true);
      expect(fs.appendFile).not.toHaveBeenCalled();
    });
  });

  describe('updateAppFile', () => {
    const mockAppContent = `
import './App.css';
import { Modal } from './components/Modal';

const components = [
  {
    name: 'Modal',
    component: Modal,
  }
];`;

    it('should add component import and registration', async () => {
      vi.mocked(fs.readFile).mockResolvedValue(mockAppContent);
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const result = await updateAppFile(mockComponentName, mockConfig);

      expect(result.success).toBe(true);
      expect(fs.writeFile).toHaveBeenCalledWith(
        expect.any(String),
        expect.stringContaining(`import { TestComponent }`),
      );
      expect(fs.writeFile).toHaveBeenCalledWith(
        expect.any(String),
        expect.stringContaining(`name: 'TestComponent'`),
      );
    });

    it('should not modify file if component already registered', async () => {
      const contentWithComponent = `
import './App.css';
import { TestComponent } from './components/TestComponent';

const components = [
  {
    name: 'TestComponent',
    component: TestComponent,
  }
];`;

      vi.mocked(fs.readFile).mockResolvedValue(contentWithComponent);

      const result = await updateAppFile(mockComponentName, mockConfig);

      expect(result.success).toBe(true);
      expect(fs.writeFile).not.toHaveBeenCalled();
    });
  });
});
