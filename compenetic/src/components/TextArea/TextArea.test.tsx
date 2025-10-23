import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { TextArea } from './TextArea';
import {
  getWrapperHeight,
  getTextareaHeight,
  getPadding,
  getInputBaseSize,
  getIconSize,
  getSuffixPosition,
  getSizeStyles,
} from './lib/getters';
import {
  SIZES,
  POSITIONS,
  RESIZE_MODES,
  WRAPPER_HEIGHTS,
  TEXTAREA_HEIGHTS,
  PADDING,
  MIN_HEIGHTS,
} from './lib/constants';
import { TextAreaSize } from './TextArea.type';

describe('TextArea', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
  };

  describe('Basic functionality', () => {
    it('renders without errors', () => {
      render(<TextArea {...defaultProps} />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('displays placeholder', () => {
      const placeholder = 'Enter text';
      render(<TextArea {...defaultProps} placeholder={placeholder} showLabel={false} />);
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });

    it('displays value', () => {
      const value = 'test value';
      render(<TextArea {...defaultProps} value={value} />);
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    });

    it('calls onChange when value changes', () => {
      const onChange = vi.fn();
      render(<TextArea {...defaultProps} onChange={onChange} />);

      const textarea = screen.getByRole('textbox');
      fireEvent.change(textarea, { target: { value: 'new text' } });

      expect(onChange).toHaveBeenCalledWith('new text');
    });

    it('handles focus events', () => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();

      render(<TextArea {...defaultProps} onFocus={onFocus} onBlur={onBlur} />);

      const textarea = screen.getByRole('textbox');
      fireEvent.focus(textarea);
      expect(onFocus).toHaveBeenCalled();

      fireEvent.blur(textarea);
      expect(onBlur).toHaveBeenCalled();
    });

    it('applies maxLength constraint', () => {
      const maxLength = 10;
      render(<TextArea {...defaultProps} maxLength={maxLength} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('maxlength', '10');
    });

    it('applies rows attribute', () => {
      const rows = 5;
      render(<TextArea {...defaultProps} rows={rows} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
    });
  });

  describe('States', () => {
    it('applies disabled state', () => {
      render(<TextArea {...defaultProps} disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('applies error state', () => {
      render(<TextArea {...defaultProps} error />);
      const wrapper = screen.getByTestId('input-base-wrapper');

      expect(wrapper.querySelector('div[class*="wrapper"]')).toHaveClass(/error/);
    });

    it('displays helper text', () => {
      const helper = 'Helper text';
      render(<TextArea {...defaultProps} helper={helper} />);
      expect(screen.getByText(helper)).toBeInTheDocument();
    });
  });

  describe('Sizing', () => {
    it('applies correct size class', () => {
      const { rerender } = render(<TextArea {...defaultProps} size='small' />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();

      rerender(<TextArea {...defaultProps} size='medium' />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Clearable functionality', () => {
    it('should show clear button when clearable is true and has value', () => {
      render(<TextArea {...defaultProps} value='Test value' clearable />);

      const clearButton = screen.getByTestId('x-icon');
      expect(clearButton).toBeInTheDocument();
    });

    it('should not show clear button when clearable is false', () => {
      render(<TextArea {...defaultProps} value='Test value' clearable={false} />);

      const clearButton = screen.queryByTestId('x-icon');
      expect(clearButton).not.toBeInTheDocument();
    });

    it('should call onChange with empty string when clear button is clicked', () => {
      const onChange = vi.fn();
      render(<TextArea {...defaultProps} value='Test value' onChange={onChange} clearable />);

      const clearButton = screen.getByTestId('x-icon');
      fireEvent.click(clearButton);

      expect(onChange).toHaveBeenCalledWith('');
    });

    it('should clear button be disabled when textarea is disabled', () => {
      render(<TextArea {...defaultProps} value='Test value' clearable disabled />);

      const clearButton = screen.queryByTestId('x-icon');
      expect(clearButton).not.toBeInTheDocument();
    });

    it('should clear button be disabled when textarea is loading', () => {
      render(<TextArea {...defaultProps} value='Test value' clearable loading />);

      const clearButton = screen.queryByTestId('x-icon');
      expect(clearButton).not.toBeInTheDocument();
    });
  });

  describe('Getters', () => {
    describe('getWrapperHeight', () => {
      it('should return correct height for small size', () => {
        const height = getWrapperHeight(SIZES.SMALL);
        expect(height).toBe(WRAPPER_HEIGHTS.SMALL);
      });

      it('should return correct height for medium size without minHeight', () => {
        const height = getWrapperHeight(SIZES.MEDIUM);
        expect(height).toBe(WRAPPER_HEIGHTS.MEDIUM);
      });

      it('should return minHeight when provided for medium size', () => {
        const height = getWrapperHeight(SIZES.MEDIUM, MIN_HEIGHTS.SMALL);
        expect(height).toBe(`${MIN_HEIGHTS.SMALL}px`);
      });

      it('should ignore minHeight for small size', () => {
        const height = getWrapperHeight(SIZES.SMALL, 100);
        expect(height).toBe(WRAPPER_HEIGHTS.SMALL);
      });

      it('should return default height for unknown size', () => {
        const height = getWrapperHeight('unknown' as TextAreaSize);
        expect(height).toBe(WRAPPER_HEIGHTS.MEDIUM);
      });
    });

    describe('getTextareaHeight', () => {
      it('should return correct height for small size', () => {
        const height = getTextareaHeight(SIZES.SMALL);
        expect(height).toBe(TEXTAREA_HEIGHTS.SMALL);
      });

      it('should return correct height for medium size without minHeight', () => {
        const height = getTextareaHeight(SIZES.MEDIUM);
        expect(height).toBe(TEXTAREA_HEIGHTS.MEDIUM);
      });

      it('should return correct height for minHeight 48', () => {
        const height = getTextareaHeight(SIZES.MEDIUM, MIN_HEIGHTS.SMALL);
        expect(height).toBe(TEXTAREA_HEIGHTS.MEDIUM);
      });

      it('should return correct height for minHeight 56', () => {
        const height = getTextareaHeight(SIZES.MEDIUM, MIN_HEIGHTS.MEDIUM);
        expect(height).toBe(TEXTAREA_HEIGHTS.MEDIUM);
      });

      it('should return correct height for minHeight 112', () => {
        const height = getTextareaHeight(SIZES.MEDIUM, MIN_HEIGHTS.LARGE);
        expect(height).toBe(TEXTAREA_HEIGHTS.SMALL);
      });

      it('should return default height for unknown minHeight', () => {
        const height = getTextareaHeight(SIZES.MEDIUM, 200);
        expect(height).toBe(TEXTAREA_HEIGHTS.MEDIUM);
      });

      it('should ignore minHeight for small size', () => {
        const height = getTextareaHeight(SIZES.SMALL, 100);
        expect(height).toBe(TEXTAREA_HEIGHTS.SMALL);
      });
    });

    describe('getPadding', () => {
      it('should return correct padding for small size', () => {
        const padding = getPadding(SIZES.SMALL);
        expect(padding).toBe(PADDING.SMALL);
      });

      it('should return correct padding for medium size without minHeight', () => {
        const padding = getPadding(SIZES.MEDIUM);
        expect(padding).toBe(PADDING.MEDIUM);
      });

      it('should return correct padding for medium size with floating label', () => {
        const padding = getPadding(SIZES.MEDIUM, undefined, true);
        expect(padding).toBe(PADDING.MEDIUM_FLOATING_LABEL);
      });

      it('should return correct padding for minHeight 48', () => {
        const padding = getPadding(SIZES.MEDIUM, MIN_HEIGHTS.SMALL);
        expect(padding).toBe(PADDING.MEDIUM_WITH_PREFIX);
      });

      it('should return correct padding for minHeight 56 without floating label', () => {
        const padding = getPadding(SIZES.MEDIUM, MIN_HEIGHTS.MEDIUM, false);
        expect(padding).toBe(PADDING.MEDIUM);
      });

      it('should return correct padding for minHeight 56 with floating label', () => {
        const padding = getPadding(SIZES.MEDIUM, MIN_HEIGHTS.MEDIUM, true);
        expect(padding).toBe(PADDING.MEDIUM_FLOATING_LABEL);
      });

      it('should return correct padding for minHeight 112', () => {
        const padding = getPadding(SIZES.MEDIUM, MIN_HEIGHTS.LARGE);
        expect(padding).toBe(PADDING.MEDIUM);
      });

      it('should ignore minHeight for small size', () => {
        const padding = getPadding(SIZES.SMALL, 100, true);
        expect(padding).toBe(PADDING.SMALL);
      });
    });

    describe('getInputBaseSize', () => {
      it('should return small for small size', () => {
        const size = getInputBaseSize(SIZES.SMALL);
        expect(size).toBe('small');
      });

      it('should return medium for medium size without minHeight', () => {
        const size = getInputBaseSize(SIZES.MEDIUM);
        expect(size).toBe('medium');
      });

      it('should return small for minHeight 48', () => {
        const size = getInputBaseSize(SIZES.MEDIUM, MIN_HEIGHTS.SMALL);
        expect(size).toBe('small');
      });

      it('should return medium for minHeight 56', () => {
        const size = getInputBaseSize(SIZES.MEDIUM, MIN_HEIGHTS.MEDIUM);
        expect(size).toBe('medium');
      });

      it('should return medium for minHeight 112', () => {
        const size = getInputBaseSize(SIZES.MEDIUM, MIN_HEIGHTS.LARGE);
        expect(size).toBe('medium');
      });

      it('should ignore minHeight for small size', () => {
        const size = getInputBaseSize(SIZES.SMALL, 100);
        expect(size).toBe('small');
      });
    });

    describe('getIconSize', () => {
      it('should return correct icon size for small', () => {
        const iconSize = getIconSize(SIZES.SMALL);
        expect(iconSize).toBe('xs');
      });

      it('should return correct icon size for medium', () => {
        const iconSize = getIconSize(SIZES.MEDIUM);
        expect(iconSize).toBe('sm');
      });
    });

    describe('getSuffixPosition', () => {
      it('should return correct position for small', () => {
        const position = getSuffixPosition(SIZES.SMALL);
        expect(position).toBe(POSITIONS.SMALL);
      });

      it('should return correct position for medium', () => {
        const position = getSuffixPosition(SIZES.MEDIUM);
        expect(position).toBe(POSITIONS.MEDIUM);
      });
    });

    describe('getSizeStyles', () => {
      it('should return correct styles for small size', () => {
        const styles = getSizeStyles(SIZES.SMALL);

        expect(styles.wrapperStyles).toEqual({
          minHeight: WRAPPER_HEIGHTS.SMALL,
          boxSizing: 'border-box',
          padding: PADDING.SMALL,
        });

        expect(styles.floatingLabelStyles).toEqual({
          left: POSITIONS.SMALL,
          transformOrigin: 'left top',
        });

        expect(styles.suffixStyles).toEqual({
          right: POSITIONS.SMALL,
        });
      });

      it('should return correct styles for medium size', () => {
        const styles = getSizeStyles(SIZES.MEDIUM);

        expect(styles.wrapperStyles).toEqual({
          minHeight: WRAPPER_HEIGHTS.MEDIUM,
          boxSizing: 'border-box',
          padding: PADDING.MEDIUM,
        });

        expect(styles.floatingLabelStyles).toEqual({
          left: POSITIONS.MEDIUM,
          transformOrigin: 'left top',
        });

        expect(styles.suffixStyles).toEqual({
          right: POSITIONS.MEDIUM,
        });
      });

      it('should return correct styles with minHeight', () => {
        const styles = getSizeStyles(SIZES.MEDIUM, MIN_HEIGHTS.SMALL);

        expect(styles.wrapperStyles.minHeight).toBe(`${MIN_HEIGHTS.SMALL}px`);
        expect(styles.textareaStyles.minHeight).toBe(TEXTAREA_HEIGHTS.MEDIUM);
      });

      it('should return correct styles for fill resize mode', () => {
        const styles = getSizeStyles(SIZES.MEDIUM, undefined, false, RESIZE_MODES.FILL);

        expect(styles.wrapperStyles.height).toBe('100%');
        expect(styles.textareaStyles.flex).toBe(1);
        expect(styles.textareaStyles.minHeight).toBe(0);
      });

      it('should return correct styles for fixed resize mode', () => {
        const styles = getSizeStyles(SIZES.MEDIUM, MIN_HEIGHTS.MEDIUM, false, RESIZE_MODES.FIXED);

        expect(styles.wrapperStyles.height).toBe(`${MIN_HEIGHTS.MEDIUM}px`);
        expect(styles.textareaStyles.height).toBe(TEXTAREA_HEIGHTS.MEDIUM);
      });
    });
  });
});
