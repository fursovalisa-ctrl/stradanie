import { forwardRef } from 'react';
import type { ButtonProps } from './Button.type';
import { isAsButton, isAsLink } from './Button.type';
import s from './Button.module.css';
import { clsx } from 'clsx';

/**
 * ButtonContent component to render the internal content of the button
 */
const ButtonContent = ({
  isLoading,
  showBadge,
  badgeValue,
  badgeSize,
  icon,
  children,
  postfix,
  showSubcaption,
  subcaption,
  size,
}: {
  isLoading: boolean;
  showBadge: boolean;
  badgeValue?: number | string;
  badgeSize?: 'small' | 'extra-small' | 'medium';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  postfix?: string | React.ReactNode;
  showSubcaption: boolean;
  subcaption?: string | React.ReactNode;
  size: 'l' | 'm' | 's' | 'xs';
}) => {
  if (isLoading) {
    return <span className={s.loader} data-testid={'button-loader'} aria-hidden={'true'} />;
  }

  const isExtraSmallBadge = badgeSize === 'extra-small';
  const badgeNumericValue = parseInt(String(badgeValue), 10);
  const isCircularBadge =
    !isNaN(badgeNumericValue) && badgeNumericValue >= 0 && badgeNumericValue <= 9;

  return (
    <>
      {showBadge && (badgeValue || isExtraSmallBadge) && (
        <span
          data-testid={'button-badge'}
          className={clsx(
            s.badge,
            s[
              `badge${isExtraSmallBadge ? 'ExtraSmall' : badgeSize === 'medium' ? 'Medium' : 'Small'}`
            ],
            { [s.circular]: isCircularBadge && !isExtraSmallBadge },
          )}
        >
          {!isExtraSmallBadge && badgeValue}
        </span>
      )}

      {showSubcaption && size !== 's' && size !== 'xs' ? (
        <>
          <span data-testid={'button-label'} className={s.label}>
            {children}
          </span>
          <span data-testid={'button-subcaption'} className={s.subcaption}>
            {subcaption}
          </span>
        </>
      ) : children ? (
        <>
          <span data-testid={'button-label'} className={s.label}>
            {children}
          </span>
          <div data-testid={'button-right-group'} className={s.rightGroup}>
            {icon && (
              <span data-testid={'button-icon'} className={s.icon}>
                {icon}
              </span>
            )}
            {postfix && (
              <span data-testid={'button-postfix'} className={s.postfix}>
                {postfix}
              </span>
            )}
          </div>
        </>
      ) : (
        <span data-testid={'button-icon'} className={s.icon}>
          {icon}
        </span>
      )}
    </>
  );
};

/**
 * Button component for user interactions
 *
 * @component
 * @example
 * ```tsx
 * <Button mode="primary" size="medium" buttonStyle="accent">Click me</Button>
 * ```
 */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps & { style?: React.CSSProperties }
>((props, ref) => {
  const {
    mode = 'primary',
    size = 'm',
    buttonStyle = 'neutral',
    loading = false,
    disabled = false,
    showBadge = false,
    badgeSize = 'small',
    badgeValue,
    showSubcaption = false,
    subcaption,
    stretched = false,
    spaceBetween = false,
    icon,
    postfix,
    className,
    children,
  } = props;

  const isDisabled = disabled;
  const isLoading = loading;
  const isInteractive = !isDisabled && !isLoading;
  const isIconOnly = !!icon && !children;

  // Define class names based on props
  const buttonClassNames = clsx(
    s.button,
    s[size],
    s[mode],
    s[buttonStyle],
    {
      [s.disabled]: isDisabled,
      [s.loading]: isLoading,
      [s.stretched]: stretched,
      [s.spaceBetween]: spaceBetween && stretched,
      [s.withSubcaption]: showSubcaption && subcaption && size !== 's' && size !== 'xs',
      [s.iconOnly]: isIconOnly,
    },
    className,
  );

  const contentProps = {
    isLoading,
    showBadge,
    badgeValue,
    badgeSize,
    icon,
    children,
    postfix,
    showSubcaption,
    subcaption,
    size,
  };

  // Render as anchor element
  if (isAsLink(props)) {
    const {
      href,
      onClick,
      mode: _mode,
      size: _size,
      buttonStyle: _buttonStyle,
      loading: _loading,
      disabled: _disabled,
      showBadge: _showBadge,
      badgeSize: _badgeSize,
      badgeValue: _badgeValue,
      showSubcaption: _showSubcaption,
      subcaption: _subcaption,
      stretched: _stretched,
      spaceBetween: _spaceBetween,
      icon: _icon,
      postfix: _postfix,
      className: _className,
      tabIndex: _tabIndex,
      children: _children,
      'data-testid': dataTestId,
      style,
      ...anchorRest
    } = props;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (isInteractive && onClick) {
        onClick(event);
      }
    };

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={buttonClassNames}
        href={isInteractive ? href : undefined}
        tabIndex={props.tabIndex}
        onClick={handleClick}
        data-testid={dataTestId}
        aria-disabled={isDisabled || isLoading}
        style={style}
        {...anchorRest}
      >
        <ButtonContent {...contentProps} />
      </a>
    );
  }

  // Render as native button element
  if (isAsButton(props)) {
    const {
      type = 'button',
      onClick,
      mode: _mode,
      size: _size,
      buttonStyle: _buttonStyle,
      loading: _loading,
      disabled: _disabled,
      showBadge: _showBadge,
      badgeSize: _badgeSize,
      badgeValue: _badgeValue,
      showSubcaption: _showSubcaption,
      subcaption: _subcaption,
      stretched: _stretched,
      spaceBetween: _spaceBetween,
      icon: _icon,
      postfix: _postfix,
      className: _className,
      tabIndex: _tabIndex,
      children: _children,
      'data-testid': dataTestId,
      style,
      ...buttonRest
    } = props;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isInteractive && onClick) {
        onClick(event);
      }
    };

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={buttonClassNames}
        disabled={isDisabled}
        tabIndex={props.tabIndex}
        onClick={handleClick}
        data-testid={dataTestId}
        aria-disabled={isDisabled || isLoading}
        style={style}
        {...buttonRest}
      >
        <ButtonContent {...contentProps} />
      </button>
    );
  }

  // Fallback (should not happen)
  return null;
});
