import type { TagProps } from './Tag.type';
import s from './Tag.module.css';
import t from '../../styles/typography.module.css';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

/**
 * Tag component
 *
 * @component
 * @example
 * ```tsx
 * <Tag />
 * ```
 *
 * @param props - The component props
 * @returns A React component
 */
export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    className,
    children,
    componentStyle = 'neutral',
    size = 'medium',
    disabled = false,
    showLabel = !!children,
    slotStart,
    slotEnd,
    slotStartWrapperProps = {},
    slotEndWrapperProps = {},
    'data-testid': dataTestId,
  } = props;

  const { className: slotStartClassName, ...restIconStartProps } = slotStartWrapperProps;
  const { className: slotEndClassName, ...restIconEndProps } = slotEndWrapperProps;

  return (
    <div
      className={clsx(
        s.tag,
        s[size],
        s[componentStyle],
        {
          [s.disabled]: disabled,
          [t['typography-label-3-regular']]: size === 'medium',
          [t['typography-subtitle-1-semibold']]: size === 'large',
        },
        className,
      )}
      data-testid={dataTestId || 'tag-component'}
      ref={ref}
    >
      {slotStart && (
        <span className={clsx([s.iconWrapper, slotStartClassName])} {...restIconStartProps}>
          {slotStart}
        </span>
      )}
      {showLabel && <span className={clsx([s.label])}>{children}</span>}
      {slotEnd && (
        <span className={clsx([s.iconWrapper, slotEndClassName])} {...restIconEndProps}>
          {slotEnd}
        </span>
      )}
    </div>
  );
});
