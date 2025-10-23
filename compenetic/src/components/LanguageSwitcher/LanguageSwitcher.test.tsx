import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { LanguageSwitcher } from './LanguageSwitcher';

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { language: string }) => {
      if (key === 'languageSwitcher.switchTo') {
        return `Switch to ${options?.language}`;
      }
      return key;
    },
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
  }),
}));

describe('LanguageSwitcher', () => {
  it('should render without errors', () => {
    render(<LanguageSwitcher />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  it('should have correct class name', () => {
    const className = 'test-class';
    render(<LanguageSwitcher className={className} />);
    const element = screen.getByRole('button');
    expect(element).toHaveClass(className);
  });

  it('should show correct flag emoji based on language', () => {
    render(<LanguageSwitcher />);
    const element = screen.getByRole('button');
    expect(element).toHaveTextContent('🇷🇺');
  });

  it('should have correct title attribute', () => {
    render(<LanguageSwitcher />);
    const element = screen.getByRole('button');
    expect(element).toHaveAttribute('title', 'Switch to Russian');
  });
});
