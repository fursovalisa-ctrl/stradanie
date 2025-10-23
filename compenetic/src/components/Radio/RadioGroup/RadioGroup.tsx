import { forwardRef } from 'react';
import cn from 'classnames';

import s from './RadioGroup.module.css';
import { type RadioGroupProps } from './RadioGroup.type';
import { Radio } from '../Radio';

/**
 * RadioGroup компонент для группировки Radio
 *
 * @component
 * @example
 * ```tsx
 * <RadioGroup
 *   {...args}
 *     layout='horizontal'
 *    options={[
 *     { label: 'Test 1', value: 'Test 1' },
 *     { label: 'Test 2', value: 'Test 2', disabled: true },
 *     { label: 'Test 3', value: 4 },
 *   ]}
 *   value={value}
 *   onChange={setValue}
 * />
 * ```
 */

export const RadioGroup = forwardRef(
  <T,>(props: RadioGroupProps<T>, ref: React.Ref<HTMLInputElement>) => {
    const {
      name,
      value,
      options,
      layout = 'vertical',
      disabled = false,
      className,
      radioClassName,
      'data-testid': dataTestId,
      ...rest
    } = props;

    return (
      <div
        className={cn(s.group, s[layout], className)}
        data-testid={dataTestId ?? `radio-group-${name}`}
      >
        {options.map(({ label, value: optionValue, disabled: optionDisabled }) => {
          const radioName = `${name}-${optionValue}`;
          const isChecked = String(optionValue) === String(value);

          return (
            <Radio
              checked={isChecked}
              data-testid={radioName}
              disabled={disabled || optionDisabled}
              name={radioName}
              ref={ref}
              value={optionValue}
              label={label}
              className={radioClassName}
              {...rest}
            />
          );
        })}
      </div>
    );
  },
) as <T>(
  props: RadioGroupProps<T> & React.RefAttributes<HTMLInputElement>,
) => React.ReactElement | null;
