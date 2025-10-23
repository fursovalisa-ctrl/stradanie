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
 * Компонент иконки CheckIcon для чекбокса
 */
export const CheckIcon: React.FC<IconProps> = ({
  width = 12,
  height = 9,
  className = '',
  color = 'currentColor',
  ...rest
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={'0 0 14 10'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M13.0001 2.49999C13.3906 2.10946 13.3906 1.4763 13.0001 1.08578C12.6095 0.695251 11.9764 0.695251 11.5859 1.08578L5.29296 7.37867L2.00007 4.08578C1.60954 3.69525 0.976378 3.69525 0.585855 4.08578C0.19533 4.4763 0.19533 5.10946 0.585855 5.49999L4.58585 9.49999C4.97638 9.89051 5.60954 9.89051 6.00007 9.49999L13.0001 2.49999Z'
        }
        fill={color}
      />
    </svg>
  );
};
