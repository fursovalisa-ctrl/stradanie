import { forwardRef } from 'react';
import cn from 'classnames';

import { TValue, type RadioProps } from './Radio.type';
import s from './Radio.module.css';

export const RADIO_CONTAINER_TEST_PREFIX = 'radio-container-';
export const RADIO_LABEL_TEST_PREFIX = 'radio-label';

/**
 * Radio компонент для user interactions
 *
 * @component
 * @example
 * ```tsx
 * <Radio
 *   name="radio-name"
 *   checked={checked}
 *   value={"radio-value"}
 *   onChange={setValue}
 *   size="medium"
 * >
 *   Элемент radio
 * </Radio>
 * ```
 */
export const Radio = forwardRef(<T,>(props: RadioProps<T>, ref: React.Ref<HTMLInputElement>) => {
  const {
    name,
    value,
    size = 'medium',
    loading = false,
    error,
    disabled = false,
    checked = false,
    containerClassName,
    className,
    label,
    clickable = 'all',
    mode = 'default',
    tabIndex,
    onChange,
    'data-testid': dataTestId,
    ...rest
  } = props;

  const isError = Boolean(error);
  const isDisabled = disabled || loading;
  const isClickableLabel = clickable === 'all';
  const isCardMode = mode === 'card';
  const classNameCardSize = s[`${size}Card`];

  const handleChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) onChange?.(value, e);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isDisabled) {
      e.preventDefault();
      onChange?.(value);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation();

  const renderRadioElement = () => (
    <div
      className={cn(
        s.radio,
        s[size],
        {
          [s.checked]: checked,
          [s.disabled]: isDisabled,
          [s.error]: isError && !isDisabled,
        },
        className,
      )}
      tabIndex={tabIndex || 1}
      data-testid={`${RADIO_CONTAINER_TEST_PREFIX}${name}`}
    >
      <input
        aria-errormessage={error}
        aria-invalid={isError}
        checked={checked}
        className={s.input}
        data-testid={`radio-${name}`}
        disabled={isDisabled}
        id={name}
        name={name}
        ref={ref}
        type={'radio'}
        value={value as TValue}
        onChange={handleChange}
        onClick={handleClick}
      />
      <svg data-testid={`radio-icon-${name}`} viewBox={'0 0 8 8'} className={s.icon}>
        <circle cx={4} cy={4} fill={'current'} r={4} />
      </svg>
    </div>
  );

  const renderControl = () => (
    <label
      aria-checked={checked}
      aria-disabled={isDisabled}
      data-testid={isClickableLabel ? dataTestId : RADIO_LABEL_TEST_PREFIX}
      htmlFor={name}
      className={cn(s.label, {
        [cn(s.container, s[mode], containerClassName)]: isClickableLabel,
        [classNameCardSize]: isClickableLabel && isCardMode,
      })}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {renderRadioElement()}

      {isClickableLabel && label}
    </label>
  );

  if (isClickableLabel) return renderControl();

  return (
    <div
      className={cn(s.container, s[mode], containerClassName, {
        [classNameCardSize]: isCardMode,
      })}
      data-testid={dataTestId}
    >
      {renderControl()}

      {label}
    </div>
  );
}) as <T>(
  props: RadioProps<T> & React.RefAttributes<HTMLInputElement>,
) => React.ReactElement | null;
