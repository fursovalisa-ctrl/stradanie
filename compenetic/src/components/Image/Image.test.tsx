import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Image } from './Image';

describe('Image', () => {
  it('shows loader initially and then renders the image on load', async () => {
    const onLoad = vi.fn();
    const { container } = render(
      <Image src={'./ImageExamplePicture.webp'} alt={'Test image'} onLoad={onLoad} />,
    );

    expect(screen.getByTestId('image-loader')).toBeInTheDocument();

    const img = container.querySelector('img[src="./ImageExamplePicture.webp"]');
    expect(img).toBeInTheDocument();

    // Симуляция успешной загрузки изображения
    fireEvent.load(img as Element);

    await waitFor(() => {
      expect(screen.queryByTestId('image-loader')).not.toBeInTheDocument();
      const visibleImg = screen.getByRole('img');
      expect(visibleImg).toBeInTheDocument();
      expect(visibleImg).toHaveAttribute('alt', 'Test image');
    });

    expect(onLoad).toHaveBeenCalled();
  });

  it('renders loading state when isLoading prop is true', () => {
    render(<Image src={'/test.jpg'} alt={'Test image'} isLoading={true} />);
    const loader = screen.getByTestId('image-loader');
    expect(loader).toBeInTheDocument();
  });

  it('shows fallback when isLoading is true but no src provided', () => {
    render(<Image alt={'Test image'} isLoading={true} />);
    const fallback = screen.getByTestId('image-fallback');
    expect(fallback).toBeInTheDocument();
  });

  it('handles error and shows fallback', async () => {
    const onError = vi.fn();
    const { container } = render(
      <Image src={'/invalid.jpg'} alt={'Test image'} onError={onError} />,
    );

    expect(screen.getByTestId('image-loader')).toBeInTheDocument();

    const img = container.querySelector('img[src="/invalid.jpg"]');
    expect(img).toBeInTheDocument();

    // Симуляция ошибки
    fireEvent.error(img as Element);

    await waitFor(() => {
      expect(screen.getByTestId('image-fallback')).toBeInTheDocument();
    });

    expect(screen.queryByTestId('image-loader')).not.toBeInTheDocument();

    expect(onError).toHaveBeenCalled();
  });

  it('shows fallback if src is not provided', () => {
    render(<Image alt={'No image'} />);
    expect(screen.getByTestId('image-fallback')).toBeInTheDocument();
  });

  it('applies custom className', async () => {
    const { container } = render(
      <Image src={'./ImageExamplePicture.webp'} alt={'Test image'} className={'custom-class'} />,
    );

    const img = container.querySelector('img[src="./ImageExamplePicture.webp"]');
    fireEvent.load(img as Element);

    await waitFor(() => {
      const visibleImg = screen.getByRole('img');
      expect(visibleImg).toHaveClass('custom-class');
    });
  });
});
