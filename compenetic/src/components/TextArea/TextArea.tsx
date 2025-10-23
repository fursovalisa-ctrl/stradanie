import { forwardRef } from 'react';
import { TextAreaProps } from './TextArea.type';
import { InputBase } from '../InputBase/InputBase';
import { XIcon } from '../InputBase/assets/XIcon';
import { SIZES, getSizeStyles, getInputBaseSize, getIconSize } from './lib';

/**
 * Компонент многострочного текстового поля
 * Восстановленная версия с полной логикой стилей
 */
export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  (
    {
      value = '',
      onChange,
      placeholder,
      maxLength,
      minLength,
      autoFocus,
      size = SIZES.MEDIUM,
      textareaProps,
      error,
      disabled,
      loading,
      helper,
      suffix,
      clearable = false,
      id,
      showLabel = true,
      onFocus,
      onBlur,
      className,
      rows = 1,
      showLimit = false,
      wrapperProps,
      labelProps,
      helperProps,
      showGrip,
      minHeight,
      resize,
      ...rest
    },
    ref,
  ) => {
    const hasValue = (value || '').length > 0;

    // Условия для плавающего лейбла - только при наличии значения
    const shouldShowFloatingLabel =
      showLabel && !!placeholder && (size === SIZES.SMALL || minHeight !== 48);

    // Логика для кнопки очистки
    const shouldShowClearButton = clearable && hasValue && !(disabled || loading);

    const handleClear = () => {
      onChange?.('');
    };

    const finalSuffix = shouldShowClearButton ? (
      <XIcon
        size={getIconSize(size)}
        color='var(--icon-secondary)'
        onClick={handleClear}
        style={{ cursor: 'pointer' }}
        data-testid='x-icon'
      />
    ) : (
      suffix
    );

    const sizeStyles = getSizeStyles(size, minHeight, shouldShowFloatingLabel && hasValue, resize);

    const inputBaseSize = getInputBaseSize(size, minHeight);

    const enhancedTextareaProps = {
      rows,
      minLength,
      autoFocus,
      resize,
      ...textareaProps,
    };

    return (
      <InputBase
        ref={ref}
        component='textarea'
        size={inputBaseSize}
        error={error}
        disabled={disabled || loading}
        loading={loading}
        helper={helper}
        suffix={finalSuffix}
        id={id}
        showLabel={shouldShowFloatingLabel}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value || ''}
        placeholder={placeholder}
        className={className}
        data-floating-label={shouldShowFloatingLabel}
        wrapperStyles={sizeStyles.wrapperStyles}
        floatingLabelStyles={sizeStyles.floatingLabelStyles}
        suffixStyles={sizeStyles.suffixStyles}
        textareaStyles={sizeStyles.textareaStyles}
        wrapperProps={wrapperProps}
        labelProps={labelProps}
        helperProps={helperProps}
        showLimit={showLimit && (minHeight === 112 || size === SIZES.SMALL)}
        maxLength={maxLength}
        inputProps={enhancedTextareaProps}
        resize={resize}
        showGrip={showGrip}
        {...rest}
      />
    );
  },
);
