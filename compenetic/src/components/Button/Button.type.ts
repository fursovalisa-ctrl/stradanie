export interface ButtonCommonProps {
  /**
   * Button variant
   * @default 'primary'
   */
  mode?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Размер кнопки
   * @default 'm'
   */
  size?: 'l' | 'm' | 's' | 'xs';

  /**
   * Button style type
   * @default 'neutral'
   */
  buttonStyle?: 'neutral' | 'accent' | 'positive' | 'negative' | 'special' | 'contrast';

  /**
   * Показывает состояние загрузки
   * @default false
   */
  loading?: boolean;

  /**
   * Делает кнопку недоступной
   * @default false
   */
  disabled?: boolean;

  /**
   * Show badge
   */
  showBadge?: boolean;

  /**
   * Badge size
   */
  badgeSize?: 'small' | 'extra-small';

  /**
   * Badge value
   */
  badgeValue?: number | string;

  /**
   * Show subcaption
   */
  showSubcaption?: boolean;

  /**
   * Subcaption text or node
   */
  subcaption?: string | React.ReactNode;

  /**
   * Stretch button to full width
   * @default false
   */
  stretched?: boolean;

  /**
   * Distribute content to both edges
   * @default false
   */
  spaceBetween?: boolean;

  /**
   * Button icon
   */
  icon?: React.ReactNode;

  /**
   * Button postfix
   */
  postfix?: string | React.ReactNode;

  /**
   * Additional CSS class
   */
  className?: string;

  /**
   * Tab index
   */
  tabIndex?: number;

  /**
   * Children content
   */
  children?: React.ReactNode;

  /**
   * Test ID for testing
   */
  'data-testid'?: string;
}

/**
 * Props when rendered as a native HTMLButtonElement (default behaviour).
 */
export type ButtonAsNativeButtonProps = ButtonCommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

/**
 * Props when rendered as an anchor (HTMLAnchorElement).
 */
export type ButtonAsAnchorProps = Omit<ButtonCommonProps, 'type'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

/**
 * Discriminated union tying `href` and `onClick` types to the `as` prop.
 */
export type ButtonProps = ButtonAsNativeButtonProps | ButtonAsAnchorProps;

/**
 * Runtime type guard that checks if the provided props correspond to an anchor variant of the Button.
 */
export const isAsLink = (props: ButtonProps): props is ButtonAsAnchorProps => props.as === 'a';

/**
 * Runtime type guard that checks if the provided props correspond to a native button variant.
 */
export const isAsButton = (props: ButtonProps): props is ButtonAsNativeButtonProps =>
  props.as === undefined || props.as === 'button';


type Fruit = 'apple' | 'banana'

const polka: Fruit = 'apple';
const basket: Fruit[] = [];

basket.push('ff')

console.log(polka, basket);

document.