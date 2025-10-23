export interface SearchIconProps {
  /** Дополнительные CSS классы */
  className?: string;
  /** Инлайн стили */
  style?: React.CSSProperties;
  /** Размер иконки */
  size?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Цвет иконки */
  color?: string;
  /** Дополнительные пропсы */
  [key: string]: unknown;
}

// TODO: временное решение, пока нет иконки
/**
 * Компонент иконки поиска
 * Принимает className и style для кастомизации
 */
export const SearchIcon: React.FC<SearchIconProps> = ({
  className = '',
  style,
  size = 'md',
  color = 'currentColor',
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
      {...rest}
    >
      <path
        d='M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z'
        stroke='currentColor'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
