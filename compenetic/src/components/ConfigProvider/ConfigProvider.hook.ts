import { createContext, useContext } from 'react';
import type { ConfigContextType } from './ConfigProvider.type';
import enUS from '../../locale/en_US';

export const ConfigContext = createContext<ConfigContextType>({
  locale: enUS,
});

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

export const useLocale = () => {
  const { locale } = useConfig();
  return locale;
};
