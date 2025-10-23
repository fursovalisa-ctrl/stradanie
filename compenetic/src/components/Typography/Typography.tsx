import * as React from 'react';

import type {
  TypographyTitleProps,
  TypographyTextProps,
  TypographyTitleVariant,
  TypographyTextVariant,
} from './Typography.type';
import t from '../../styles/typography.module.css';
import s from './Typography.module.css';
import { TYPOGRAPHY_HEADING_BY_SIZE } from './Typography.constants';
import { clsx } from 'clsx';

/**
 * Factory function to create a heading component (`Title` or `Subtitle`).
 *
 * @param variant - The variant of the heading: 'title' or 'subtitle'.
 * @returns A React component with `forwardRef` support that renders a heading (e.g., `<h1>`, `<h2>`).
 * @example
 * ```tsx
 * const Title = createTypographyTitleComponent('title');
 * <Title size={1} typographyStyle="primary">Heading</Title>
 * ```
 */
const createTypographyTitleComponent = (variant: TypographyTitleVariant) => {
  /**
   * Typography component for headings (`Title` or `Subtitle`).
   *
   * @component
   * @param props - Component props.
   * @param props - Props object conforming to {@link TypographyTitleProps}.
   * @param ref - Reference to the heading HTML element (`HTMLHeadingElement`).
   * @returns A heading JSX element.
   * @example
   * ```tsx
   * <Typography.Title size={1} typographyStyle="primary">Heading</Typography.Title>
   * <Typography.Subtitle size={2} typographyStyle="secondary">Subheading</Typography.Subtitle>
   * ```
   */
  const TypographyComponent = React.forwardRef<HTMLHeadingElement | null, TypographyTitleProps>(
    (
      {
        size = 3,
        children,
        className,
        'data-testid': dataTestId,
        as,
        fontWeight = 'semibold',
        disabled = false,
        typographyStyle = 'primary',
        ...props
      },
      ref,
    ) => {
      const Component = as || TYPOGRAPHY_HEADING_BY_SIZE[size];

      const typographyClassNames = clsx(
        s.typography,
        (t as Record<string, string>)[`typography-${variant}-${size}-${fontWeight}`],
        s[typographyStyle],
        {
          [s.disabled]: disabled,
        },
        className,
      );

      if (!children) return null;

      return (
        <Component ref={ref} className={typographyClassNames} data-testid={dataTestId} {...props}>
          {children}
        </Component>
      );
    },
  );

  TypographyComponent.displayName = `Typography.${variant === 'title' ? 'Title' : 'Subtitle'}`;

  return TypographyComponent;
};

/**
 * Factory function to create a text component (`Label` or `Paragraph`).
 *
 * @param variant - The variant of the text: 'label' or 'paragraph'.
 * @returns A React component with `forwardRef` support that renders text (e.g., `<p>`, `<span>`).
 * @example
 * ```tsx
 * const Paragraph = createTypographyTextComponent('paragraph');
 * <Paragraph size={4} typographyStyle="primary">Paragraph text</Paragraph>
 * ```
 */

const createTypographyTextComponent = (variant: TypographyTextVariant) => {
  /**
   * Typography component for text (`Label` or `Paragraph`).
   *
   * @component
   * @param props - Component props.
   * @param props - Props object conforming to {@link TypographyTextProps}.
   * @param ref - Reference to the text HTML element (`HTMLParagraphElement`, `HTMLSpanElement`, etc.).
   * @returns A text JSX element.
   * @example
   * ```tsx
   * <Typography.Label size={3} as="span">Label</Typography.Label>
   * <Typography.Paragraph size={4}>Paragraph text</Typography.Paragraph>
   * ```
   */
  const TypographyComponent = React.forwardRef<
    HTMLParagraphElement | HTMLSpanElement | HTMLLabelElement | HTMLDivElement | null,
    TypographyTextProps
  >(
    (
      {
        size = 3,
        children,
        className,
        'data-testid': dataTestId,
        as = 'p',
        fontWeight = 'regular',
        disabled = false,
        typographyStyle = 'primary',
        ...props
      },
      ref,
    ) => {
      const Component = as;

      const typographyClassNames = clsx(
        s.typography,
        (t as Record<string, string>)[`typography-${variant}-${size}-${fontWeight}`],
        s[typographyStyle],
        {
          [s.disabled]: disabled,
        },
        className,
      );

      if (!children) return null;

      return (
        <Component
          ref={ref as never}
          className={typographyClassNames}
          data-testid={dataTestId}
          {...props}
        >
          {children}
        </Component>
      );
    },
  );

  TypographyComponent.displayName = `Typography.${variant.charAt(0).toUpperCase() + variant.slice(1)}`;

  return TypographyComponent;
};

/**
 * Object containing typography components.
 *
 * @example
 * ```tsx
 * import { Typography } from './Typography';
 *
 * <Typography.Title size={1}>Heading</Typography.Title>
 * <Typography.Subtitle size={2}>Subheading</Typography.Subtitle>
 * <Typography.Label size={3}>Label</Typography.Label>
 * <Typography.Paragraph size={4}>Paragraph</Typography.Paragraph>
 * ```
 */
export const Typography = {
  Title: createTypographyTitleComponent('title'),
  Subtitle: createTypographyTitleComponent('subtitle'),
  Label: createTypographyTextComponent('label'),
  Paragraph: createTypographyTextComponent('paragraph'),
};
