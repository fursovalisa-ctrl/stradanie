import { getInitialsColor } from './get-initials-color';

describe('@skillgrid/core/Avatar/get-initials', () => {
  it('should return color based on initials', () => {
    expect(getInitialsColor('John Mol')).toBe('orange');
    expect(getInitialsColor('John Been')).toBe('red');
    expect(getInitialsColor('John Doe')).toBe('red');
    expect(getInitialsColor('John Doe', ['red', 'blue'])).toBe('red');
  });
});
