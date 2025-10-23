import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Tag } from './index.ts';
import { userEvent } from '@testing-library/user-event';

const testSvg = (
  <svg data-testid={'test-icon'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
    <circle />
  </svg>
);

describe('Tag component test', () => {
  it('renders', () => {
    render(<Tag />);
    expect(screen.getByTestId('tag-component')).toBeInTheDocument();
  });

  it('renders with passed children', () => {
    render(<Tag>test label</Tag>);
    expect(screen.getByText('test label')).toBeInTheDocument();
  });

  it('hides label with showLabel = false', () => {
    render(<Tag showLabel={false}>test label</Tag>);
    expect(screen.queryByText('test label')).toBeNull();
  });

  it('renders slotStart', () => {
    render(<Tag slotStart={testSvg} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders slotEnd', () => {
    render(<Tag slotEnd={testSvg} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('passes props to slotStart wrapper', async () => {
    const onClick = vi.fn();
    render(
      <Tag
        slotStart={testSvg}
        slotStartWrapperProps={{
          className: 'test-className',
          'data-testid': 'icon-wrapper',
          onClick,
        }}
      />,
    );
    expect(screen.getByTestId('icon-wrapper')).toHaveClass('test-className');
    expect(onClick).toBeCalledTimes(0);
    await userEvent.click(screen.getByTestId('test-icon'));
    expect(onClick).toBeCalledTimes(1);
  });

  it('passes props to slotEnd wrapper', async () => {
    const onClick = vi.fn();
    render(
      <Tag
        slotEnd={testSvg}
        slotEndWrapperProps={{
          className: 'test-className',
          'data-testid': 'icon-wrapper',
          onClick,
        }}
      />,
    );
    expect(screen.getByTestId('icon-wrapper')).toHaveClass('test-className');
    expect(onClick).toBeCalledTimes(0);
    await userEvent.click(screen.getByTestId('test-icon'));
    expect(onClick).toBeCalledTimes(1);
  });
});
