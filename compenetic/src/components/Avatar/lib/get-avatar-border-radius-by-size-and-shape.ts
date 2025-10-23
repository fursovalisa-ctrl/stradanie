import type { AvatarProps } from '../Avatar.type';

function getAvatarBorderRadiusBySizeAndShape(size: number, shape: AvatarProps['shape']): number {
  if (shape === 'circle') return size / 2;

  // Радиусы для квадратной формы в зависимости от размера (из Avatar.module.css)
  if (size === 24 || size === 208) return 8;
  if (size === 32 || size === 40 || size === 48) return 12;
  if (size === 56) return 16;
  if (size === 84 || size === 96) return 24;
  return 12; // значение по умолчанию
}

export { getAvatarBorderRadiusBySizeAndShape };
