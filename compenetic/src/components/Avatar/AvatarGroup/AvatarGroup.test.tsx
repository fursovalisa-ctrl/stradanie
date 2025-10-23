import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AvatarGroup } from './AvatarGroup';
import type { AvatarGroupProps } from '../Avatar.type.ts';

describe('AvatarGroup Component', () => {
  const testAvatars: AvatarGroupProps['avatars'] = [
    { name: 'User 1', 'data-testid': 'avatar-item-1' },
    { name: 'User 2', 'data-testid': 'avatar-item-2' },
    { name: 'User 3', 'data-testid': 'avatar-item-3' },
  ];

  it('renders correct number of avatars', () => {
    render(<AvatarGroup avatars={testAvatars} data-testid={'avatar-group'} />);

    const avatars = screen.getAllByTestId(/^avatar-item/);
    expect(avatars).toHaveLength(testAvatars.length);
  });

  it('does not render when avatars array is empty', () => {
    const { container } = render(<AvatarGroup avatars={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders overflow counter when overflowCount is provided', () => {
    render(<AvatarGroup avatars={testAvatars} overflowCount={5} data-testid={'avatar-group'} />);

    expect(screen.getByText('+5')).toBeInTheDocument();
  });

  it('renders "99+" when overflowCount is 100 or more', () => {
    render(<AvatarGroup avatars={testAvatars} overflowCount={100} data-testid={'avatar-group'} />);

    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('calls overflowOnClick when overflow counter is clicked', () => {
    const handleClick = vi.fn();
    render(<AvatarGroup avatars={testAvatars} overflowCount={5} overflowOnClick={handleClick} />);

    fireEvent.click(screen.getByText('+5'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies correct size to all avatars', () => {
    render(<AvatarGroup avatars={testAvatars} size={56} data-testid={'group'} />);

    const avatars = screen.getAllByTestId(/^avatar-item/);
    avatars.forEach((avatar) => {
      expect(avatar).toHaveClass(/size-56/);
    });
  });

  it('applies correct shape to all avatars', () => {
    render(<AvatarGroup avatars={testAvatars} shape={'square'} data-testid={'avatar-group'} />);

    const avatars = screen.getAllByTestId(/^avatar-item/);
    avatars.forEach((avatar) => {
      expect(avatar).toHaveClass(/square/);
    });
  });

  it('renders SVG clipPath element', () => {
    render(<AvatarGroup avatars={testAvatars} />);
    expect(document.querySelector('clipPath')).toBeInTheDocument();
  });

  it('handles maximum avatars before overflow', () => {
    const manyAvatars = Array(10).fill({ name: 'User', 'data-testid': 'avatar-item' });
    render(<AvatarGroup avatars={manyAvatars} overflowCount={0} />);
    expect(screen.getAllByTestId(/^avatar-item/)).toHaveLength(10);
    expect(screen.queryByText(/\+/)).not.toBeInTheDocument();
  });

  it('renders nothing when avatars is undefined', () => {
    const { container } = render(<AvatarGroup avatars={undefined!} />);
    expect(container.firstChild).toBeNull();
  });
});
