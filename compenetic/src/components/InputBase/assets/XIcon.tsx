export interface XIconProps {
  /** Дополнительные CSS классы */
  className?: string;
  /** Инлайн стили */
  style?: React.CSSProperties;
  /** Размер иконки */
  size?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Цвет иконки */
  color?: string;
  /** Обработчик клика */
  onClick?: () => void;
  /** Дополнительные пропсы */
  [key: string]: unknown;
}

// TODO: временное решение, пока нет иконки
/**
 * Компонент иконки X
 */
export const XIcon: React.FC<XIconProps> = ({
  className = '',
  style,
  size = 'md',
  color = 'currentColor',
  onClick,
  ...rest
}) => {
  const sizeStyles = {
    xxxs: { width: '8px', height: '8px' },
    xxs: { width: '12px', height: '12px' },
    xs: { width: '16px', height: '16px' },
    sm: { width: '24px', height: '24px' },
    md: { width: '32px', height: '32px' },
    lg: { width: '40px', height: '40px' },
  };

  const iconStyle: React.CSSProperties = {
    display: 'inline-block',
    color,
    ...sizeStyles[size],
    ...style,
  };

  return (
    <svg
      className={className}
      style={iconStyle}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      {...rest}
    >
      <path
        d='M12 4L4 12M4 4L12 12'
        stroke='currentColor'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
