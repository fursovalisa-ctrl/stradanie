import { forwardRef } from 'react';
import { TextInputProps } from './TextInput.type';
import { InputBase } from '../InputBase/InputBase';
import { XIcon } from '../InputBase/assets/XIcon';
import { SIZES, getSizeStyles } from './lib';

/**
 * Компонент текстового поля ввода
 * Построен на основе InputBase с дополнительной логикой для текстового ввода
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      value = '',
      onChange,
      type = 'text',
      placeholder,
      maxLength,
      minLength,
      autoComplete,
      autoFocus,
      size = SIZES.MEDIUM,
      inputProps,
      error,
      disabled,
      loading,
      helper,
      prefix,
      suffix,
      clearable = false,
      id,
      showLabel = true,
      onFocus,
      onBlur,
      className,
      truncate = true,
      hint,
      showHint = false,
      showHintOnEmpty = false,
      wrapperProps,
      labelProps,
      helperProps,
      ...rest
    },
    _ref,
  ) => {
    const hasValue = (value || '').length > 0;
    const isLargeSize = size === SIZES.LARGE;
    const hasPrefix = !!prefix;

    // Условия для классов input
    const shouldShowFloatingLabel = isLargeSize && showLabel && !prefix;

    // Логика для кнопки очистки
    const shouldShowClearButton = clearable && hasValue && !(disabled || loading);

    const handleClear = () => {
      onChange?.('');
    };

    const finalSuffix = shouldShowClearButton ? (
      <XIcon
        size={size === SIZES.SMALL ? 'xs' : 'sm'}
        color='var(--icon-secondary)'
        onClick={handleClear}
        style={{ cursor: 'pointer' }}
        data-testid='x-icon'
      />
    ) : (
      suffix
    );

    // Подготавливаем пропсы для встроенного input
    const enhancedInputProps = {
      type,
      minLength,
      autoComplete,
      autoFocus,
      ...inputProps,
    };

    const sizeStyles = getSizeStyles(size, shouldShowFloatingLabel, hasValue, hasPrefix);

    return (
      <InputBase
        size={size}
        error={error}
        disabled={disabled || loading}
        loading={loading}
        helper={helper}
        prefix={prefix}
        suffix={finalSuffix}
        id={id}
        showLabel={shouldShowFloatingLabel}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value || ''}
        placeholder={placeholder}
        className={className}
        wrapperStyles={sizeStyles.wrapperStyles}
        floatingLabelStyles={sizeStyles.floatingLabelStyles}
        prefixStyles={sizeStyles.prefixStyles}
        suffixStyles={sizeStyles.suffixStyles}
        wrapperProps={wrapperProps}
        labelProps={labelProps}
        helperProps={helperProps}
        showLimit={false}
        maxLength={maxLength}
        inputProps={enhancedInputProps}
        hint={hint}
        showHint={showHint}
        showHintOnEmpty={showHintOnEmpty}
        truncate={truncate}
        {...rest}
      />
    );
  },
);
