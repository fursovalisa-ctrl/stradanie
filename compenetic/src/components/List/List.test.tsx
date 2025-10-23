import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { List } from './List';

describe('List Component', () => {
  it('renders without errors and displays items', () => {
    render(
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>,
    );

    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();

    const items = screen.getAllByTestId('list-item');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Item 1');
    expect(items[1]).toHaveTextContent('Item 2');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLUListElement>();
    render(
      <List ref={ref}>
        <List.Item>Item</List.Item>
      </List>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('UL');
  });
});

describe('Size variants', () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const;

  it('applies correct size classes', () => {
    const { rerender } = render(
      <List>
        <List.Item>Item</List.Item>
      </List>,
    );

    sizes.forEach((size) => {
      rerender(
        <List size={size}>
          <List.Item>Item</List.Item>
        </List>,
      );
      expect(screen.getByTestId('list').className).toContain(size);
    });
  });
});

describe('Variants style', () => {
  const variants = ['ordered', 'unordered'] as const;

  it('applies correct variant classes', () => {
    const { rerender } = render(
      <List>
        <List.Item>Item</List.Item>
      </List>,
    );

    const list = screen.getByTestId('list');

    variants.forEach((variant) => {
      rerender(
        <List variant={variant}>
          <List.Item>Item</List.Item>
        </List>,
      );

      expect(list.className).toContain(variant);
    });
  });

  it('passes start attribute for ordered lists', () => {
    render(
      <List variant={'ordered'} start={5}>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>,
    );

    const list = screen.getByTestId('list');
    expect(list).toHaveAttribute('start', '5');
  });
});

describe('ListItem Component', () => {
  it('renders children correctly', () => {
    render(
      <List>
        <List.Item>Test Item</List.Item>
      </List>,
    );

    const item = screen.getByTestId('list-item');
    expect(item).toBeInTheDocument();
    expect(item).toHaveTextContent('Test Item');
  });

  it('accepts custom className', () => {
    render(
      <List>
        <List.Item className={'custom-class'}>Item</List.Item>
      </List>,
    );

    const item = screen.getByTestId('list-item');
    expect(item).toHaveClass('custom-class');
  });
});
