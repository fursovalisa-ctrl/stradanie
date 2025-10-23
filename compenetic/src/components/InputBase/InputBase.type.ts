import { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, HTMLAttributes } from 'react';

/**
 * Размеры для компонента InputBase
 */
export type InputBaseSize = 'small' | 'medium' | 'large';

/**
 * Типы компонентов для InputBase
 */
export type InputBaseComponent = 'input' | 'textarea';

/**
 * Базовые пропсы для компонента InputBase
 */
export interface InputBaseProps {
  /** Тип компонента (input или textarea) */
  component?: InputBaseComponent;
  /** Размер компонента */
  size?: InputBaseSize;
  /** Содержимое компонента (устаревший способ) */
  children?: ReactNode;
  /** Дополнительные CSS классы */
  className?: string;
  /** Состояние ошибки */
  error?: boolean;
  /** Плейсхолдер для поля */
  placeholder?: string;
  /** Отключенное состояние */
  disabled?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
  /** Показывать ли метку (по умолчанию: true) */
  showLabel?: boolean;
  /** CSS классы для плавающей метки */
  labelClassName?: string;
  /** Вспомогательный текст под полем */
  helper?: string;
  /** Префикс (иконка слева) */
  prefix?: ReactNode;
  /** Суффикс (иконка справа) */
  suffix?: ReactNode;
  /** ID компонента */
  id?: string;
  /** Обработчик фокуса */
  onFocus?: () => void;
  /** Обработчик потери фокуса */
  onBlur?: () => void;
  /** Обработчик изменения значения */
  onChange?: (value: string) => void;
  /** Текущее значение */
  value?: string;
  /** Стили для обертки */
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  /** Стили для метки */
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  /** Стили для вспомогательного текста */
  helperProps?: HTMLAttributes<HTMLDivElement>;
  /** Дополнительные стили для обертки (высота, отступы) */
  wrapperStyles?: React.CSSProperties;
  /** Дополнительные стили для плавающей метки */
  floatingLabelStyles?: React.CSSProperties;
  /** Дополнительные стили для префикса */
  prefixStyles?: React.CSSProperties;
  /** Дополнительные стили для суффикса */
  suffixStyles?: React.CSSProperties;
  /** Стили для textarea элемента */
  textareaStyles?: React.CSSProperties;
  /** Показывать ли счетчик символов */
  showLimit?: boolean;
  /** Максимальная длина */
  maxLength?: number;
  /** Пропсы для встроенного input/textarea */
  inputProps?: InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>;
  /** Подсказка внутри поля ввода */
  hint?: string;
  /** Показывать ли подсказку */
  showHint?: boolean;
  /** Показывать подсказку когда значение пустое */
  showHintOnEmpty?: boolean;
  /** Включить обрезку текста с многоточием */
  truncate?: boolean;
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
 * Пропсы для встроенного input элемента
 */
export interface InputBaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Состояние ошибки */
  error?: boolean;
  /** Отключенное состояние */
  disabled?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
}

/**
 * Пропсы для встроенного textarea элемента
 */
export interface InputBaseTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Состояние ошибки */
  error?: boolean;
  /** Отключенное состояние */
  disabled?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
}
