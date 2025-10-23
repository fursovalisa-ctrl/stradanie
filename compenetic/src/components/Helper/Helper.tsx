import { clsx } from 'clsx';
import { HelperProps } from './Helper.type';
import styles from './Helper.module.css';

/**
 * Компонент Helper для отображения вспомогательного текста
 * Может использоваться как самостоятельно, так и в составе других компонентов или групп компонентов
 * При наличии ошибки отображается текст error, иначе отображается title
 */
export const Helper: React.FC<HelperProps> = ({
  title,
  error,
  className = '',
  style,
  disabled = false,
  'data-testid': dataTestId,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}) => {
  const hasError = !!error;

  const helperClasses = clsx(
    styles.helper,
    hasError && styles['helper--error'],
    disabled && styles['helper--disabled'],
    className,
  );

  // Приоритет отображения: disabled -> error -> title
  const displayText = disabled ? title : error || title;

  return (
    <div
      className={helperClasses}
      style={style}
      data-testid={dataTestId}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      <p>{displayText}</p>
    </div>
  );
};
