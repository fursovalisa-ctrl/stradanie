import {
  SIZES,
  POSITIONS,
  ICON_SIZES,
  RESIZE_MODES,
  WRAPPER_HEIGHTS,
  TEXTAREA_HEIGHTS,
  PADDING,
  MIN_HEIGHTS,
  TextAreaSize,
  TextAreaResizeMode,
} from './constants';

/**
 * Интерфейс для стилей размеров TextArea
 */
export interface TextAreaSizeStyles {
  wrapperStyles: React.CSSProperties;
  floatingLabelStyles: React.CSSProperties;
  suffixStyles: React.CSSProperties;
  textareaStyles: React.CSSProperties;
}

/**
 * Получает высоту wrapper в зависимости от размера и minHeight
 */
export const getWrapperHeight = (size: TextAreaSize, minHeight?: number): string => {
  // Для small размера всегда 112px, игнорируем minHeight
  if (size === SIZES.SMALL) {
    return WRAPPER_HEIGHTS.SMALL;
  }

  // Для других размеров - если указан minHeight, используем его
  if (minHeight) {
    return `${minHeight}px`;
  }

  // По умолчанию для размеров
  switch (size) {
    case SIZES.MEDIUM:
      return WRAPPER_HEIGHTS.MEDIUM;
    default:
      return WRAPPER_HEIGHTS.MEDIUM;
  }
};

/**
 * Получает высоту textarea в зависимости от размера и minHeight
 */
export const getTextareaHeight = (size: TextAreaSize, minHeight?: number): string => {
  // Для small размера всегда 48px, игнорируем minHeight
  if (size === SIZES.SMALL) {
    return TEXTAREA_HEIGHTS.SMALL;
  }

  // Для других размеров - если указан minHeight, рассчитываем высоту textarea
  if (minHeight) {
    switch (minHeight) {
      case MIN_HEIGHTS.SMALL:
      case MIN_HEIGHTS.MEDIUM:
        return TEXTAREA_HEIGHTS.MEDIUM;
      case MIN_HEIGHTS.LARGE:
        return TEXTAREA_HEIGHTS.SMALL;
      default:
        return TEXTAREA_HEIGHTS.MEDIUM;
    }
  }

  // По умолчанию для размеров
  switch (size) {
    case SIZES.MEDIUM:
      return TEXTAREA_HEIGHTS.MEDIUM;
    default:
      return TEXTAREA_HEIGHTS.MEDIUM;
  }
};

/**
 * Получает padding в зависимости от размера, minHeight и состояния плавающего лейбла
 */
export const getPadding = (
  size: TextAreaSize,
  minHeight?: number,
  shouldShowFloatingLabel?: boolean,
): string => {
  // Для small размера всегда 12px, игнорируем minHeight
  if (size === SIZES.SMALL) {
    return PADDING.SMALL;
  }

  // Для других размеров - если указан minHeight, рассчитываем padding
  if (minHeight) {
    switch (minHeight) {
      case MIN_HEIGHTS.SMALL:
        return PADDING.MEDIUM_WITH_PREFIX;
      case MIN_HEIGHTS.MEDIUM:
        return shouldShowFloatingLabel ? PADDING.MEDIUM_FLOATING_LABEL : PADDING.MEDIUM;
      case MIN_HEIGHTS.LARGE:
        return PADDING.MEDIUM;
      default:
        return PADDING.MEDIUM;
    }
  }

  // По умолчанию для размеров
  switch (size) {
    case SIZES.MEDIUM:
      return shouldShowFloatingLabel ? PADDING.MEDIUM_FLOATING_LABEL : PADDING.MEDIUM;
    default:
      return PADDING.MEDIUM;
  }
};

/**
 * Получает размер для InputBase в зависимости от размера TextArea и minHeight
 */
export const getInputBaseSize = (size: TextAreaSize, minHeight?: number): 'small' | 'medium' => {
  // Для small размера всегда small
  if (size === SIZES.SMALL) {
    return 'small';
  }

  // Для других размеров - если указан minHeight, определяем размер по нему
  if (minHeight) {
    switch (minHeight) {
      case MIN_HEIGHTS.SMALL:
        return 'small';
      case MIN_HEIGHTS.MEDIUM:
        return 'medium';
      case MIN_HEIGHTS.LARGE:
        return 'medium';
      default:
        return 'medium';
    }
  }

  // По умолчанию используем размер компонента
  return size;
};

/**
 * Получает размер иконки в зависимости от размера TextArea
 */
export const getIconSize = (size: TextAreaSize): 'xs' | 'sm' => {
  return ICON_SIZES[size.toUpperCase() as keyof typeof ICON_SIZES];
};

/**
 * Получает позицию суффикса в зависимости от размера
 */
export const getSuffixPosition = (size: TextAreaSize): string => {
  return POSITIONS[size.toUpperCase() as keyof typeof POSITIONS];
};

/**
 * Основная функция для получения стилей размеров TextArea
 */
export const getSizeStyles = (
  size: TextAreaSize,
  minHeight?: number,
  shouldShowFloatingLabel?: boolean,
  resize?: TextAreaResizeMode,
): TextAreaSizeStyles => {
  const wrapperHeight = getWrapperHeight(size, minHeight);
  const textareaHeight = getTextareaHeight(size, minHeight);
  const padding = getPadding(size, minHeight, shouldShowFloatingLabel);

  return {
    wrapperStyles: {
      minHeight: wrapperHeight,
      // Для fill resize устанавливаем height: 100%
      ...(resize === RESIZE_MODES.FILL && { height: '100%' }),
      // Для fixed resize устанавливаем фиксированную высоту
      ...(resize === RESIZE_MODES.FIXED && minHeight && { height: wrapperHeight }),
      boxSizing: 'border-box' as const,
      padding,
    },
    floatingLabelStyles: {
      left: size === SIZES.SMALL ? POSITIONS.SMALL : POSITIONS.MEDIUM,
      transformOrigin: 'left top',
      top:
        minHeight === 112 && shouldShowFloatingLabel && size === SIZES.MEDIUM
          ? POSITIONS.MEDIUM
          : undefined,
    },
    suffixStyles: {
      right: getSuffixPosition(size),
    },
    textareaStyles: {
      minHeight: textareaHeight,
      // Для fill resize flex: 1
      ...(resize === RESIZE_MODES.FILL && { flex: 1, minHeight: 0 }),
      // Для fixed resize фиксированная высота
      ...(resize === RESIZE_MODES.FIXED && minHeight && { height: textareaHeight }),
    },
  };
};
