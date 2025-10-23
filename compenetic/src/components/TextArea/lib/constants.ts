/**
 * Константы для размеров TextArea
 */
export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const;

/**
 * Константы для позиций
 */
export const POSITIONS = {
  SMALL: '12px',
  MEDIUM: '16px',
} as const;

/**
 * Константы для размеров иконок
 */
export const ICON_SIZES = {
  SMALL: 'xs',
  MEDIUM: 'sm',
} as const;

/**
 * Константы для resize режимов
 */
export const RESIZE_MODES = {
  NONE: 'none',
  HUG: 'hug',
  FILL: 'fill',
  FIXED: 'fixed',
} as const;

/**
 * Константы для высот wrapper
 */
export const WRAPPER_HEIGHTS = {
  SMALL: '112px',
  MEDIUM: '56px',
} as const;

/**
 * Константы для высот textarea
 */
export const TEXTAREA_HEIGHTS = {
  SMALL: '48px',
  MEDIUM: '22px',
} as const;

/**
 * Константы для padding
 */
export const PADDING = {
  SMALL: '12px 12px 12px 12px',
  MEDIUM: '16px 16px 16px 16px',
  MEDIUM_WITH_PREFIX: '12px 16px 12px 16px',
  MEDIUM_FLOATING_LABEL: '8px 16px 8px 16px',
} as const;

/**
 * Константы для minHeight значений
 */
export const MIN_HEIGHTS = {
  SMALL: 48,
  MEDIUM: 56,
  LARGE: 112,
} as const;

export type TextAreaSize = (typeof SIZES)[keyof typeof SIZES];
export type TextAreaPosition = (typeof POSITIONS)[keyof typeof POSITIONS];
export type TextAreaIconSize = (typeof ICON_SIZES)[keyof typeof ICON_SIZES];
export type TextAreaResizeMode = (typeof RESIZE_MODES)[keyof typeof RESIZE_MODES];
