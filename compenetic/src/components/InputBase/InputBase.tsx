import { forwardRef, useId, useState, useCallback, useEffect } from 'react';
import { InputBaseProps } from './InputBase.type';
import { Input } from './Input';
import styles from './InputBase.module.css';
import { clsx } from 'clsx';

/**
 * Универсальная обертка для полей ввода
 * Предоставляет общую логику: метки, описания, ошибки, секции, состояния
 */
export const InputBase = forwardRef<HTMLDivElement, InputBaseProps>(
  (
    {
      component = 'input',
      size = 'medium',
      className,
      error = false,
      disabled = false,
      loading = false,
      placeholder,
      showLabel = true,
      labelClassName,
      helper,
      prefix,
      suffix,
      id,
      onFocus,
      onBlur,
      onChange,
      value = '',
      wrapperProps,
      wrapperStyles,
      floatingLabelStyles,
      prefixStyles,
      suffixStyles,
      textareaStyles,
      labelProps,
      helperProps,
      showLimit = false,
      maxLength,
      inputProps,
      hint,
      showHint = false,
      showHintOnEmpty = false,
      truncate = false,
      resize,
      showGrip = false,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const [internalValue, setInternalValue] = useState(value);

    const currentValue = value !== undefined ? value : internalValue;
    const hasValue = (currentValue || '').length > 0;

    // Определяем нужно ли применять класс with-floating-label
    const shouldShowFloatingLabel =
      showLabel && (size === 'large' || component === 'textarea') && !prefix;
    const shouldShowFloatingLabelClass = shouldShowFloatingLabel;

    // Обработчики событий для input
    const handleInputFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Не обрабатываем события если компонент отключен
        if (disabled || loading) return;
        onFocus?.();
        inputProps?.onFocus?.(
          e as React.FocusEvent<HTMLInputElement> & React.FocusEvent<HTMLTextAreaElement>,
        );
      },
      [onFocus, inputProps, disabled, loading],
    );

    /**
     * Обработчик нажатия кнопки таб (для подсветки фокуса с клавиатуры)
     */
    const handleKeyUp = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Tab') {
          const wrapper = (e.target as HTMLElement).closest(`.${styles.wrapper}`);
          if (wrapper) {
            wrapper.classList.add(styles.tabFocused);
          }
        }

        inputProps?.onKeyUp?.(
          e as React.KeyboardEvent<HTMLInputElement> & React.KeyboardEvent<HTMLTextAreaElement>,
        );
      },
      [inputProps],
    );

    /**
     * Обработчик потери фокуса с инпута
     */
    const handleInputBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const wrapper = (e.target as HTMLElement).closest(`.${styles.wrapper}`);
        if (wrapper) {
          wrapper.classList.remove(styles.tabFocused);
        }
        onBlur?.();
        inputProps?.onBlur?.(
          e as React.FocusEvent<HTMLInputElement> & React.FocusEvent<HTMLTextAreaElement>,
        );
      },
      [onBlur, inputProps],
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Не обрабатываем события если компонент отключен
        if (disabled || loading) return;

        const newValue = e.target.value;
        setInternalValue(newValue);
        onChange?.(newValue);
        inputProps?.onChange?.(
          e as React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>,
        );
      },
      [onChange, inputProps, disabled, loading],
    );

    useEffect(() => {
      setInternalValue(value);
    }, [value]);

    return (
      <Input.Wrapper
        ref={ref}
        size={size}
        error={error}
        disabled={disabled || loading}
        loading={loading}
        className={clsx(className, component === 'textarea' && styles['textarea-wrapper'])}
        wrapperProps={wrapperProps}
        wrapperStyles={wrapperStyles}
        floatingLabelStyles={floatingLabelStyles}
        prefixStyles={prefixStyles}
        suffixStyles={suffixStyles}
        labelProps={labelProps}
        helperProps={helperProps}
        showLimit={showLimit}
        maxLength={maxLength}
        hint={hint}
        showHint={showHint}
        showHintOnEmpty={showHintOnEmpty}
        prefix={prefix}
        suffix={suffix}
        placeholder={placeholder}
        showLabel={showLabel}
        labelClassName={labelClassName}
        hasValue={hasValue}
        helper={helper}
        id={inputId}
        value={currentValue}
        showGrip={showGrip}
        resize={resize}
        {...rest}
      >
        <Input
          component={component}
          size={size}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          loading={loading}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          maxLength={maxLength}
          truncate={truncate}
          data-empty={!hasValue}
          shouldShowFloatingLabelClass={shouldShowFloatingLabelClass}
          style={component === 'textarea' ? textareaStyles : undefined}
          aria-invalid={!!error}
          aria-errormessage={error ? `${inputId}-error` : undefined}
          id={inputId}
          resize={resize}
          {...(inputProps as Record<string, unknown>)}
        />
      </Input.Wrapper>
    );
  },
);
