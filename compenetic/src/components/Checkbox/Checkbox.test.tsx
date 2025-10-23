import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  const defaultProps = {
    name: 'test-checkbox',
  };

  describe('Basic functionality', () => {
    it('should render without errors', () => {
      render(<Checkbox {...defaultProps} />);
      const checkbox = screen.getByTestId('checkbox');
      const input = screen.getByTestId('checkbox-input');

      expect(checkbox).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('type', 'checkbox');
      expect(input).toHaveAttribute('name', 'test-checkbox');
      expect(input).toHaveAttribute('id', 'test-checkbox');
    });

    it('should render with label when children provided', () => {
      render(<Checkbox {...defaultProps}>Test Label</Checkbox>);
      expect(screen.getByTestId('checkbox-label-text')).toBeInTheDocument();
      expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('should render without label when no children provided', () => {
      render(<Checkbox {...defaultProps} />);
      expect(screen.queryByTestId('checkbox-label-text')).not.toBeInTheDocument();
    });

    it('should call onChange when input is clicked', () => {
      const onChange = vi.fn();
      render(<Checkbox {...defaultProps} onChange={onChange} />);

      const input = screen.getByTestId('checkbox-input');
      fireEvent.click(input);

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should call onChange when label is clicked', () => {
      const onChange = vi.fn();
      render(
        <Checkbox {...defaultProps} onChange={onChange}>
          Test Label
        </Checkbox>,
      );

      const label = screen.getByTestId('checkbox');
      fireEvent.click(label);

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should toggle checked state on click', () => {
      const onChange = vi.fn();
      render(<Checkbox onChange={onChange} {...defaultProps} />);

      const checkbox = screen.getByTestId('checkbox');
      const input = screen.getByTestId('checkbox-input');
      const checkboxLabel = screen.getByTestId('checkbox-label');

      expect(input).not.toBeChecked();
      expect(checkboxLabel).toHaveAttribute('aria-checked', 'false');

      fireEvent.click(checkbox);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(input).toBeChecked();
      expect(checkboxLabel).toHaveAttribute('aria-checked', 'true');

      fireEvent.click(input);
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(input).not.toBeChecked();
      expect(checkboxLabel).toHaveAttribute('aria-checked', 'false');
    });

    it('should call onChange when error is present', () => {
      const onChange = vi.fn();
      render(
        <Checkbox {...defaultProps} onChange={onChange} value={true} error={'Error message'} />,
      );

      const input = screen.getByTestId('checkbox-input');
      fireEvent.click(input);

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should handle internal state when no onChange provided', () => {
      render(<Checkbox {...defaultProps} />);

      const input = screen.getByTestId('checkbox-input');

      expect(input).not.toBeChecked();

      fireEvent.click(input);
      expect(input).toBeChecked();

      fireEvent.click(input);
      expect(input).not.toBeChecked();
    });

    it('should render clickable label by default', () => {
      render(<Checkbox {...defaultProps}>Test Label</Checkbox>);

      const label = screen.getByTestId('checkbox');
      expect(label.tagName).toBe('LABEL');
      expect(label).toHaveAttribute('data-clickable-label', 'true');
    });

    it('should render non-clickable label when clickableLabel is false', () => {
      render(
        <Checkbox {...defaultProps} clickableLabel={false}>
          Test Label
        </Checkbox>,
      );

      const container = screen.getByTestId('checkbox');
      expect(container).toHaveAttribute('data-clickable-label', 'false');
      expect(container.tagName).toBe('LABEL');
    });

    it('should call onChange when non-clickable label container is clicked', () => {
      const onChange = vi.fn();
      render(
        <Checkbox {...defaultProps} clickableLabel={false} onChange={onChange}>
          Test Label
        </Checkbox>,
      );

      const container = screen.getByTestId('checkbox');
      fireEvent.click(container);

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should not call onChange when clicking on text with non-clickable label', () => {
      const onChange = vi.fn();
      render(
        <Checkbox {...defaultProps} clickableLabel={false} onChange={onChange}>
          Test Label
        </Checkbox>,
      );

      const text = screen.getByText('Test Label');
      fireEvent.click(text);

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should render with label wrapper even when no children', () => {
      render(<Checkbox {...defaultProps} clickableLabel={false} />);

      const container = screen.getByTestId('checkbox');
      expect(container.tagName).toBe('LABEL');
      expect(container).toHaveAttribute('data-clickable-label', 'false');
    });

    it('should call onChange when Enter key is pressed', () => {
      const onChange = vi.fn();
      render(<Checkbox {...defaultProps} onChange={onChange} />);

      const checkbox = screen.getByTestId('checkbox-label');
      fireEvent.keyDown(checkbox, { key: 'Enter' });

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should toggle state when Enter key is pressed', () => {
      const onChange = vi.fn();
      render(<Checkbox {...defaultProps} onChange={onChange} value={true} />);

      const checkbox = screen.getByTestId('checkbox-label');

      fireEvent.keyDown(checkbox, { key: 'Enter' });
      expect(onChange).toHaveBeenCalledTimes(1);

      fireEvent.keyDown(checkbox, { key: 'Enter' });
      expect(onChange).toHaveBeenCalledTimes(2);
    });

    it('should handle internal state when Enter key is pressed without onChange', () => {
      render(<Checkbox {...defaultProps} />);

      const input = screen.getByTestId('checkbox-input');
      const checkbox = screen.getByTestId('checkbox-label');

      expect(input).not.toBeChecked();

      fireEvent.keyDown(checkbox, { key: 'Enter' });
      expect(input).toBeChecked();

      fireEvent.keyDown(checkbox, { key: 'Enter' });
      expect(input).not.toBeChecked();
    });

    it('should call onChange when Enter key is pressed on non-clickable label', () => {
      const onChange = vi.fn();
      render(
        <Checkbox {...defaultProps} clickableLabel={false} onChange={onChange}>
          Test Label
        </Checkbox>,
      );

      const checkbox = screen.getByTestId('checkbox-label');
      fireEvent.keyDown(checkbox, { key: 'Enter' });

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should apply correct size classes', () => {
      const { rerender } = render(<Checkbox {...defaultProps} size={'medium'} />);

      let checkbox = screen.getByTestId('checkbox-label');
      expect(checkbox.className).toContain('medium');

      rerender(<Checkbox {...defaultProps} size={'large'} />);
      checkbox = screen.getByTestId('checkbox-label');
      expect(checkbox.className).toContain('large');
    });

    it('should apply correct size to icon', () => {
      const { rerender } = render(<Checkbox {...defaultProps} size={'medium'} />);

      let icon = screen.getByTestId('checkbox-icon');
      expect(icon).toHaveAttribute('data-checked', 'false');

      rerender(<Checkbox {...defaultProps} size={'large'} />);
      icon = screen.getByTestId('checkbox-icon');
      expect(icon).toHaveAttribute('data-checked', 'false');
    });

    it('should render CheckIcon when not indeterminate', () => {
      render(<Checkbox {...defaultProps} value={true} />);

      const icon = screen.getByTestId('checkbox-icon');
      expect(icon).toHaveAttribute('data-indeterminate', 'false');
    });

    it('should render LineIcon when indeterminate', () => {
      render(<Checkbox {...defaultProps} indeterminate={true} value={true} />);

      const icon = screen.getByTestId('checkbox-icon');
      expect(icon).toHaveAttribute('data-indeterminate', 'true');
    });

    it('should pass correct props to icon component', () => {
      render(<Checkbox {...defaultProps} value={true} disabled={true} size={'large'} />);

      const icon = screen.getByTestId('checkbox-icon');
      expect(icon).toHaveAttribute('data-checked', 'true');
      expect(icon).toHaveAttribute('data-disabled', 'true');
    });
  });

  describe('States', () => {
    it('should render checked state correctly', () => {
      render(<Checkbox {...defaultProps} value={true} />);

      const checkbox = screen.getByTestId('checkbox-label');
      const input = screen.getByTestId('checkbox-input');
      const icon = screen.getByTestId('checkbox-icon');

      expect(checkbox).toHaveAttribute('aria-checked', 'true');
      expect(input).toBeChecked();
      expect(icon).toHaveAttribute('data-checked', 'true');
    });

    it('should render unchecked state correctly', () => {
      render(<Checkbox {...defaultProps} value={false} />);

      const checkbox = screen.getByTestId('checkbox-label');
      const input = screen.getByTestId('checkbox-input');
      const icon = screen.getByTestId('checkbox-icon');

      expect(checkbox).toHaveAttribute('aria-checked', 'false');
      expect(input).not.toBeChecked();
      expect(icon).toHaveAttribute('data-checked', 'false');
    });

    it('should render indeterminate state correctly', () => {
      render(<Checkbox {...defaultProps} indeterminate={true} value={true} />);

      const icon = screen.getByTestId('checkbox-icon');
      expect(icon).toHaveAttribute('data-indeterminate', 'true');
      expect(icon).toHaveAttribute('data-checked', 'true');
    });

    it('should maintain checked state when error is present', () => {
      render(<Checkbox {...defaultProps} value={true} error={'Error message'} />);

      const checkbox = screen.getByTestId('checkbox-label');
      const input = screen.getByTestId('checkbox-input');
      const icon = screen.getByTestId('checkbox-icon');

      expect(checkbox).toHaveAttribute('aria-checked', 'true');
      expect(input).toBeChecked();
      expect(icon).toHaveAttribute('data-checked', 'true');
    });

    it('should have proper ARIA attributes', () => {
      render(<Checkbox {...defaultProps} value={true} disabled={true} error={'Error'} />);

      const checkbox = screen.getByTestId('checkbox-label');
      const input = screen.getByTestId('checkbox-input');

      expect(checkbox).toHaveAttribute('aria-checked', 'true');
      expect(checkbox).toHaveAttribute('aria-disabled', 'true');
      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
      expect(checkbox).toHaveAttribute('aria-describedby', 'test-checkbox-error');

      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(input).toHaveAttribute('aria-describedby', 'test-checkbox-error');
    });

    it('should render disabled state correctly', () => {
      render(<Checkbox {...defaultProps} disabled={true} />);

      const checkbox = screen.getByTestId('checkbox-label');
      const input = screen.getByTestId('checkbox-input');
      const icon = screen.getByTestId('checkbox-icon');

      expect(checkbox).toHaveAttribute('aria-disabled', 'true');
      expect(input).toBeDisabled();
      expect(icon).toHaveAttribute('data-disabled', 'true');
    });

    it('should not call onChange when disabled', () => {
      const onChange = vi.fn();
      render(<Checkbox {...defaultProps} onChange={onChange} disabled={true} />);

      const input = screen.getByTestId('checkbox-input');
      fireEvent.click(input);

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should not call onChange when label is clicked and disabled', () => {
      const onChange = vi.fn();
      render(
        <Checkbox {...defaultProps} onChange={onChange} disabled={true}>
          Test Label
        </Checkbox>,
      );

      const label = screen.getByTestId('checkbox');
      fireEvent.click(label);

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should not change internal state when disabled', () => {
      render(<Checkbox {...defaultProps} disabled={true} />);

      const input = screen.getByTestId('checkbox-input');

      expect(input).not.toBeChecked();

      fireEvent.click(input);
      expect(input).not.toBeChecked();
    });

    it('should render loading state correctly', () => {
      render(<Checkbox {...defaultProps} loading={true} />);

      const checkbox = screen.getByTestId('checkbox-label');
      const input = screen.getByTestId('checkbox-input');
      const icon = screen.getByTestId('checkbox-icon');

      expect(checkbox).toHaveAttribute('aria-disabled', 'true');
      expect(input).toBeDisabled();
      expect(icon).toHaveAttribute('data-disabled', 'true');
    });

    it('should not call onChange when loading', () => {
      const onChange = vi.fn();
      render(<Checkbox {...defaultProps} onChange={onChange} loading={true} />);

      const input = screen.getByTestId('checkbox-input');
      fireEvent.click(input);

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should not change internal state when loading', () => {
      render(<Checkbox {...defaultProps} loading={true} />);

      const input = screen.getByTestId('checkbox-input');

      expect(input).not.toBeChecked();

      fireEvent.click(input);
      expect(input).not.toBeChecked();
    });

    it('should render error state correctly', () => {
      const errorMessage = 'This field is required';
      render(<Checkbox {...defaultProps} error={errorMessage} />);

      const checkbox = screen.getByTestId('checkbox-label');
      const input = screen.getByTestId('checkbox-input');

      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(checkbox).toHaveAttribute('aria-describedby', 'test-checkbox-error');
      expect(input).toHaveAttribute('aria-describedby', 'test-checkbox-error');
    });

    it('should not display error message when no error', () => {
      render(<Checkbox {...defaultProps} />);

      expect(screen.queryByTestId('checkbox-error-test-checkbox')).not.toBeInTheDocument();
    });

    it('should still be clickable when error is present', () => {
      const onChange = vi.fn();
      render(
        <Checkbox {...defaultProps} onChange={onChange} value={true} error={'Error message'} />,
      );

      const input = screen.getByTestId('checkbox-input');
      expect(input).toBeChecked();

      fireEvent.click(input);
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should not call onChange when Enter key is pressed and disabled', () => {
      const onChange = vi.fn();
      render(<Checkbox {...defaultProps} onChange={onChange} disabled={true} />);

      const checkbox = screen.getByTestId('checkbox-label');
      fireEvent.keyDown(checkbox, { key: 'Enter' });

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should not change internal state when Enter key is pressed and disabled', () => {
      render(<Checkbox {...defaultProps} disabled={true} />);

      const input = screen.getByTestId('checkbox-input');
      const checkbox = screen.getByTestId('checkbox-label');

      expect(input).not.toBeChecked();

      fireEvent.keyDown(checkbox, { key: 'Enter' });
      expect(input).not.toBeChecked();
    });

    it('should call onChange when Enter key is pressed and error is present', () => {
      const onChange = vi.fn();
      render(<Checkbox {...defaultProps} onChange={onChange} error={'Error message'} />);

      const checkbox = screen.getByTestId('checkbox-label');
      fireEvent.keyDown(checkbox, { key: 'Enter' });

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should change internal state when Enter key is pressed and error is present', () => {
      render(<Checkbox {...defaultProps} error={'Error message'} />);

      const input = screen.getByTestId('checkbox-input');
      const checkbox = screen.getByTestId('checkbox-label');

      expect(input).not.toBeChecked();

      fireEvent.keyDown(checkbox, { key: 'Enter' });
      expect(input).toBeChecked();
    });
  });
});
