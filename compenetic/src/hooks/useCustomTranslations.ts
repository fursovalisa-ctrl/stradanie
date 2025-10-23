import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { I18nConfig } from '../types';

/**
 * Hook for handling custom translations in components
 *
 * @param {string} namespace - Translation namespace (usually component name in lowercase)
 * @param {I18nConfig} [customTranslations] - Custom translations to override defaults
 * @returns {(key: string, options?: any) => string} Translation function
 */
export const useCustomTranslations = (namespace: string, customTranslations?: I18nConfig) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!customTranslations) return;

    const currentLang = i18n.language;
    const translations = customTranslations[currentLang]?.[namespace] || {};

    Object.entries(translations).forEach(([key, value]) => {
      const fullKey = `${namespace}.${key}`;
      i18n.addResource(currentLang, 'translation', fullKey, value);
    });
  }, [namespace, customTranslations, i18n]);

  return t;
};
