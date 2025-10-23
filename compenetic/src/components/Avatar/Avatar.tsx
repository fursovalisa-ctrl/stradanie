import type { FC, MouseEvent} from 'react';
import { forwardRef, useState } from 'react';

import s from './Avatar.module.css';
import classNames from 'classnames';

import { getInitials, getInitialsColor } from './lib';
import type { AvatarModeType, AvatarProps } from './Avatar.type';
import { placeholderSrcMap } from './assets';

/**
 * Компонент для отображения аватара пользователя в виде изображения, инициалов, иконки или плейсхолдера.
 * @returns {ReactElement} Аватар с выбранным типом отображения.
 */
const AvatarComponent = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    style,
    size = 40,
    isLoading = false,
    isDisabled = false,
    shape = 'circle',
    variant = 'light',
    placeholderType = 'neutral',
    name = '',
    imgSrc,
    imgAlt = '',
    icon,
    imgProps,
    colorScheme,
    'data-testid': dataTestId,
    ...rest
  } = props;
  const { onClick, onPointerDown } = rest;
  const hasClickEventHandlers = !!onClick || !!onPointerDown;
  const isInteractive = !isDisabled && !isLoading && hasClickEventHandlers;

  const [imgError, setImgError] = useState(!imgSrc);

  const mode = ((): AvatarModeType => {
    if (imgSrc && !imgError) return 'image';
    if (icon) return 'icon';
    if (name) return 'name';
    return 'placeholder';
  })();

  const resolvedColor =
    mode === 'name' ? colorScheme || getInitialsColor(name) : colorScheme || 'gray';

  const avatarClassNames = classNames(
    s.avatar,
    s[shape],
    s[`size-${size}`],
    s[`variant-${variant}`],
    s[`color-${resolvedColor}`],
    {
      [s.disabled]: isDisabled,
      [s.loading]: isLoading,
      [s.clickable]: isInteractive,
    },
  );

  const renderContentByMode: Record<AvatarModeType, FC<null>> = {
    icon: () => (
      <span data-testid={'avatar-icon'} title={imgAlt} role={'img'} className={classNames(s.icon)}>
        {icon?.({})}
      </span>
    ),
    name: () => (
      <span
        role={'textbox'}
        data-testid={'avatar-name'}
        className={classNames(s.name)}
        title={imgAlt}
      >
        {getInitials(name)}
      </span>
    ),
    placeholder: () => (
      <img
        {...imgProps}
        data-testid={'avatar-placeholder'}
        className={s.image}
        src={placeholderSrcMap[placeholderType]}
        alt={imgAlt}
      />
    ),
    image: () => (
      <img
        data-testid={'avatar-image'}
        {...imgProps}
        className={s.image}
        src={imgSrc}
        alt={imgAlt}
        onLoad={() => setImgError(false)}
        onError={(event) => {
          setImgError(true);
          imgProps?.onError?.(event);
        }}
      />
    ),
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (isInteractive) onClick?.(e);
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={avatarClassNames}
      style={style}
      data-testid={dataTestId}
      aria-disabled={isDisabled || isLoading}
    >
      {renderContentByMode[mode](null)}
    </div>
  );
});

export { AvatarComponent };
