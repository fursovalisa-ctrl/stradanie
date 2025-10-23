/**
 * Константы для размеров TextInput
 */
export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type TextInputSize = (typeof SIZES)[keyof typeof SIZES];
