import { describe, expect, it } from 'vitest';
import { createRoundedCutoutRectanglePath } from './create-rounded-cutout-rectangle-path';

describe('createRoundedCutoutRectanglePath', () => {
  it('should handle zero radius (sharp corners)', () => {
    const result = createRoundedCutoutRectanglePath(200, 100, 50, 25, 100, 50, 0);
    expect(result).toContain('A0,0');
  });

  it('should limit radius to half of smallest inner dimension', () => {
    // innerWidth=20, innerHeight=10 → max radius=5
    const result = createRoundedCutoutRectanglePath(200, 100, 50, 25, 20, 10, 10);
    expect(result).toContain('A5,5');
  });

  it('should handle full circle when radius equals half of inner dimensions', () => {
    const result = createRoundedCutoutRectanglePath(200, 200, 50, 50, 100, 100, 50);
    expect(result).toContain('A50,50');
  });

  it('should create correct path when inner rectangle is at edges', () => {
    const result = createRoundedCutoutRectanglePath(200, 100, 0, 0, 100, 50, 10);
    expect(result).toContain('M10,0');
  });

  it('should create correct path when inner rectangle is same size as outer', () => {
    const result = createRoundedCutoutRectanglePath(200, 100, 0, 0, 200, 100, 10);
    expect(result).toContain('A10,10');
  });

  it('should handle different x/y radius if needed (though current implementation uses same)', () => {
    // Note: Current implementation uses same radius for x/y
    const result = createRoundedCutoutRectanglePath(200, 100, 50, 25, 100, 50, 10);
    expect(result).toContain('A10,10');
  });

  it('should create valid SVG path syntax', () => {
    const result = createRoundedCutoutRectanglePath(200, 100, 50, 25, 100, 50, 10);
    // Basic checks for valid SVG path syntax
    expect(result).toMatch(/^M[\d.,]+/); // Starts with move command
    expect(result).toMatch(/[LHVA][\d.,]+/g); // Contains line and arc commands
  });
});
