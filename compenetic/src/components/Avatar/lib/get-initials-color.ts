import type { AvatarProps } from '../Avatar.type';
import { generateHash } from '../../../lib/generate-hash';

type AvatarColorType = AvatarProps['colorScheme'];

const defaultColors: AvatarColorType[] = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'lightblue',
  'purple',
];

export function getInitialsColor(name: string, colors: AvatarColorType[] = defaultColors) {
  const hash = generateHash(name);
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}
