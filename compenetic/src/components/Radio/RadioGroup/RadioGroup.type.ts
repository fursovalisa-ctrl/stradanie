import { Option, type RadioProps } from '../Radio.type';

export interface RadioGroupProps<T> extends Omit<RadioProps<T>, 'value' | 'label' | 'checked'> {
  /**
   * Список radio кнопок
   */
  options: Array<Option<T>>;

  /**
   * Значение, которое представляет radio
   */
  value?: T;

  /**
   * Направление списка радио элементов
   */
  layout?: 'vertical' | 'horizontal';

  /**
   * Список radio кнопок
   */
  radioClassName?: RadioProps<T>['className'];
}
