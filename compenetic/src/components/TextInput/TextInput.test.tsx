import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { TextInput } from './TextInput';
import {
  getPadding,
  getHeight,
  getPrefixSuffixSpacing,
  getSizeStyles,
  getLargeSizeStyles,
  getMediumSizeStyles,
  getSmallSizeStyles,
} from './lib/getters';
import { SIZES } from './lib/constants';
import { TextInputSize } from './TextInput.type';

describe('TextInput', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
  };

  describe('Basic functionality', () => {
    it('renders without errors', () => {
      render(<TextInput {...defaultProps} />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('displays placeholder', () => {
      const placeholder = 'Enter text';
      render(<TextInput {...defaultProps} placeholder={placeholder} />);
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });

    it('displays value', () => {
      const value = 'test value';
      render(<TextInput {...defaultProps} value={value} />);
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    });

    it('calls onChange when value changes', () => {
      const onChange = vi.fn();
      render(<TextInput {...defaultProps} onChange={onChange} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'new text' } });

      expect(onChange).toHaveBeenCalledWith('new text');
    });

    it('handles focus events', () => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();

      render(<TextInput {...defaultProps} onFocus={onFocus} onBlur={onBlur} />);

      const input = screen.getByRole('textbox');
      fireEvent.focus(input);
      expect(onFocus).toHaveBeenCalled();

      fireEvent.blur(input);
      expect(onBlur).toHaveBeenCalled();
    });

    it('applies maxLength constraint', () => {
      render(<TextInput {...defaultProps} maxLength={10} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('maxlength', '10');
    });
  });

  describe('States', () => {
    it('applies disabled state', () => {
      render(<TextInput {...defaultProps} disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('applies error state', () => {
      render(<TextInput {...defaultProps} error />);
      const wrapper = screen.getByTestId('input-base-wrapper');
      expect(wrapper.querySelector('div[class*="wrapper"]')).toHaveClass(/error/);
    });

    it('applies loading state', () => {
      render(<TextInput {...defaultProps} loading />);
      const wrapper = screen.getByTestId('input-base-wrapper');
      expect(wrapper.querySelector('div[class*="wrapper"]')).toHaveClass(/loading/);
    });

    it('displays helper text', () => {
      const helper = 'Helper text';
      render(<TextInput {...defaultProps} helper={helper} />);
      expect(screen.getByText(helper)).toBeInTheDocument();
    });
  });

  describe('Sizing', () => {
    it('applies correct size styles', () => {
      const { rerender } = render(<TextInput {...defaultProps} size='small' />);
      const wrapper = screen.getByTestId('input-base-wrapper');
      expect(wrapper.querySelector('div[class*="wrapper"]')).toHaveStyle('min-height: 40px');

      rerender(<TextInput {...defaultProps} size='medium' />);
      expect(wrapper.querySelector('div[class*="wrapper"]')).toHaveStyle('min-height: 48px');

      rerender(<TextInput {...defaultProps} size='large' />);
      expect(wrapper.querySelector('div[class*="wrapper"]')).toHaveStyle('min-height: 56px');
    });
  });

  describe('Prefix and Suffix', () => {
    it('displays prefix', () => {
      render(<TextInput {...defaultProps} prefix={<span>Search</span>} />);
      expect(screen.getByText('Search')).toBeInTheDocument();
    });

    it('displays suffix', () => {
      render(<TextInput {...defaultProps} suffix={<span>XIcon</span>} />);
      expect(screen.getByText('XIcon')).toBeInTheDocument();
    });
  });

  describe('Hint functionality', () => {
    it('shows hint when showHint=true and has value', () => {
      render(<TextInput {...defaultProps} value='Test value' hint='Hint text' showHint />);
      expect(screen.getByText('Hint text')).toBeInTheDocument();
    });

    it('does not show hint when showHint=false', () => {
      render(<TextInput {...defaultProps} value='Test value' hint='Hint text' showHint={false} />);
      expect(screen.queryByText('Hint text')).not.toBeInTheDocument();
    });

    it('shows hint when value is empty and showHintOnEmpty=true', () => {
      render(<TextInput {...defaultProps} value='' hint='Hint text' showHint showHintOnEmpty />);
      expect(screen.getByText('Hint text')).toBeInTheDocument();
    });

    it('does not show hint when value is empty and showHintOnEmpty=false', () => {
      render(
        <TextInput {...defaultProps} value='' hint='Hint text' showHint showHintOnEmpty={false} />,
      );
      expect(screen.queryByText('Hint text')).not.toBeInTheDocument();
    });

    it('truncates long hint to 30 characters', () => {
      const longHint = 'Very long hint text that should be truncated to thirty characters';
      render(<TextInput {...defaultProps} value='Test value' hint={longHint} showHint />);
      expect(screen.getByText('Very long hint text that shoul...')).toBeInTheDocument();
    });
  });

  describe('Clearable functionality', () => {
    it('shows clear button when clearable=true and has value', () => {
      render(<TextInput {...defaultProps} value='Test value' clearable />);

      const clearButton = screen.getByTestId('x-icon');
      expect(clearButton).toBeInTheDocument();
    });

    it('does not show clear button when clearable=false', () => {
      render(<TextInput {...defaultProps} value='Test value' clearable={false} />);

      const clearButton = screen.queryByTestId('x-icon');
      expect(clearButton).not.toBeInTheDocument();
    });

    it('calls onChange with empty string when clear button is clicked', () => {
      const onChange = vi.fn();
      render(<TextInput {...defaultProps} value='Test value' onChange={onChange} clearable />);

      const clearButton = screen.getByTestId('x-icon');
      fireEvent.click(clearButton);

      expect(onChange).toHaveBeenCalledWith('');
    });

    it('does not show clear button when disabled', () => {
      render(<TextInput {...defaultProps} value='Test value' clearable disabled />);

      const clearButton = screen.queryByTestId('x-icon');
      expect(clearButton).not.toBeInTheDocument();
    });

    it('does not show clear button when loading', () => {
      render(<TextInput {...defaultProps} value='Test value' clearable loading />);

      const clearButton = screen.queryByTestId('x-icon');
      expect(clearButton).not.toBeInTheDocument();
    });
  });

  describe('Getters', () => {
    describe('getPadding', () => {
      it('should return correct padding for large size with floating label and value', () => {
        const padding = getPadding(SIZES.LARGE, true, true, false);
        expect(padding).toBe('8px 16px 8px 16px');
      });

      it('should return correct padding for large size without floating label or value', () => {
        const padding = getPadding(SIZES.LARGE, false, false, false);
        expect(padding).toBe('16px 16px 16px 16px');
      });

      it('should return correct padding for medium size with prefix', () => {
        const padding = getPadding(SIZES.MEDIUM, false, false, true);
        expect(padding).toBe('12px 12px 12px 12px');
      });

      it('should return correct padding for medium size without prefix', () => {
        const padding = getPadding(SIZES.MEDIUM, false, false, false);
        expect(padding).toBe('12px 12px 12px 16px');
      });

      it('should return correct padding for small size', () => {
        const padding = getPadding(SIZES.SMALL, false, false, false);
        expect(padding).toBe('10px 12px 10px 12px');
      });

      it('should return default padding for unknown size', () => {
        const padding = getPadding('unknown' as TextInputSize, false, false, false);
        expect(padding).toBe('12px 16px 12px 16px');
      });
    });

    describe('getHeight', () => {
      it('should return correct height for large size', () => {
        const height = getHeight(SIZES.LARGE);
        expect(height).toBe('56px');
      });

      it('should return correct height for medium size', () => {
        const height = getHeight(SIZES.MEDIUM);
        expect(height).toBe('48px');
      });

      it('should return correct height for small size', () => {
        const height = getHeight(SIZES.SMALL);
        expect(height).toBe('40px');
      });

      it('should return default height for unknown size', () => {
        const height = getHeight('unknown' as TextInputSize);
        expect(height).toBe('48px');
      });
    });

    describe('getPrefixSuffixSpacing', () => {
      it('should return correct spacing for small size', () => {
        const spacing = getPrefixSuffixSpacing(SIZES.SMALL);
        expect(spacing).toBe(8);
      });

      it('should return correct spacing for medium size', () => {
        const spacing = getPrefixSuffixSpacing(SIZES.MEDIUM);
        expect(spacing).toBe(12);
      });

      it('should return correct spacing for large size', () => {
        const spacing = getPrefixSuffixSpacing(SIZES.LARGE);
        expect(spacing).toBe(12);
      });

      it('should return default spacing for unknown size', () => {
        const spacing = getPrefixSuffixSpacing('unknown' as TextInputSize);
        expect(spacing).toBe(12);
      });
    });

    describe('getLargeSizeStyles', () => {
      it('should return correct styles for large size', () => {
        const styles = getLargeSizeStyles('56px', '16px 16px 16px 16px', 12);

        expect(styles.wrapperStyles).toEqual({
          height: '56px',
          minHeight: '56px',
          maxHeight: '56px',
          boxSizing: 'border-box',
          padding: '16px 16px 16px 16px',
        });

        expect(styles.floatingLabelStyles).toEqual({
          left: '16px',
          transformOrigin: 'left top',
        });

        expect(styles.prefixStyles).toEqual({
          paddingRight: '12px',
        });

        expect(styles.suffixStyles).toEqual({
          right: '12px',
        });
      });
    });

    describe('getMediumSizeStyles', () => {
      it('should return correct styles for medium size', () => {
        const styles = getMediumSizeStyles('48px', '12px 12px 12px 16px', 12);

        expect(styles.wrapperStyles).toEqual({
          minHeight: '48px',
          maxHeight: '48px',
          boxSizing: 'border-box',
          padding: '12px 12px 12px 16px',
        });

        expect(styles.floatingLabelStyles).toEqual({
          left: '16px',
        });

        expect(styles.prefixStyles).toEqual({
          paddingRight: '12px',
        });

        expect(styles.suffixStyles).toEqual({
          right: '12px',
        });
      });
    });

    describe('getSmallSizeStyles', () => {
      it('should return correct styles for small size', () => {
        const styles = getSmallSizeStyles('40px', '10px 12px 10px 12px', 8);

        expect(styles.wrapperStyles).toEqual({
          minHeight: '40px',
          maxHeight: '40px',
          boxSizing: 'border-box',
          padding: '10px 12px 10px 12px',
        });

        expect(styles.floatingLabelStyles).toEqual({
          left: '12px',
        });

        expect(styles.prefixStyles).toEqual({
          paddingRight: '8px',
        });

        expect(styles.suffixStyles).toEqual({
          right: '8px',
        });
      });
    });

    describe('getSizeStyles', () => {
      it('should return large size styles', () => {
        const styles = getSizeStyles(SIZES.LARGE, true, true, false);

        expect(styles.wrapperStyles).toHaveProperty('height', '56px');
        expect(styles.wrapperStyles).toHaveProperty('minHeight', '56px');
        expect(styles.floatingLabelStyles).toHaveProperty('left', '16px');
        expect(styles.floatingLabelStyles).toHaveProperty('transformOrigin', 'left top');
      });

      it('should return medium size styles', () => {
        const styles = getSizeStyles(SIZES.MEDIUM, false, false, true);

        expect(styles.wrapperStyles).toHaveProperty('minHeight', '48px');
        expect(styles.wrapperStyles).toHaveProperty('maxHeight', '48px');
        expect(styles.floatingLabelStyles).toHaveProperty('left', '16px');
        expect(styles.floatingLabelStyles).not.toHaveProperty('transformOrigin');
      });

      it('should return small size styles', () => {
        const styles = getSizeStyles(SIZES.SMALL, false, false, false);

        expect(styles.wrapperStyles).toHaveProperty('minHeight', '40px');
        expect(styles.wrapperStyles).toHaveProperty('maxHeight', '40px');
        expect(styles.floatingLabelStyles).toHaveProperty('left', '12px');
      });

      it('should return empty styles for unknown size', () => {
        const styles = getSizeStyles('unknown' as TextInputSize, false, false, false);

        expect(styles).toEqual({
          wrapperStyles: {},
          floatingLabelStyles: {},
          prefixStyles: {},
          suffixStyles: {},
        });
      });

      it('should handle different padding scenarios for large size', () => {
        const stylesWithFloatingLabel = getSizeStyles(SIZES.LARGE, true, true, false);
        const stylesWithoutFloatingLabel = getSizeStyles(SIZES.LARGE, false, false, false);

        expect(stylesWithFloatingLabel.wrapperStyles.padding).toBe('8px 16px 8px 16px');
        expect(stylesWithoutFloatingLabel.wrapperStyles.padding).toBe('16px 16px 16px 16px');
      });

      it('should handle different padding scenarios for medium size', () => {
        const stylesWithPrefix = getSizeStyles(SIZES.MEDIUM, false, false, true);
        const stylesWithoutPrefix = getSizeStyles(SIZES.MEDIUM, false, false, false);

        expect(stylesWithPrefix.wrapperStyles.padding).toBe('12px 12px 12px 12px');
        expect(stylesWithoutPrefix.wrapperStyles.padding).toBe('12px 12px 12px 16px');
      });
    });
  });
});
