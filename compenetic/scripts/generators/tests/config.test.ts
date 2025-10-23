import { describe, it, expect, beforeEach, vi } from 'vitest';
import { loadConfig, processOptions, DEFAULT_CONFIG } from '../modules/config';
import { cosmiconfigSync } from 'cosmiconfig';
import type { PublicExplorerSync } from 'cosmiconfig';

vi.mock('cosmiconfig');

describe('Configuration Module', () => {
  describe('loadConfig', () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    it('should return default config when no config file exists', () => {
      const mockExplorer = {
        search: vi.fn().mockReturnValue(null),
        load: vi.fn(),
        clearLoadCache: vi.fn(),
        clearSearchCache: vi.fn(),
        clearCaches: vi.fn(),
      } as unknown as PublicExplorerSync;

      vi.mocked(cosmiconfigSync).mockReturnValue(mockExplorer);

      const config = loadConfig();
      expect(config).toEqual(DEFAULT_CONFIG);
    });

    it('should merge custom config with default config', () => {
      const customConfig = {
        componentsDir: 'custom-components',
        style: 'scss',
      };

      const mockExplorer = {
        search: vi.fn().mockReturnValue({
          config: customConfig,
          filepath: '/mock/path/.skillgridrc',
          isEmpty: false,
        }),
        load: vi.fn(),
        clearLoadCache: vi.fn(),
        clearSearchCache: vi.fn(),
        clearCaches: vi.fn(),
      } as unknown as PublicExplorerSync;

      vi.mocked(cosmiconfigSync).mockReturnValue(mockExplorer);

      const config = loadConfig();
      expect(config).toEqual({
        ...DEFAULT_CONFIG,
        ...customConfig,
      });
    });
  });

  describe('processOptions', () => {
    it('should use config values when options are undefined', () => {
      const config = {
        ...DEFAULT_CONFIG,
        withI18n: false,
        withHook: false,
        withStories: false,
        withIndex: false,
      };

      const options = {};
      const result = processOptions(options, config);

      expect(result).toEqual({
        withI18n: false,
        withHook: false,
        withStories: false,
        withIndex: false,
      });
    });

    it('should override config values with options', () => {
      const config = {
        ...DEFAULT_CONFIG,
        withI18n: false,
        withHook: false,
        withStories: false,
        withIndex: false,
      };

      const options = {
        i18n: true,
        hook: true,
        stories: true,
        withIndex: true,
      };

      const result = processOptions(options, config);

      expect(result).toEqual({
        withI18n: true,
        withHook: true,
        withStories: true,
        withIndex: true,
      });
    });
  });
});
