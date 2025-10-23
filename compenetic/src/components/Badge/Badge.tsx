import type { CSSProperties, MouseEvent } from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames';
import type { BadgeProps } from './Badge.type';
import s from './Badge.module.css';
import { useBackgroundColor } from '../../hooks';

/**
 * Компонент Badge (Бейдж) - индикатор для отображения статуса, уведомлений или количественных показателей.
 * Может отображаться в виде текста, числа, иконки или точки. Поддерживает различные варианты стилизации и позиционирования.
 *
 * @example
 * // Бейдж с числом
 * <Badge label={5} colorScheme="red" position="top-right">
 *   <Avatar />
 * </Badge>
 *
 * // Бейдж-точка
 * <Badge size={8} colorScheme="green" position="top-right-inside">
 *   <Avatar />
 * </Badge>
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, outerRef) => {
  const {
    icon,
    children,
    variant = 'filled',
    label,
    colorScheme = 'red',
    size = 20,
    position = 'top-right',
    positionOffset = { x: 0, y: 0 },
    cutoutBackground,
    isDisabled,
    className,
    'data-testid': dataTestId = 'badge',
    ...rest
  } = props;

  const { onClick, onPointerDown } = rest;

  const { ref, bgColor } = useBackgroundColor();
  const computedCutoutBg = cutoutBackground || bgColor;
  const hasClickEventHandlers = !!onClick || !!onPointerDown;

  const isInteractive = !isDisabled && hasClickEventHandlers;

  const badgeContainerClasses = classNames(s.badge__container, s[`position-${position}`]);
  const badgeContentClasses = classNames(
    className,
    s.badge__content,
    s[`color-${colorScheme}`],
    s[`variant-${variant}`],
    {
      [s['icon']]: !!icon,
      [s['interactive']]: isInteractive,
      [s['disabled']]: isDisabled,
    },
  );

  const styles = {
    '--badge-height': `${size}px`,
    '--badge-offset-x': `${positionOffset.x}px`,
    '--badge-offset-y': `${positionOffset.y}px`,
    ...(computedCutoutBg && { '--badge-cutout-bg': computedCutoutBg }),
    ...(variant === 'transparent' && { '--badge-cutout-bg': 'transparent' }),
  } as CSSProperties;

  const badgeContent = icon?.({}) || label;

  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    if (isInteractive) onClick?.(event);
  };

  return (
    <div className={s.wrapper} ref={ref} data-testid={dataTestId + '-wrapper'}>
      {children}
      <span
        className={badgeContainerClasses}
        style={styles}
        data-testid={dataTestId + '-container'}
      >
        <span
          {...rest}
          onClick={handleClick}
          className={badgeContentClasses}
          data-testid={dataTestId + '-content'}
          ref={outerRef}
          aria-disabled={isDisabled}
        >
          {badgeContent}
        </span>
      </span>
    </div>
  );
});
