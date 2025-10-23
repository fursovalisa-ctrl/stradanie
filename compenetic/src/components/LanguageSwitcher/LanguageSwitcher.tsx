import { useTranslation } from 'react-i18next';
import type { LanguageSwitcherProps } from './LanguageSwitcher.type';
import s from './LanguageSwitcher.module.css';

/**
 * Language switcher component for changing the current language
 *
 * @component
 * @example
 * ```tsx
 * <LanguageSwitcher />
 * ```
 *
 * @param {LanguageSwitcherProps} props - The component props
 * @returns {JSX.Element} A React component
 */
export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = async () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    await i18n.changeLanguage(newLang);
  };

  const targetLanguage = i18n.language === 'en' ? 'Russian' : 'English';

  return (
    <button
      className={`${s.languageSwitcher} ${className || ''}`}
      onClick={toggleLanguage}
      title={t('languageSwitcher.switchTo', { language: targetLanguage })}
    >
      {i18n.language === 'en' ? '🇷🇺' : '🇬🇧'}
    </button>
  );
};
