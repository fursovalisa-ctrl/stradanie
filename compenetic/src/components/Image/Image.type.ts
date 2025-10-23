export type ImageStatus = 'loading' | 'loaded' | 'error';

export type ImageRenderMap = Record<'loader' | 'error' | 'image', React.ReactElement>;

export interface ImageProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    'loading' | 'alt' | 'onLoad' | 'onError' | 'width' | 'height'
  > {
  /**
   * Тип подгрузки картинки
   * @default 'lazy'
   */
  loading?: React.ImgHTMLAttributes<HTMLImageElement>['loading'];

  /**
   * Альтернативный текст для изображения
   * @default ''
   */
  alt?: React.ImgHTMLAttributes<HTMLImageElement>['alt'];

  /**
   * Показывает состояние загрузки
   * @default false
   */
  isLoading?: boolean;

  /**
   * Дополнительный CSS класс
   */
  className?: string;

  /**
   * Test ID для тестирования
   * @default 'image'
   */
  'data-testid'?: string;

  /**
   * Callback при успешной загрузке изображения
   */
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;

  /**
   * Callback при ошибке загрузки изображения
   */
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
