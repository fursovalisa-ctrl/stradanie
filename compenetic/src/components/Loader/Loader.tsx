import { forwardRef } from 'react';
import type { LoaderProps, LoaderSpinnerProps, LoaderContainerProps } from './Loader.type';
import styles from './Loader.module.css';
import classNames from 'classnames';

/**
 * Внутренний компонент спиннера лоадера
 */
const LoaderSpinner = forwardRef<SVGSVGElement, LoaderSpinnerProps>(
  (
    {
      size = 24,
      variant = 'accent',
      className,
      'data-testid': dataTestId = 'loader',
      style,
      ...rest
    },
    ref,
  ) => {
    const loaderClassNames = classNames(
      styles.loader,
      styles[variant],
      styles[`size-${size}`],
      className,
    );

    return (
      <svg
        ref={ref}
        className={loaderClassNames}
        fill={'none'}
        viewBox={'0 0 16 16'}
        xmlns={'http://www.w3.org/2000/svg'}
        data-testid={dataTestId}
        style={style}
        {...rest}
      >
        <path
          d={'M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2'}
          stroke={'currentColor'}
          strokeLinecap={'round'}
          strokeWidth={'1.33333'}
        />
      </svg>
    );
  },
);

/**
 * Внутренний компонент контейнера лоадера
 */
const LoaderContainer = forwardRef<HTMLDivElement, LoaderContainerProps>((props, ref) => {
  const {
    loading = false,
    size = 24,
    variant = 'accent',
    children,
    className,
    style,
    'data-testid': dataTestId,
    ...rest
  } = props;

  const containerClassNames = classNames(styles.container, className);

  return (
    <div ref={ref} className={containerClassNames} style={style} data-testid={dataTestId} {...rest}>
      {children}
      {loading && (
        <div className={styles.overlay}>
          <LoaderSpinner size={size} variant={variant} data-testid={`${dataTestId}-spinner`} />
        </div>
      )}
    </div>
  );
});

/**
 * Компонент лоадера
 * * Если есть children - работает как контейнер с оверлеем
 * * Если нет children - работает как спиннер
 *
 * @component
 * @example
 * * Как спиннер
 * <Loader size={48} variant="neutral" />
 *
 * * Как контейнер
 * <Loader loading={isLoading} variant="neutral">
 *   <button>Click me</button>
 * </Loader>
 * ```
 */
const Loader = forwardRef<HTMLDivElement | SVGSVGElement, LoaderProps>((props, ref) => {
  if (props.children) {
    // Как контейнер
    return (
      <LoaderContainer
        ref={ref as React.Ref<HTMLDivElement>}
        {...(props as LoaderContainerProps)}
      />
    );
  } else {
    // Как спиннер
    return (
      <LoaderSpinner ref={ref as React.Ref<SVGSVGElement>} {...(props as LoaderSpinnerProps)} />
    );
  }
});

export { Loader };
