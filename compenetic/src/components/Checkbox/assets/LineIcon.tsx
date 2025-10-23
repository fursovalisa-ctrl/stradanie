export interface IconProps {
  /** Ширина иконки */
  width?: number;
  /** Высота иконки */
  height?: number;
  /** Дополнительные CSS классы */
  className?: string;
  /** Цвет иконки */
  color?: string;
  /** Дополнительные пропсы */
  [key: string]: unknown;
}

/**
 * Компонент иконки LineIcon для indeterminate состояния чекбокса
 */
export const LineIcon: React.FC<IconProps> = ({
  width = 12,
  height = 2,
  className = '',
  color = 'currentColor',
  ...rest
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={'0 0 12 2'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H1C0.447715 2 0 1.55228 0 1Z'
        }
        fill={color}
      />
    </svg>
  );
};
