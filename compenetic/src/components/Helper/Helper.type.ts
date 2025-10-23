export interface HelperProps {
  /** Заголовок/описание (обязательный) */
  title: string;
  /** Сообщение об ошибке (опциональный) */
  error?: string;
  /** Дополнительные CSS классы */
  className?: string;
  /** Дополнительные стили */
  style?: React.CSSProperties;
  /** Заблокированное состояние */
  disabled?: boolean;
  /** ID для тестирования */
  'data-testid'?: string;
  /** ARIA-атрибуты */
  'aria-label'?: string;
  'aria-describedby'?: string;
}
