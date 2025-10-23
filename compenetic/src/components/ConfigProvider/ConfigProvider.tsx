import type { CSSProperties } from 'react';
import type { ConfigProviderProps } from './ConfigProvider.type.ts';
import { ConfigContext } from './ConfigProvider.hook';
import { clsx } from 'clsx';

import brandStyles from '../../styles/brand.module.css';
import tokensStyles from '../../styles/tokens.module.css';
import paletteStyles from '../../styles/palette.module.css';


/**
 * ConfigProvider позволяет централизованно переопределять CSS custom properties для всей библиотеки компонентов.
 * Также он поддерживает настройку локалей для компонентов
 *
 * @component
 * @example
 * import enUS from 'skillgrid/locale/en_US';
 *
 *
 * <ConfigProvider locale={enUS} theme={{ '--button-background-accent': '#FF0000' }}>
 *   <Button mode="primary" buttonStyle="accent">Primary</Button>
 * </ConfigProvider>
 */
export const ConfigProvider = ({
  locale = {},
  theme,
  children,
  className,
}: ConfigProviderProps) => {
  const style: CSSProperties = theme ? { ...Object.fromEntries(Object.entries(theme)) } : {};

  return (
    <div
      data-testid={'ConfigProvider-component'}
      style={style}
      className={clsx(
        brandStyles,
        tokensStyles,
        paletteStyles,
        className,
      )}

    >
      <ConfigContext.Provider value={{ locale }}>{children}</ConfigContext.Provider>
    </div>
  );
};
