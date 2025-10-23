import { forwardRef, useState, useEffect, useCallback, Fragment } from 'react';
import type { ImageProps, ImageStatus, ImageRenderMap } from './Image.type';
import styles from './Image.module.css';
import classNames from 'classnames';
import { Loader } from '../Loader';
import { PlaceholderImageIcon } from './assets/PlaceholderImageIcon';

/**
 * Image компонент для отображения изображений
 *
 * @component
 * @example
 * ```tsx
 * <Image src="/path/to/image.jpg" alt="Description" />
 * ```
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    alt = '',
    loading = 'lazy',
    src,
    isLoading = false,
    className,
    'data-testid': dataTestId = 'image',
    onError,
    onLoad,
    ...container
  } = props;

  const [imageStatus, setImageStatus] = useState<ImageStatus>('loading');

  const showError = imageStatus === 'error';
  const showLoader = (isLoading || imageStatus === 'loading') && !showError;
  const showImage = imageStatus === 'loaded' && !isLoading;

  const imageClassNames = classNames(
    styles.image,
    {
      [styles.loading]: showLoader,
    },
    className,
  );

  /**
   * Обработчик успешной загрузки изображения
   */
  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setImageStatus('loaded');
      onLoad?.(e);
    },
    [onLoad],
  );

  /**
   * Обработчик ошибки загрузки изображения
   */
  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setImageStatus('error');
      onError?.(e);
    },
    [onError],
  );

  /**
   * Хэшмапа для отрисовки состояний компонента
   */
  const renderMap: ImageRenderMap = {
    loader: (
      <Fragment>
        <Loader size={48} variant={'special'} data-testid={`${dataTestId}-loader`} />
        <img
          alt={alt}
          src={src}
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: 'none' }}
        />
      </Fragment>
    ),
    error: <PlaceholderImageIcon data-testid={`${dataTestId}-fallback`} />,
    image: (
      <img
        ref={ref}
        alt={alt}
        data-testid={dataTestId}
        loading={loading}
        src={src}
        className={imageClassNames}
      />
    ),
  };

  useEffect(() => {
    if (!src) {
      setImageStatus('error');
      return;
    }
    setImageStatus('loading');
  }, [src]);

  return (
    <div className={styles.container} data-testid={`${dataTestId}-container`} {...container}>
      {showLoader && renderMap.loader}
      {showError && renderMap.error}
      {showImage && renderMap.image}
    </div>
  );
});
