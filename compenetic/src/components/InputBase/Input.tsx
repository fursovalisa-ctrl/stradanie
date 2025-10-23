import { forwardRef, useId, useImperativeHandle } from 'react';
import clsx from 'clsx';
import type { InputProps, InputWrapperProps } from './Input.type';
import styles from './InputBase.module.css';
import { GripIcon } from './assets/GripIcon';
import { useInputSync, useTextareaResize, useGripResize, MAX_HINT_LENGTH } from './lib';

/**
 * Компонент для рендера input/textarea элементов
 */
const InputComponent = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      component = 'input',
      size = 'medium',
      value = '',
      placeholder,
      disabled = false,
      loading = false,
      onFocus,
      onBlur,
      onChange,
      onKeyUp,
      maxLength,
      className,
      style,
      truncate = false,
      shouldShowFloatingLabelClass = false,
      'aria-invalid': ariaInvalid,
      'aria-errormessage': ariaErrorMessage,
      id,
      resize,
      ...props
    },
    ref,
  ) => {
    const { textareaRef, inputRef, currentRef } = useInputSync(value, component);
    useTextareaResize(value, resize, textareaRef);

    useImperativeHandle(ref, () => {
      return currentRef.current!;
    }, [currentRef]);

    if (component === 'textarea') {
      return (
        <textarea
          ref={textareaRef}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={disabled || loading}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyUp={onKeyUp}
          maxLength={maxLength}
          className={clsx(
            styles.textarea,
            styles[`size-${size}`],
            shouldShowFloatingLabelClass && styles['with-floating-label'],
            className,
          )}
          style={style}
          aria-invalid={ariaInvalid}
          aria-errormessage={ariaErrorMessage}
          aria-describedby={ariaErrorMessage ? `${id}-error` : undefined}
          tabIndex={0}
          data-resize={resize}
          {...props}
        />
      );
    }

    if (component === 'input') {
      return (
        <input
          ref={inputRef}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={disabled || loading}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyUp={onKeyUp}
          maxLength={maxLength}
          className={clsx(
            styles.input,
            styles[`size-${size}`],
            shouldShowFloatingLabelClass && styles['with-floating-label'],
            truncate && styles.truncate,
            className,
          )}
          style={style}
          aria-invalid={ariaInvalid}
          aria-errormessage={ariaErrorMessage}
          aria-describedby={ariaErrorMessage ? `${id}-error` : undefined}
          tabIndex={0}
          {...props}
        />
      );
    }

    // Проверка допустимых значений component
    if (component !== 'input' && component !== 'textarea') {
      console.error(
        `[Input] Недопустимое значение prop 'component': "${component}". Допустимые значения: 'input', 'textarea'`,
      );
      return null;
    }
  },
);

/**
 * Обертка для Input с логикой меток, секций, состояний
 */
const InputWrapperComponent = forwardRef<HTMLDivElement, InputWrapperProps>(
  (
    {
      children,
      size = 'medium',
      error = false,
      disabled = false,
      loading = false,
      className,
      wrapperProps,
      wrapperStyles,
      floatingLabelStyles,
      prefixStyles,
      suffixStyles,
      labelProps,
      helperProps,
      showLimit = false,
      maxLength,
      hint,
      showHint = false,
      showHintOnEmpty = false,
      prefix,
      suffix,
      placeholder,
      showLabel = true,
      labelClassName,
      hasValue = false,
      helper,
      id,
      value = '',
      resize,
      showGrip = false,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    // Логика для hint
    const shouldShowHint = showHint && hint && (hasValue || showHintOnEmpty);
    const finalHint =
      hint && hint.length > MAX_HINT_LENGTH ? hint.substring(0, MAX_HINT_LENGTH) + '...' : hint;

    const wrapperClasses = clsx(
      styles.wrapper,
      error && styles.error,
      disabled && styles.disabled,
      loading && styles.loading,
      shouldShowHint && styles['has-hint'],
      className,
    );

    const floatingLabelClassNames = clsx(
      styles.floatingLabel,
      styles[size],
      hasValue && styles.filled,
      labelClassName,
    );

    const { handleGripMouseDown } = useGripResize(showGrip, disabled, loading, resize);

    return (
      <div ref={ref} className={styles.inputBase} data-testid='input-base-wrapper' {...rest}>
        {/* Основная обертка */}
        <div
          className={wrapperClasses}
          style={wrapperStyles}
          data-resize={resize}
          data-show-grip={showGrip ? 'true' : 'false'}
          {...wrapperProps}
        >
          {/* TODO: ждет появления компонента Icon и его пропсы */}
          {/* Левая секция (префикс) */}
          {prefix && (
            <label htmlFor={inputId} className={styles.leftSection} style={prefixStyles}>
              {prefix}
            </label>
          )}

          {/* TODO: ждет появления компонента Icon и его пропсы */}
          {/* Правая секция (суффикс) */}
          {suffix && (
            <label htmlFor={inputId} className={styles.rightSection} style={suffixStyles}>
              {suffix}
            </label>
          )}

          {/* Плавающая метка (если есть метка и showLabel = true) */}
          {placeholder && showLabel && (
            <label
              htmlFor={inputId}
              className={floatingLabelClassNames}
              style={floatingLabelStyles}
              {...labelProps}
            >
              {placeholder}
            </label>
          )}

          {/* Дочерние элементы (Input компонент) */}
          {children}

          {/* Кастомный grip для изменения размера */}
          {showGrip && !showLimit && (resize === 'fixed' || !resize) && (
            <div
              className={styles.gripHandle}
              onMouseDown={handleGripMouseDown}
              role='button'
              tabIndex={-1}
              aria-label='Изменить размер'
            >
              <GripIcon />
            </div>
          )}

          {/* Подсказка (hint) */}
          {shouldShowHint && (
            <div
              className={clsx(styles.hint, hasValue && styles.truncate)}
              data-disabled={disabled || loading}
            >
              {finalHint}
            </div>
          )}

          {/* Счетчик символов */}
          {showLimit && maxLength && (
            <div className={styles.characterLimit}>
              {(value || '').length} из {maxLength}
            </div>
          )}
        </div>

        {/* Вспомогательный текст */}
        {/* TODO: вставить компонент Helper */}
        {helper && (
          <div
            className={clsx(
              styles.helper,
              error && styles.error,
              (disabled || loading) && styles.disabled,
            )}
            {...helperProps}
            id={error ? `${inputId}-error` : undefined}
          >
            {helper}
          </div>
        )}
      </div>
    );
  },
);

InputWrapperComponent.displayName = 'InputWrapperComponent';

/**
 * Compound компонент Input
 * ! ВНИМАНИЕ: Это внутренний компонент, используемый только в InputBase.
 * Не предназначен для прямого использования в приложениях.
 */
export const Input = Object.assign(InputComponent, {
  Wrapper: InputWrapperComponent,
});
