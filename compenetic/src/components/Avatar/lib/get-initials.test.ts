import { getInitials } from './get-initials';

describe('@skillgrid/core/Avatar/get-initials', () => {
  it('should return initials', () => {
    expect(getInitials('John Mol')).toBe('JM');
    expect(getInitials('John')).toBe('JO');
    expect(getInitials('John Doe')).toBe('JD');
  });
});
