import { describe, expect, it } from 'vitest';
import { getOverflowCountText } from './get-overflow-count-text';

describe('Функция getOverflowCountText', () => {
  it('должна возвращать "+N" для чисел меньше MAX_OVERFLOW', () => {
    expect(getOverflowCountText(5)).toBe('+5');
    expect(getOverflowCountText(10)).toBe('+10');
    expect(getOverflowCountText(98)).toBe('+98');
  });

  it('должна возвращать "99+" для чисел равных MAX_OVERFLOW', () => {
    expect(getOverflowCountText(99)).toBe('99+');
  });

  it('должна возвращать "99+" для чисел больше MAX_OVERFLOW', () => {
    expect(getOverflowCountText(100)).toBe('99+');
    expect(getOverflowCountText(1000)).toBe('99+');
    expect(getOverflowCountText(9999)).toBe('99+');
  });

  it('должна корректно обрабатывать граничные значения', () => {
    expect(getOverflowCountText(0)).toBe('+0');
    expect(getOverflowCountText(1)).toBe('+1');
    expect(getOverflowCountText(98)).toBe('+98');
    expect(getOverflowCountText(99)).toBe('99+');
    expect(getOverflowCountText(100)).toBe('99+');
  });

  it('должна возвращать "+0" для нулевого значения', () => {
    expect(getOverflowCountText(0)).toBe('+0');
  });
});
