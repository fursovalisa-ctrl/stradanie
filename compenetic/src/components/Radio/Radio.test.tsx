import { type FC, type ChangeEvent, useState } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

import { Radio, RADIO_CONTAINER_TEST_PREFIX } from './Radio';
import { RadioProps } from './Radio.type';

const Component: FC<RadioProps<string>> = (props) => {
  const { value, onChange, ...rest } = props;
  const [radioValue, setRadioValue] = useState('');

  const handleChange = (value: string, e?: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(value);
    onChange?.(value, e);
  };
  return <Radio checked={radioValue === value} value={value} onChange={handleChange} {...rest} />;
};

describe('Radio', () => {
  const name = 'radio_test';
  const nameLabel = 'radio_label_test';
  const nameRadioContainer = RADIO_CONTAINER_TEST_PREFIX + name;
  const nameRadioInput = `radio-${name}`;
  const baseProps = { name, ['data-testid']: name, value: 'radio' };

  it('should render without errors', () => {
    render(<Component {...baseProps} />);

    const element = screen.getByTestId(name);
    expect(element).toBeInTheDocument();
  });

  describe('Content rendering', () => {
    it('should render with label', () => {
      render(<Component {...baseProps} label={name} />);

      expect(screen.getByText(name)).toBeInTheDocument();
    });

    it('should render with ReactNode', () => {
      const labelNode = <span data-testid={nameLabel}>{nameLabel}</span>;

      render(<Component {...baseProps} label={labelNode} />);

      expect(screen.getByTestId(nameLabel)).toBeInTheDocument();
    });
  });

  describe('Size is correctly', () => {
    it('should apply correct size classes', () => {
      const sizes = ['small', 'medium', 'large'] as const;

      const { rerender } = render(<Component {...baseProps} />);

      sizes.forEach((size) => {
        rerender(<Component {...baseProps} size={size} />);

        expect(screen.getByTestId(nameRadioContainer).className).toContain(size);
      });
    });
  });

  describe('State is correctly', () => {
    it('should apply correct error classes', () => {
      render(<Component {...baseProps} error={'error'} />);

      const element = screen.getByTestId(nameRadioContainer);

      expect(element.className).toContain('error');
      expect(screen.getByTestId(nameRadioInput)).toHaveAttribute('aria-invalid', 'true');
    });

    it('should apply correct disabled state', () => {
      const onClick = vi.fn();

      const { rerender } = render(<Component {...baseProps} onChange={onClick} disabled />);

      const radioElement = screen.getByTestId(nameRadioContainer);

      fireEvent.click(radioElement);

      expect(screen.getByTestId(nameRadioInput)).toBeDisabled();
      expect(radioElement.className).toContain('disabled');

      expect(screen.getByTestId(nameRadioInput)).not.toBeChecked();
      expect(onClick).toHaveBeenCalledTimes(0);

      rerender(<Component {...baseProps} onChange={onClick} loading />);

      fireEvent.click(radioElement);

      expect(screen.getByTestId(nameRadioInput)).not.toBeChecked();
      expect(onClick).toHaveBeenCalledTimes(0);
    });

    it('should apply correct checked state', () => {
      render(<Component {...baseProps} checked />);

      const element = screen.getByTestId(nameRadioContainer);

      expect(screen.getByTestId(nameRadioInput)).toBeChecked();
      expect(element.className).toContain('checked');
    });

    it('should apply correct focus state and checked after enter', async () => {
      const user = userEvent.setup();

      render(<Component {...baseProps} />);

      const element = screen.getByTestId(nameRadioContainer);

      await user.tab();

      expect(element).toHaveFocus();

      await user.keyboard('[Enter]');

      expect(screen.getByTestId(nameRadioInput)).toBeChecked();
    });
  });

  describe('Mode is correctly', () => {
    it('should apply correct card mode classes', () => {
      const labelNode = <span data-testid={nameLabel}>{nameLabel}</span>;

      render(
        <Component
          data-testid={name}
          name={name}
          value={'radio'}
          mode={'card'}
          label={labelNode}
        />,
      );

      const element = screen.getByTestId(name);
      const labelElement = screen.getByTestId(nameLabel);

      expect(element.className).toContain('card');
      expect(element).toContainElement(labelElement);
    });

    it('should apply correct card mode without classes', () => {
      render(<Component {...baseProps} />);

      const element = screen.getByTestId(name);

      expect(element.className).not.toContain('card');
    });
  });

  describe('Clickable is correctly', () => {
    it('should apply correct state checked after click on label', () => {
      const labelNode = <span data-testid={nameLabel}>{nameLabel}</span>;

      render(
        <Component
          data-testid={name}
          name={name}
          value={'radio'}
          label={labelNode}
          clickable={'all'}
        />,
      );

      const element = screen.getByTestId(nameRadioInput);

      fireEvent.click(screen.getByTestId(nameLabel));

      expect(element).toBeChecked();
    });

    it('should not apply checked state after click on label', () => {
      const labelNode = <span data-testid={nameLabel}>{nameLabel}</span>;

      render(
        <Component
          data-testid={name}
          name={name}
          value={'radio'}
          label={labelNode}
          clickable={'control'}
        />,
      );

      const element = screen.getByTestId(name);

      fireEvent.click(screen.getByTestId(nameLabel));

      expect(screen.getByTestId(nameRadioInput)).not.toBeChecked();
      expect(element.className).not.toContain('checked');
    });

    it('should change internal state when Enter key is pressed', () => {
      render(<Component {...baseProps} />);

      const input = screen.getByTestId(nameRadioInput);
      const radio = screen.getByTestId(name);

      expect(input).not.toBeChecked();

      fireEvent.keyDown(radio, { key: 'Enter' });
      expect(input).toBeChecked();
    });

    it('should change internal state when Enter key is pressed with error state', () => {
      render(<Component {...baseProps} error={'error'} />);

      const input = screen.getByTestId(nameRadioInput);
      const radio = screen.getByTestId(name);

      expect(input).not.toBeChecked();

      fireEvent.keyDown(radio, { key: 'Enter' });
      expect(input).toBeChecked();
    });
  });
});
