import { InputHTMLAttributes, ReactNode } from 'react';

/**
 * Размеры для компонента TextInput
 */
export type TextInputSize = 'small' | 'medium' | 'large';

/**
 * Пропсы для компонента TextInput
 */
export interface TextInputProps {
  /** Значение поля */
  value?: string | null;
  /** Обработчик изменения значения */
  onChange?: (value: string | null) => void;
  /** Плейсхолдер для поля */
  placeholder?: string;
  /** Тип элемента input */
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  /** Максимальная длина */
  maxLength?: number;
  /** Минимальная длина */
  minLength?: number;
  /** Показывать ли метку (по умолчанию: true) */
  showLabel?: boolean;
  /** Автозаполнение */
  autoComplete?: string;
  /** Автофокус */
  autoFocus?: boolean;
  /** Размер компонента */
  size?: TextInputSize;
  /** Состояние ошибки */
  error?: boolean;
  /** Отключенное состояние */
  disabled?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
  /** Вспомогательный текст под полем */
  helper?: string;
  /** Префикс (иконка слева) */
  prefix?: ReactNode;
  /** Суффикс (иконка справа) */
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
  /** Включить обрезку текста с многоточием */
  truncate?: boolean;
  /** Подсказка внутри поля ввода (максимум 30 символов) */
  hint?: string;
  /** Показывать ли подсказку (по умолчанию: false) */
  showHint?: boolean;
  /** Показывать подсказку когда значение пустое (по умолчанию: false) */
  showHintOnEmpty?: boolean;
  /** Стили для обертки */
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  /** Стили для метки */
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
  /** Стили для вспомогательного текста */
  helperProps?: React.HTMLAttributes<HTMLDivElement>;
  /** Стили для префикса */
  prefixStyles?: React.CSSProperties;
  /** Стили для суффикса */
  suffixStyles?: React.CSSProperties;
  /** Дополнительные пропсы для элемента input */
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | 'value'
    | 'onChange'
    | 'placeholder'
    | 'type'
    | 'maxLength'
    | 'minLength'
    | 'autoComplete'
    | 'autoFocus'
    | 'size'
  >;
}
