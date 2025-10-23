import { useState } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from './RadioGroup.type';

const options = [
  {
    value: 'variant_1',
    label: 'Вариант 1',
  },
  {
    value: 'variant_2',
    label: 'Вариант 2',
  },
  {
    value: 'variant_3',
    label: 'Вариант 3',
  },
];

const nameDefault = 'radio_group';

const Component: React.FC<Partial<RadioGroupProps<string>>> = (props) => {
  const { name, value: _, ...rest } = props;

  const [value, setValue] = useState('');

  return (
    <RadioGroup
      name={name ?? nameDefault}
      value={value}
      options={options}
      layout={'vertical'}
      size={'large'}
      mode={'default'}
      onChange={setValue}
      {...rest}
    />
  );
};

describe('RadioGroup', () => {
  const name = 'radio_group_test';
  const baseProps = { name, ['data-testid']: name, value: 'radio' };

  it('should render without errors', () => {
    render(<Component {...baseProps} />);

    const element = screen.getByTestId(name);
    expect(element).toBeInTheDocument();
  });

  describe('Content rendering', () => {
    it('should render with options', () => {
      render(<Component {...baseProps} />);

      const element = screen.getByTestId(name);

      expect(element).toContain(screen.getByTestId(`${name}-${options[0].value}`));
      expect(element).toContain(screen.getByTestId(`${name}-${options[1].value}`));
      expect(element).toContain(screen.getByTestId(`${name}-${options[2].value}`));

      expect(screen.getByText(options[0].label)).toBeInTheDocument();
      expect(screen.getByText(options[1].label)).toBeInTheDocument();
      expect(screen.getByText(options[2].label)).toBeInTheDocument();
    });
  });

  describe('Layout', () => {
    it('should render with layout classes', () => {
      const layouts = ['horizontal', 'vertical'] as const;

      const { rerender } = render(<Component {...baseProps} />);

      layouts.forEach((layout) => {
        rerender(<Component {...baseProps} layout={layout} />);

        expect(screen.getByTestId(name).className).toContain(layout);
      });
    });
  });

  describe('States', () => {
    it('should render with disabeled options', () => {
      render(<Component disabled {...baseProps} />);

      expect(screen.getByTestId(`radio-${name}-${options[0].value}`)).toBeDisabled();
      expect(screen.getByTestId(`radio-${name}-${options[1].value}`)).toBeDisabled();
      expect(screen.getByTestId(`radio-${name}-${options[2].value}`)).toBeDisabled();
    });

    it('should render with error', () => {
      render(<Component error={'error'} {...baseProps} />);

      expect(screen.getByTestId(`radio-${name}-${options[0].value}`)).toHaveAttribute(
        'aria-invalid',
        'true',
      );
      expect(screen.getByTestId(`radio-${name}-${options[1].value}`)).toHaveAttribute(
        'aria-invalid',
        'true',
      );
      expect(screen.getByTestId(`radio-${name}-${options[2].value}`)).toHaveAttribute(
        'aria-invalid',
        'true',
      );
    });

    it('should change internal state after base click', () => {
      render(<Component {...baseProps} />);

      const element = screen.getByTestId(`radio-${name}-${options[1].value}`);

      fireEvent.click(element);
      expect(element).toBeChecked();
    });
  });
});
