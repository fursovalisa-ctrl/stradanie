import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Helper } from './Helper';

describe('Helper', () => {
  it('should render without errors', () => {
    render(<Helper title={'Test helper text'} data-testid={'helper'} />);
    expect(screen.getByTestId('helper')).toBeInTheDocument();
    expect(screen.getByText('Test helper text')).toBeInTheDocument();
  });

  it('should render error text when error is provided', () => {
    render(<Helper title={'Helper text'} error={'Error message'} />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('should apply correct error classes when error is present', () => {
    render(<Helper title={'Helper text'} error={'Error message'} data-testid={'helper'} />);
    const helperElement = screen.getByTestId('helper');
    expect(helperElement.className).toContain('helper--error');
  });

  it('should apply disabled class when disabled is true', () => {
    render(<Helper title={'Helper text'} disabled={true} data-testid={'helper'} />);
    const helperElement = screen.getByTestId('helper');
    expect(helperElement.className).toContain('helper--disabled');
  });

  it('should display title when disabled even if error is present', () => {
    render(
      <Helper
        title={'Helper text'}
        error={'Error message'}
        disabled={true}
        data-testid={'helper'}
      />,
    );
    expect(screen.getByText('Helper text')).toBeInTheDocument();
    expect(screen.queryByText('Error message')).not.toBeInTheDocument();
  });

  it('should display title when disabled without error', () => {
    render(<Helper title={'Helper text'} disabled={true} data-testid={'helper'} />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('should display error when error is present and not disabled', () => {
    render(<Helper title={'Helper text'} error={'Error message'} data-testid={'helper'} />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
  });

  it('should apply aria-label attribute', () => {
    render(<Helper title={'Test text'} aria-label={'Helper description'} />);
    expect(screen.getByLabelText('Helper description')).toBeInTheDocument();
  });

  it('should apply aria-describedby attribute', () => {
    render(
      <Helper title={'Test text'} aria-describedby={'field-description'} data-testid={'helper'} />,
    );
    const helperElement = screen.getByTestId('helper');
    expect(helperElement).toHaveAttribute('aria-describedby', 'field-description');
  });
});
