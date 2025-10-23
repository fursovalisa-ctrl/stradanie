import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Avatar } from './index.ts';
import { HomeIcon, placeholderSrcMap } from './assets';

describe('Avatar Component', () => {
  it('renders image mode when imgSrc is provided', () => {
    render(<Avatar imgSrc={'test.jpg'} imgAlt={'test'} data-testid={'avatar'} />);

    const img = screen.getByTestId('avatar-image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test.jpg');
    expect(img).toHaveAttribute('alt', 'test');
  });

  it('renders correct initials for single word name', () => {
    render(<Avatar name={'Username'} data-testid={'avatar'} />);
    expect(screen.getByTestId('avatar-name')).toHaveTextContent('U');
  });

  it('renders correct placeholder type', () => {
    render(<Avatar placeholderType={'female'} data-testid={'avatar'} />);
    const placeholder = screen.getByTestId('avatar-placeholder');
    expect(placeholder).toHaveAttribute('src', placeholderSrcMap['female']);
  });

  it('applies correct color scheme class', () => {
    const { container } = render(<Avatar colorScheme={'brand'} />);
    expect(container.firstChild).toHaveClass(/color-brand/);
  });

  it('generates color from name when no colorScheme provided', () => {
    const { container } = render(<Avatar name={'Unique Name'} />);
    expect(container.firstChild).toHaveClass(/color-/);
  });

  it('shows loading state', () => {
    const { container } = render(<Avatar isLoading />);
    expect(container.firstChild).toHaveClass(/loading/);
  });

  it('applies disabled styles', () => {
    const { container } = render(<Avatar isDisabled />);
    expect(container.firstChild).toHaveClass(/disabled/);
  });

  it('falls back to next mode when image fails to load', () => {
    render(<Avatar imgSrc={'invalid.jpg'} icon={HomeIcon} name={'Test'} data-testid={'avatar'} />);

    // Сначала пытаемся найти изображение (оно должно быть, но с ошибкой)
    const img = screen.getByTestId('avatar-image');
    expect(img).toBeInTheDocument();

    // Симулируем ошибку загрузки изображения
    fireEvent.error(img);

    // Должна отобразиться иконка (следующий по приоритету режим)
    expect(screen.getByTestId('avatar-icon')).toBeInTheDocument();
  });

  it('renders icon mode when icon is provided', () => {
    render(<Avatar icon={HomeIcon} data-testid={'avatar'} />);
    expect(screen.getByTestId('avatar-icon')).toBeInTheDocument();
  });

  it('renders name mode with initials when name is provided', () => {
    render(<Avatar name={'John Doe'} data-testid={'avatar'} />);
    const nameElement = screen.getByTestId('avatar-name');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent('JD');
  });

  it('renders placeholder mode when no props are provided', () => {
    render(<Avatar data-testid={'avatar'} />);
    expect(screen.getByTestId('avatar-placeholder')).toBeInTheDocument();
  });

  it('applies correct size class', () => {
    const { container } = render(<Avatar size={48} />);
    expect(container.firstChild).toHaveClass(/size-48/);
  });

  it('applies correct shape class', () => {
    const { container } = render(<Avatar shape={'square'} />);
    expect(container.firstChild).toHaveClass(/square/);
  });

  it('handles click events when not disabled', () => {
    const handleClick = vi.fn();
    render(<Avatar onClick={handleClick} data-testid={'avatar'} />);

    const avatar = screen.getByTestId('avatar');
    fireEvent.click(avatar);

    expect(handleClick).toHaveBeenCalled();
  });

  it('does not handle click events when disabled', () => {
    const handleClick = vi.fn();
    render(<Avatar onClick={handleClick} isDisabled data-testid={'avatar'} />);

    const avatar = screen.getByTestId('avatar');
    fireEvent.click(avatar);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
