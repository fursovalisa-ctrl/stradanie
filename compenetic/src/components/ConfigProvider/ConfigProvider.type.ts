import type { ReactNode } from 'react';
import type { Locale } from '../../locale/type';

export interface ConfigProviderProps {
  /**
   * The locale object containing translations for components
   */
  locale?: Locale;
  /**
   * Объект с CSS custom properties для темы
   * Например: { '--button-background-accent': '#FF0000' }
   */
  theme?: Record<string, string>;

  /**
   */
  children: ReactNode;
  /**
   * Дополнительный className для wrapper
   */
  className?: string;
}

export interface ConfigContextType {
  locale: Locale;
}
