export type TValue = string | number;

export interface Option<T> {
  /**
   * Значение вариант
   */
  value: T;

  /**
   * Лейбл вариант
   */
  label?: React.ReactNode;

  /**
   * Активность компонента
   * @default false
   */
  disabled?: boolean;
}

export interface RadioProps<T> {
  /**
   * Значение, которое представляет radio
   */
  value: T;

  /**
   * Уникальное имя для компонента
   */
  name: string;

  /**
   * Выбрано ли значение
   * - true - отмеченный
   * - false - не отмеченный
   * @default false
   */
  checked?: boolean;

  /**
   * Размер radio
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Вложенный компонент справа
   */
  label?: React.ReactNode;

  /**
   * Загрузка (компонент становится неактивным)
   * @default false
   */
  loading?: boolean;

  /**
   * Сообщение об ошибке
   */
  error?: string;

  /**
   * Активность компонента
   * @default false
   */
  disabled?: boolean;

  /**
   * Дополнительные CSS классы для контейнера
   */
  containerClassName?: string;

  /**
   * Дополнительные CSS классы для radio
   */
  className?: string;

  /**
   * Делает кликабельным все простарнство компонента или только radio
   * @default all
   */
  clickable?: 'all' | 'control';

  /**
   * Tab index для навигации
   */
  tabIndex?: number;

  /**
   * Формат отображения
   */
  mode?: 'card' | 'default';

  /**
   * Обработчик изменения состояния
   * @param value - Выбранное значение
   * @param e - ChangeEvent<HTMLInputElement>, ивент нажатия на инпут
   */
  onChange?: (value: T, e?: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Идентификатор для тестирования
   */
  ['data-testid']?: string;
}
