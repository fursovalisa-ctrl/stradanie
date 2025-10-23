import { forwardRef, useState } from 'react';
import type { CheckboxProps, CheckboxIconProps } from './Checkbox.type';
import styles from './Checkbox.module.css';
import { CheckIcon } from './assets/CheckIcon';
import { LineIcon } from './assets/LineIcon';
import clsx from 'clsx';

const ICON_SIZES = {
  medium: { width: 10.83, height: 7.5 },
  large: { width: 13, height: 9 },
} as const;

/**
 * Иконка чекбокса (LineIcon или CheckIcon)
 * Отображает CheckIcon для обычного состояния или LineIcon для indeterminate
 */
const CheckboxIcon: React.FC<CheckboxIconProps & { dataTestId: string }> = ({
  size,
  isChecked,
  isDisabled,
  indeterminate,
  dataTestId,
}) => {
  const { width, height } = ICON_SIZES[size];

  return (
    <div
      className={styles.icon}
      data-testid={`${dataTestId}-icon`}
      data-checked={isChecked}
      data-disabled={isDisabled}
      data-indeterminate={indeterminate}
    >
      {indeterminate ? (
        <LineIcon width={width} height={height} />
      ) : (
        <CheckIcon width={width} height={height} />
      )}
    </div>
  );
};

/**
 * Checkbox компонент для user interactions
 *
 * @component
 * @example
 * ```tsx
 * <Checkbox
 *   name="agree"
 *   value={checked}
 *   onChange={setChecked}
 *   size="medium"
 * >
 *   Я согласен с условиями
 * </Checkbox>
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    name,
    value,
    size = 'medium',
    indeterminate = false,
    loading = false,
    error,
    disabled = false,
    containerClassName,
    className,
    containerStyle,
    style,
    children,
    clickableLabel = true,
    tabIndex,
    onChange,
    'data-testid': dataTestId = 'checkbox',
  } = props;

  const [internalValue, setInternalValue] = useState(false);
  const currentValue = value ?? internalValue;

  const isDisabled = disabled || loading;
  const isError = Boolean(error);
  const isChecked = currentValue || indeterminate;

  const containerClasses = clsx(styles.container, styles[size], containerClassName);
  const checkboxClasses = clsx(
    styles.checkbox,
    styles[size],
    {
      [styles.error]: isError,
    },
    className,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      setInternalValue(e.target.checked);
      onChange?.(e.target.checked, e);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isDisabled) {
      e.preventDefault();
      const newValue = !isChecked;
      setInternalValue(newValue);
      onChange?.(newValue);
    }
  };
  const handleLabelClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!clickableLabel) {
      e.preventDefault();
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => e.stopPropagation();

  return (
    <label
      className={containerClasses}
      htmlFor={name}
      style={containerStyle}
      data-testid={dataTestId}
      data-clickable-label={clickableLabel}
    >
      <div className={styles.checkboxWrapper}>
        <div
          tabIndex={tabIndex || 0}
          className={checkboxClasses}
          style={style}
          onKeyDown={handleKeyDown}
          aria-checked={isChecked}
          aria-disabled={isDisabled}
          aria-invalid={isError}
          aria-describedby={error ? `${name}-error` : undefined}
          data-testid={`${dataTestId}-label`}
        >
          <input
            ref={ref}
            type={'checkbox'}
            id={name}
            name={name}
            checked={isChecked}
            disabled={isDisabled}
            className={styles.input}
            onChange={handleChange}
            onClick={handleClick}
            aria-checked={isChecked}
            aria-invalid={isError}
            aria-describedby={error ? `${name}-error` : undefined}
            data-testid={`${dataTestId}-input`}
          />
          <CheckboxIcon
            name={name}
            size={size}
            isChecked={isChecked}
            isDisabled={isDisabled}
            indeterminate={indeterminate}
            dataTestId={dataTestId}
          />
        </div>
      </div>
      {children && (
        <span
          data-testid={`${dataTestId}-label-text`}
          data-clickable-label={clickableLabel}
          className={styles.label}
          onClick={handleLabelClick}
        >
          {children}
        </span>
      )}
    </label>
  );
});
