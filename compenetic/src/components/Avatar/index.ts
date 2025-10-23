import { AvatarGroup } from './AvatarGroup/AvatarGroup';
import { AvatarComponent } from './Avatar';

export type { AvatarProps, AvatarGroupProps } from './Avatar.type';

const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
});

export { Avatar };
