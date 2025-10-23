import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Button } from './Button';

// No need to mock i18n since we're not using it in the new implementation

describe('Button', () => {
  it('should render without errors', () => {
    render(<Button>Click me</Button>);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  describe('Content rendering', () => {
    it('should render children correctly', () => {
      render(<Button>Children Text</Button>);
      expect(screen.getByText('Children Text')).toBeInTheDocument();
    });

    it('should render icon and postfix correctly', () => {
      const icon = <span data-testid={'test-icon'}>Icon</span>;
      const postfix = <span data-testid={'test-postfix'}>→</span>;

      render(
        <Button icon={icon} postfix={postfix}>
          Test
        </Button>,
      );

      expect(screen.getByTestId('button-icon')).toBeInTheDocument();
      expect(screen.getByTestId('button-postfix')).toBeInTheDocument();
      expect(screen.getByTestId('button-right-group')).toBeInTheDocument();
    });

    it('should handle icon-only button correctly', () => {
      const icon = <span>Icon</span>;
      render(<Button icon={icon} />);

      const button = screen.getByRole('button');
      expect(button.className).toContain('iconOnly');
      expect(screen.queryByTestId('button-right-group')).not.toBeInTheDocument();
    });
  });

  describe('Size variants', () => {
    it('should apply correct size classes', () => {
      const sizes = ['xs', 's', 'm', 'l'] as const;
      const { rerender } = render(<Button data-testid={'button'}>Size Test</Button>);

      sizes.forEach((size) => {
        rerender(
          <Button size={size} data-testid={'button'}>
            Size Test
          </Button>,
        );
        expect(screen.getByTestId('button').className).toContain(size);
      });
    });
  });

  describe('Mode variants', () => {
    it('should apply correct mode classes', () => {
      const modes = ['primary', 'secondary', 'tertiary'] as const;
      const { rerender } = render(<Button data-testid={'button'}>Mode Test</Button>);

      modes.forEach((mode) => {
        rerender(
          <Button mode={mode} data-testid={'button'}>
            Mode Test
          </Button>,
        );
        expect(screen.getByTestId('button').className).toContain(mode);
      });
    });
  });

  describe('Style variants', () => {
    it('should apply correct style classes', () => {
      const styles = ['neutral', 'accent', 'positive', 'negative', 'special', 'contrast'] as const;
      const { rerender } = render(<Button data-testid={'button'}>Style Test</Button>);

      styles.forEach((style) => {
        rerender(
          <Button buttonStyle={style} data-testid={'button'}>
            Style Test
          </Button>,
        );
        expect(screen.getByTestId('button').className).toContain(style);
      });
    });
  });

  describe('Layout options', () => {
    it('should handle stretched and spaceBetween props', () => {
      const { rerender } = render(
        <Button stretched data-testid={'button'}>
          Layout Test
        </Button>,
      );
      expect(screen.getByTestId('button').className).toContain('stretched');

      rerender(
        <Button stretched spaceBetween data-testid={'button'}>
          Layout Test
        </Button>,
      );
      expect(screen.getByTestId('button').className).toContain('spaceBetween');

      rerender(
        <Button spaceBetween={true} stretched={false} data-testid={'button'}>
          Layout Test
        </Button>,
      );
      expect(screen.getByTestId('button').className).not.toContain('spaceBetween');
    });
  });

  describe('State handling', () => {
    it('should handle disabled state correctly', () => {
      render(
        <Button disabled data-testid={'button'}>
          Disabled Button
        </Button>,
      );
      const button = screen.getByTestId('button');

      expect(button).toBeDisabled();
      expect(button.className).toContain('disabled');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should handle loading state correctly', () => {
      render(
        <Button loading data-testid={'button'}>
          Loading Button
        </Button>,
      );
      const button = screen.getByTestId('button');

      expect(button).not.toBeDisabled();
      expect(button.className).toContain('loading');
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(screen.getByTestId('button-loader')).toBeInTheDocument();
    });

    it('should handle click events based on state', () => {
      const onClick = vi.fn();
      const { rerender } = render(
        <Button onClick={onClick} data-testid={'button'}>
          Click Test
        </Button>,
      );

      // В обычном состоянии клик работает
      fireEvent.click(screen.getByTestId('button'));
      expect(onClick).toHaveBeenCalledTimes(1);

      // В состоянии disabled клик не работает
      rerender(
        <Button onClick={onClick} disabled data-testid={'button'}>
          Click Test
        </Button>,
      );
      fireEvent.click(screen.getByTestId('button'));
      expect(onClick).toHaveBeenCalledTimes(1);

      // В состоянии loading клик не работает
      rerender(
        <Button onClick={onClick} loading data-testid={'button'}>
          Click Test
        </Button>,
      );
      fireEvent.click(screen.getByTestId('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Anchor rendering', () => {
    it('should render as an anchor when as="a"', () => {
      render(
        <Button as={'a'} href={'https://example.com'} data-testid={'button'}>
          Link Button
        </Button>,
      );

      const anchor = screen.getByTestId('button');
      expect(anchor.tagName).toBe('A');
      expect(anchor).toHaveAttribute('href', 'https://example.com');
    });

    it('should not have href when disabled or loading', () => {
      const { rerender } = render(
        <Button as={'a'} href={'https://example.com'} disabled data-testid={'button'}>
          Link Button
        </Button>,
      );
      expect(screen.getByTestId('button')).not.toHaveAttribute('href');

      rerender(
        <Button as={'a'} href={'https://example.com'} loading data-testid={'button'}>
          Link Button
        </Button>,
      );
      expect(screen.getByTestId('button')).not.toHaveAttribute('href');
    });
  });

  describe('Badge handling', () => {
    it('should display badge when showBadge is true', () => {
      render(
        <Button showBadge badgeValue={'5'} badgeSize={'small'} data-testid={'button'}>
          Badge Button
        </Button>,
      );

      const badge = screen.getByTestId('button-badge');
      expect(badge).toBeInTheDocument();
      expect(badge.textContent).toBe('5');
      expect(badge.className).toContain('badgeSmall');
    });

    it('should display extra-small badge as a dot without text', () => {
      render(
        <Button showBadge badgeValue={'3'} badgeSize={'extra-small'} data-testid={'button'}>
          Badge Dot Button
        </Button>,
      );

      const badge = screen.getByTestId('button-badge');
      expect(badge).toBeInTheDocument();
      expect(badge.textContent).toBe('');
      expect(badge.className).toContain('badgeExtraSmall');
    });

    it('should handle circular badge for single digit numbers', () => {
      render(
        <Button showBadge badgeValue={'7'} badgeSize={'small'} data-testid={'button'}>
          Circular Badge Button
        </Button>,
      );

      const badge = screen.getByTestId('button-badge');
      expect(badge.className).toContain('circular');
    });
  });

  describe('Subcaption handling', () => {
    it('should display subcaption when showSubcaption is true and size is not small', () => {
      render(
        <Button showSubcaption subcaption={'Subcaption text'} size={'m'} data-testid={'button'}>
          Caption Button
        </Button>,
      );

      expect(screen.getByTestId('button-subcaption')).toBeInTheDocument();
      expect(screen.getByTestId('button-subcaption').textContent).toBe('Subcaption text');
      expect(screen.getByTestId('button').className).toContain('withSubcaption');
    });

    it('should not display subcaption when size is small', () => {
      render(
        <Button showSubcaption subcaption={'Hidden Subcaption'} size={'s'} data-testid={'button'}>
          Small Button
        </Button>,
      );

      expect(screen.queryByTestId('button-subcaption')).not.toBeInTheDocument();
      expect(screen.getByTestId('button-label')).toBeInTheDocument();
    });

    it('should hide icon and postfix when subcaption is shown', () => {
      const icon = <span>Icon</span>;
      const postfix = <span>→</span>;

      render(
        <Button
          icon={icon}
          postfix={postfix}
          showSubcaption
          subcaption={'Subcaption'}
          data-testid={'button'}
        >
          Content Button
        </Button>,
      );

      expect(screen.queryByTestId('button-icon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('button-postfix')).not.toBeInTheDocument();
      expect(screen.queryByTestId('button-right-group')).not.toBeInTheDocument();
      expect(screen.getByTestId('button-subcaption')).toBeInTheDocument();
    });
  });
});
