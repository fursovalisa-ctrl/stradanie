import type { ChangeEvent, CSSProperties, ReactNode } from 'react';

export interface CheckboxIconProps {
  /** Имя чекбокса для идентификации */
  name: string;
  /** Размер иконки чекбокса */
  size: 'medium' | 'large';
  /** Состояние - выбран ли чекбокс */
  isChecked: boolean;
  /** Состояние - заблокирован ли чекбокс */
  isDisabled: boolean;
  /** Состояние - неопределенное состояние чекбокса */
  indeterminate: boolean;
}

export interface CheckboxProps {
  /**
   * Уникальное имя чекбокса, значение для id тэга input
   */
  name: string;

  /**
   * Текущее значение чекбокса
   * - true - отмеченный чекбокс
   * - false - не отмеченный чекбокс
   * Если не передан, используется внутреннее состояние
   */
  value?: boolean;

  /**
   * Размер чекбокса
   * @default 'medium'
   */
  size?: 'medium' | 'large';

  /**
   * Неопределенный вариант (показывает line-icon вместо check-icon)
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Загрузка (чекбокс становится неактивным)
   * @default false
   */
  loading?: boolean;

  /**
   * Сообщение об ошибке
   */
  error?: string;

  /**
   * Дизейбл чекбокса
   * @default false
   */
  disabled?: boolean;

  /**
   * Дополнительные CSS классы для контейнера
   */
  containerClassName?: string;

  /**
   * Дополнительные CSS классы для чекбокса
   */
  className?: string;

  /**
   * Дополнительные CSS стили для контейнера
   */
  containerStyle?: CSSProperties;

  /**
   * Дополнительные CSS стили для чекбокса
   */
  style?: CSSProperties;

  /**
   * Вложенный компонент справа от чекбокса (label)
   */
  children?: ReactNode;

  /**
   * Делать ли весь элемент (включая label) кликабельным
   * @default true
   */
  clickableLabel?: boolean;

  /**
   * Tab index для навигации
   */
  tabIndex?: number;

  /**
   * Обработчик изменения состояния чекбокса
   * @param checked - boolean, текущее состояние чекбокса
   * @param e - ChangeEvent<HTMLInputElement>, ивент нажатия на инпут
   * Если не передан, используется внутреннее состояние
   */
  onChange?: (checked: boolean, e?: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Идентификатор для тестирования
   */
  'data-testid'?: string;
}
