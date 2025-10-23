import type { ComponentProps, ReactNode } from 'react';

export interface TagProps extends ComponentProps<'div'> {
  className?: string;
  /** Слот для строки с текстом */
  children?: ReactNode;
  /** Размер компонента
   * @default "medium"
   */
  size?: 'medium' | 'large';
  /** Цвет компонента
   * @default "neutral"
   */
  componentStyle?:
    | 'neutral'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'vivid'
    | 'special'
    | 'accent'
    | 'blue'
    | 'lovely'
    | 'dreamy';
  /** Задизейблен ли компонент
   * @default false
   */
  disabled?: boolean;
  /** Отображается ли текст
   * @default true - если есть текст
   */
  showLabel?: boolean;
  /** Иконка перед текстом */
  slotStart?: ReactNode;
  /** Иконка после текстом */
  slotEnd?: ReactNode;
  /** Пропсы для контейнера иконки перед текстом */
  slotStartWrapperProps?: ComponentProps<'span'> & {
    'data-testid'?: string;
  };
  /** Пропсы для контейнера иконки после текста */
  slotEndWrapperProps?: ComponentProps<'span'> & {
    'data-testid'?: string;
  };
  /** Id для тестирования */
  'data-testid'?: string;
}
