import { TextareaHTMLAttributes, ReactNode } from 'react';

/**
 * Размеры для компонента TextArea
 */
export type TextAreaSize = 'small' | 'medium';

/**
 * Пропсы для компонента TextArea
 */
export interface TextAreaProps {
  /** Значение поля */
  value?: string | null;
  /** Обработчик изменения значения */
  onChange?: (value: string | null) => void;
  /** Плейсхолдер для поля */
  placeholder?: string;
  /** Максимальная длина */
  maxLength?: number;
  /** Минимальная длина */
  minLength?: number;
  /** Показывать ли лейбл (по умолчанию true) */
  showLabel?: boolean;
  /** Автофокус */
  autoFocus?: boolean;
  /** Размер компонента */
  size?: TextAreaSize;
  /** Состояние ошибки */
  error?: boolean;
  /** Отключенное состояние */
  disabled?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
  /** Вспомогательный текст под полем */
  helper?: string;
  /** Суффикс (правая иконка) */
  suffix?: ReactNode;
  /** Показывать ли кнопку очистки */
  clearable?: boolean;
  /** ID компонента */
  id?: string;
  /** Обработчик фокуса */
  onFocus?: () => void;
  /** Обработчик потери фокуса */
  onBlur?: () => void;
  /** Дополнительные CSS классы */
  className?: string;
  /** Количество строк для textarea */
  rows?: number;
  /** Максимальное количество строк */
  maxRows?: number;
  /** Показывать ли индикатор изменения размера */
  showGrip?: boolean;
  /** Показывать ли счетчик символов */
  showLimit?: boolean;
  /** Минимальная высота компонента */
  minHeight?: number;
  /** Тип изменения размера */
  resize?: 'fill' | 'hug' | 'fixed';
  /** Стили для обертки */
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  /** Стили для лейбла */
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
  /** Стили для вспомогательного текста */
  helperProps?: React.HTMLAttributes<HTMLDivElement>;
  /** Дополнительные пропсы для элемента textarea */
  textareaProps?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    | 'value'
    | 'onChange'
    | 'placeholder'
    | 'maxLength'
    | 'minLength'
    | 'autoFocus'
    | 'rows'
    | 'disabled'
  >;
}
