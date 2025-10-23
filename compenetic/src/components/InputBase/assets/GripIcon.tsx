interface GripIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

export const GripIcon: React.FC<GripIconProps> = ({
  width = 8,
  height = 8,
  className,
  color = '#AABBCA',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 8 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.10178 0.236172C6.41679 -0.0787239 6.93824 -0.0787239 7.25325 0.236172C7.56826 0.551067 7.56826 1.07227 7.25325 1.38717L1.38772 7.25074C1.22479 7.41362 1.01837 7.48963 0.811988 7.48963C0.605604 7.48963 0.399189 7.41362 0.236255 7.25074C-0.0787516 6.93584 -0.0787516 6.41464 0.236255 6.09974L6.10178 0.236172ZM6.61276 4.19954C6.92777 3.88464 7.44895 3.88464 7.76396 4.19954C8.07897 4.52529 8.07897 5.03564 7.76396 5.35053L5.35256 7.76111C5.18963 7.92399 4.98321 8 4.77683 8C4.57045 8 4.36403 7.92399 4.2011 7.76111C3.88609 7.44622 3.88609 6.92501 4.2011 6.61012L6.61276 4.19954Z'
        fill={color}
      />
    </svg>
  );
};
