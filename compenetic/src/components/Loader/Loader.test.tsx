import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Loader } from './Loader';

describe('Loader', () => {
  it('should render as spinner when no children', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should render as container when has children', () => {
    render(
      <Loader data-testid={'container'}>
        <button>Test Button</button>
      </Loader>,
    );
    expect(screen.getByTestId('container')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render container with loading spinner', () => {
    render(
      <Loader loading={true} data-testid={'container'}>
        <button>Test Button</button>
      </Loader>,
    );
    expect(screen.getByTestId('container')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('container-spinner')).toBeInTheDocument();
  });

  describe('Size variants', () => {
    it('should apply correct size classes', () => {
      const sizes = [16, 24, 48, 64, 96] as const;
      const { rerender } = render(<Loader data-testid={'loader'} />);

      sizes.forEach((size) => {
        rerender(<Loader size={size} data-testid={'loader'} />);
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();

        const className = loader.getAttribute('class') || '';
        expect(className).toContain(`size-${size}`);
      });
    });
  });

  describe('variants', () => {
    it('should apply correct variant classes', () => {
      const variants = [
        'accent',
        'neutral',
        'positive',
        'negative',
        'contrast',
        'gray',
        'special',
      ] as const;
      const { rerender } = render(<Loader data-testid={'loader'} />);

      variants.forEach((variant) => {
        rerender(<Loader variant={variant} data-testid={'loader'} />);
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();

        const className = loader.getAttribute('class') || '';
        expect(className).toContain(variant);
      });
    });

    it('should default to accent variant', () => {
      render(<Loader data-testid={'loader'} />);
      const loader = screen.getByTestId('loader');
      const className = loader.getAttribute('class') || '';
      expect(className).toContain('accent');
    });

    it('should pass variant to container spinner', () => {
      render(
        <Loader loading={true} variant={'neutral'} data-testid={'container'}>
          <button>Test Button</button>
        </Loader>,
      );
      const spinner = screen.getByTestId('container-spinner');
      const className = spinner.getAttribute('class') || '';
      expect(className).toContain('neutral');
    });
  });
});
