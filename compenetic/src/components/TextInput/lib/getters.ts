import { SIZES, TextInputSize } from './constants';

/**
 * Интерфейс для стилей размеров
 */
export interface SizeStyles {
  wrapperStyles: React.CSSProperties;
  floatingLabelStyles: React.CSSProperties;
  prefixStyles: React.CSSProperties;
  suffixStyles: React.CSSProperties;
}

/**
 * Получает отступы в зависимости от размера и состояния
 */
export const getPadding = (
  size: TextInputSize,
  showFloatingLabel: boolean,
  hasValue: boolean,
  hasPrefix: boolean,
): string => {
  switch (size) {
    case SIZES.LARGE:
      return showFloatingLabel && hasValue ? '8px 16px 8px 16px' : '16px 16px 16px 16px';
    case SIZES.MEDIUM:
      return hasPrefix ? '12px 12px 12px 12px' : '12px 12px 12px 16px';
    case SIZES.SMALL:
      return '10px 12px 10px 12px';
    default:
      return '12px 16px 12px 16px';
  }
};

/**
 * Получает высоту в зависимости от размера
 */
export const getHeight = (size: TextInputSize): string => {
  switch (size) {
    case SIZES.LARGE:
      return '56px';
    case SIZES.MEDIUM:
      return '48px';
    case SIZES.SMALL:
      return '40px';
    default:
      return '48px';
  }
};

/**
 * Получает отступы префикса и суффикса
 */
export const getPrefixSuffixSpacing = (size: TextInputSize): number => {
  switch (size) {
    case SIZES.SMALL:
      return 8; // 8px для small
    case SIZES.MEDIUM:
    case SIZES.LARGE:
      return 12; // 12px для medium и large
    default:
      return 12;
  }
};

/**
 * Получает стили для большого размера
 */
export const getLargeSizeStyles = (
  height: string,
  padding: string,
  spacing: number,
): SizeStyles => ({
  wrapperStyles: {
    height,
    minHeight: height,
    maxHeight: height,
    boxSizing: 'border-box' as const,
    padding,
  },
  floatingLabelStyles: {
    left: '16px',
    transformOrigin: 'left top',
  },
  prefixStyles: {
    paddingRight: `${spacing}px`,
  },
  suffixStyles: {
    right: `${spacing}px`,
  },
});

/**
 * Получает стили для среднего размера
 */
export const getMediumSizeStyles = (
  height: string,
  padding: string,
  spacing: number,
): SizeStyles => ({
  wrapperStyles: {
    minHeight: height,
    maxHeight: height,
    boxSizing: 'border-box' as const,
    padding,
  },
  floatingLabelStyles: {
    left: '16px',
  },
  prefixStyles: {
    paddingRight: `${spacing}px`,
  },
  suffixStyles: {
    right: `${spacing}px`,
  },
});

/**
 * Получает стили для малого размера
 */
export const getSmallSizeStyles = (
  height: string,
  padding: string,
  spacing: number,
): SizeStyles => ({
  wrapperStyles: {
    minHeight: height,
    maxHeight: height,
    boxSizing: 'border-box' as const,
    padding,
  },
  floatingLabelStyles: {
    left: '12px',
  },
  prefixStyles: {
    paddingRight: `${spacing}px`,
  },
  suffixStyles: {
    right: `${spacing}px`,
  },
});

/**
 * Основная функция для получения стилей размеров
 */
export const getSizeStyles = (
  size: TextInputSize,
  showFloatingLabel: boolean,
  hasValue: boolean,
  hasPrefix: boolean,
): SizeStyles => {
  const height = getHeight(size);
  const padding = getPadding(size, showFloatingLabel, hasValue, hasPrefix);
  const spacing = getPrefixSuffixSpacing(size);

  switch (size) {
    case SIZES.LARGE:
      return getLargeSizeStyles(height, padding, spacing);
    case SIZES.MEDIUM:
      return getMediumSizeStyles(height, padding, spacing);
    case SIZES.SMALL:
      return getSmallSizeStyles(height, padding, spacing);
    default:
      return {
        wrapperStyles: {},
        floatingLabelStyles: {},
        prefixStyles: {},
        suffixStyles: {},
      };
  }
};
