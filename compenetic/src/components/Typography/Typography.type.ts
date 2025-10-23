export type TypographyStyle =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'accent-secondary'
  | 'positive'
  | 'positive-secondary'
  | 'negative'
  | 'negative-secondary'
  | 'warning'
  | 'warning-secondary'
  | 'special'
  | 'special-secondary'
  | 'contrast'
  | 'contrast-secondary';

export type TypographySize = 1 | 2 | 3 | 4 | 5;

export type TypographyTitleFontWeight = 'semibold';
export type TypographyTitleVariant = 'title' | 'subtitle';

export type TypographyTextFontWeight = 'regular' | 'medium';
export type TypographyTextVariant = 'paragraph' | 'label';

export interface TypographyBaseProps {
  /**
   * Children content
   */
  children?: React.ReactNode;

  /**
   * Typography style
   * @default 'primary'
   */
  typographyStyle?: TypographyStyle;

  /**
   * Additional CSS class
   */
  className?: string;

  /**
   * Typography size
   * @default 3
   */
  size?: TypographySize;

  /**
   * Test ID for testing
   */
  'data-testid'?: string;

  /**
   * Disable typography
   * @default false
   */
  disabled?: boolean;
}

export interface TypographyTitleProps
  extends TypographyBaseProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Typography variant by design system
   * @default 'title'
   */
  variant?: TypographyTitleVariant;

  /**
   * Typography HTML tag
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * Typography font weight
   * @default 'semibold'
   */
  fontWeight?: TypographyTitleFontWeight;
}

export interface TypographyTextProps
  extends TypographyBaseProps,
    React.HTMLAttributes<
      HTMLParagraphElement | HTMLSpanElement | HTMLLabelElement | HTMLDivElement
    > {
  /**
   * Typography variant by design system
   * @default 'label'
   */
  variant?: TypographyTextVariant;

  /**
   * Typography HTML tag
   * @default 'p'
   */
  as?: 'p' | 'span' | 'label' | 'div';

  /**
   * Typography font weight
   * @default 'regular'
   */
  fontWeight?: TypographyTextFontWeight;
}
