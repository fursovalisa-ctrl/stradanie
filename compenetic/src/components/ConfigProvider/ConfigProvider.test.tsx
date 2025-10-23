import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ConfigProvider } from './ConfigProvider';
import enUS from '../../locale/en_US';

describe('ConfigProvider', () => {
  it('should render successfully', () => {
    render(<ConfigProvider locale={enUS}>Test content</ConfigProvider>);
    const element = screen.getByTestId('ConfigProvider-component');
    expect(element).toBeInTheDocument();
  });

  it('should have correct styles', () => {
    render(<ConfigProvider locale={enUS}>Test content</ConfigProvider>);
    const element = screen.getByTestId('ConfigProvider-component');
    expect(element).toBeVisible();
  });
});
