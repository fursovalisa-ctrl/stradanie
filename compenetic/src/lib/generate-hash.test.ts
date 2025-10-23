import { describe, expect, it } from 'vitest';
import { generateHash } from './generate-hash';

describe('hash function', () => {
  it('should hash strings consistently', () => {
    const str1 = 'hello world';
    const str2 = 'hello world';
    const str3 = 'hello world!';

    expect(generateHash(str1)).toBe(generateHash(str2));
    expect(generateHash(str1)).not.toBe(generateHash(str3));
  });

  it('should hash objects consistently', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = { a: 1, b: 3 };

    expect(generateHash(obj1)).toBe(generateHash(obj2));
    expect(generateHash(obj1)).not.toBe(generateHash(obj3));
  });

  it('should handle empty inputs', () => {
    expect(generateHash('')).toBe(5381);
    expect(generateHash({})).toBe(generateHash('{}'));
  });

  it('should produce different hashes for different data types', () => {
    const str = '123';
    const obj = { value: 123 };

    expect(generateHash(str)).not.toBe(generateHash(obj));
  });

  it('should handle complex nested objects', () => {
    const obj1 = { a: { b: { c: [1, 2, 3] } } };
    const obj2 = { a: { b: { c: [1, 2, 3] } } };
    const obj3 = { a: { b: { c: [1, 2, 4] } } };

    expect(generateHash(obj1)).toBe(generateHash(obj2));
    expect(generateHash(obj1)).not.toBe(generateHash(obj3));
  });
});
