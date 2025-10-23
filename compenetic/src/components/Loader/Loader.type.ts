import type { HTMLAttributes } from 'react';

export interface BaseLoaderProps {
  /**
   * Размер лоадера в пикселях
   * @default 24
   */
  size?: 16 | 24 | 48 | 64 | 96;

  /**
   * Вариант цвета лоадера
   * @default 'accent'
   */
  variant?: 'accent' | 'neutral' | 'positive' | 'negative' | 'contrast' | 'gray' | 'special';

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * ID для тестирования
   */
  'data-testid'?: string;

  /**
   * Инлайн стили
   */
  style?: React.CSSProperties;
}

export interface LoaderSpinnerProps extends BaseLoaderProps, HTMLAttributes<SVGSVGElement> {}

export interface LoaderContainerProps extends BaseLoaderProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Показывать ли лоадер
   * @default false
   */
  loading?: boolean;

  /**
   * Дочерние элементы
   */
  children?: React.ReactNode;
}

export type LoaderProps = LoaderSpinnerProps | LoaderContainerProps;
