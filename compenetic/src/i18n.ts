import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import component translations
import languageSwitcherTranslations from './components/LanguageSwitcher/LanguageSwitcher.i18n.json';

const resources = {
  en: {
    translation: {
      ...languageSwitcherTranslations.en,
    },
  },
  ru: {
    translation: {
      ...languageSwitcherTranslations.ru,
    },
  },
};

// eslint-disable-next-line import/no-named-as-default-member, @typescript-eslint/no-floating-promises
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
