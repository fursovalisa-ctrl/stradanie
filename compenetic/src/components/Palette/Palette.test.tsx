import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Palette from './Palette';
import userEvent from '@testing-library/user-event';

describe('Palette', () => {
  it('renders the palette title', () => {
    render(<Palette />);
    expect(screen.getByText('Color Palette')).toBeInTheDocument();
  });

  it('renders color groups', () => {
    render(<Palette />);

    expect(screen.getByText('pink')).toBeInTheDocument();
    expect(screen.getByText('red')).toBeInTheDocument();
    expect(screen.getByText('blue')).toBeInTheDocument();
    expect(screen.getByText('green')).toBeInTheDocument();
  });

  it('renders color cards with correct information', () => {
    render(<Palette />);

    const colorCards = screen.getAllByTitle(/Click to copy/);
    expect(colorCards.length).toBeGreaterThan(0);
  });

  it('copies color variable to clipboard when clicked', async () => {
    render(<Palette />);

    const colorCard = screen.getAllByTitle(/Click to copy/)[0];
    const user = userEvent.setup();
    const spyWriteText = vi.spyOn(navigator.clipboard, 'writeText');
    await user.click(colorCard);

    expect(spyWriteText).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    const customClass = 'custom-palette';
    const { container } = render(<Palette className={customClass} />);

    expect(container.firstChild).toHaveClass(customClass);
  });

  it('displays primary badge for primary colors', () => {
    render(<Palette />);

    const primaryBadges = screen.getAllByText('Primary');
    expect(primaryBadges.length).toBeGreaterThan(0);
  });

  it('renders preview mode with only primary colors', () => {
    render(<Palette preview />);

    expect(screen.getByText('Color Palette Preview')).toBeInTheDocument();

    const primaryBadges = screen.getAllByText('Primary');
    expect(primaryBadges.length).toBe(10);
  });

  it('renders full palette in default mode', () => {
    render(<Palette />);

    expect(screen.getByText('Color Palette')).toBeInTheDocument();

    const colorCards = screen.getAllByTitle(/Click to copy/);
    expect(colorCards.length).toBeGreaterThan(10);
  });
});
