import { HTMLAttributes } from 'react';

/**
 * Тип компонента для Input
 */
export type InputComponent = 'input' | 'textarea';

/**
 * Размер компонента Input
 */
export type InputSize = 'small' | 'medium' | 'large';

/**
 * Размер компонента InputWrapper
 */
export type InputWrapperSize = 'small' | 'medium' | 'large';

/**
 * Пропсы для компонента Input
 */
export interface InputProps {
  /** Тип компонента (input или textarea) */
  component?: InputComponent;
  /** Размер компонента */
  size?: InputSize;
  /** Значение поля */
  value?: string;
  /** Плейсхолдер */
  placeholder?: string;
  /** Отключенное состояние */
  disabled?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
  /** Обработчик фокуса */
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Обработчик потери фокуса */
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Обработчик изменения */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Обработчик нажатия клавиши */
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /** Максимальная длина */
  maxLength?: number;
  /** CSS классы */
  className?: string;
  /** Инлайн стили */
  style?: React.CSSProperties;
  /** Включить обрезку текста */
  truncate?: boolean;
  /** Показывать ли плавающий лейбл */
  shouldShowFloatingLabelClass?: boolean;
  /** Состояние ошибки для accessibility */
  'aria-invalid'?: boolean;
  /** ID элемента с сообщением об ошибке для accessibility */
  'aria-errormessage'?: string;
  /** ID элемента */
  id?: string;
  /** Тип изменения размера для textarea */
  resize?: 'fill' | 'hug' | 'fixed';
  /** Показывать ли grip для изменения размера */
  showGrip?: boolean;
  /** Дополнительные пропсы для input */
  [key: string]: unknown;
}

/**
 * Пропсы для компонента InputWrapper
 */
export interface InputWrapperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'prefix'> {
  /** Дочерние элементы (Input компонент) */
  children?: React.ReactNode;
  /** Размер компонента */
  size?: InputWrapperSize;
  /** Состояние ошибки */
  error?: boolean;
  /** Отключенное состояние */
  disabled?: boolean;
  /** Состояние загрузки */
  loading?: boolean;

  /** CSS классы */
  className?: string;
  /** Пропсы для обертки */
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  /** Стили для обертки */
  wrapperStyles?: React.CSSProperties;
  /** Стили для плавающей метки */
  floatingLabelStyles?: React.CSSProperties;
  /** Стили для префикса */
  prefixStyles?: React.CSSProperties;
  /** Стили для суффикса */
  suffixStyles?: React.CSSProperties;
  /** Пропсы для метки */
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  /** Пропсы для вспомогательного текста */
  helperProps?: HTMLAttributes<HTMLDivElement>;
  /** Показывать ли счетчик символов */
  showLimit?: boolean;
  /** Максимальная длина */
  maxLength?: number;
  /** Подсказка внутри поля ввода */
  hint?: string;
  /** Показывать ли подсказку */
  showHint?: boolean;
  /** Показывать подсказку когда значение пустое */
  showHintOnEmpty?: boolean;
  /** Префикс (иконка слева) */
  prefix?: React.ReactNode;
  /** Суффикс (иконка справа) */
  suffix?: React.ReactNode;
  /** Плейсхолдер для поля */
  placeholder?: string;
  /** Показывать ли метку */
  showLabel?: boolean;
  /** CSS классы для плавающей метки */
  labelClassName?: string;
  /** Есть ли значение в поле */
  hasValue?: boolean;
  /** Вспомогательный текст под полем */
  helper?: string;
  /** ID компонента */
  id?: string;
  /** Значение поля (для подсчета символов) */
  value?: string;
  /** Состояние ошибки для accessibility */
  'aria-invalid'?: boolean;
  /** ID элемента с сообщением об ошибке для accessibility */
  'aria-errormessage'?: string;
  /** Тип изменения размера для textarea */
  resize?: 'fill' | 'hug' | 'fixed';
  /** Показывать ли grip для изменения размера */
  showGrip?: boolean;
}

/**
 * Типы для Input compound компонента
 */
export type InputComponentType = InputComponent;
export type InputSizeType = InputSize;
export type InputPropsType = InputProps;

/**
 * Типы для Input.Wrapper
 */
export type InputWrapperSizeType = InputWrapperSize;
export type InputWrapperPropsType = InputWrapperProps;
