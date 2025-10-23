import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Typography } from './Typography';

describe('Typography', () => {
  describe('Typography.Title', () => {
    it('should render successfully with default props', () => {
      render(<Typography.Title data-testid='typography-title'>Title Text</Typography.Title>);
      const element = screen.getByTestId('typography-title');
      expect(element).toBeInTheDocument();
      expect(element.textContent).toBe('Title Text');
      expect(element.tagName).toBe('H3');
    });

    it('should not render when children is empty', () => {
      render(<Typography.Title data-testid='typography-title' />);
      expect(screen.queryByTestId('typography-title')).not.toBeInTheDocument();
    });

    describe('Size variants', () => {
      it('should apply correct HTML tags based on size', () => {
        const sizes = [1, 2, 3, 4, 5] as const;
        const expectedTags = ['H1', 'H2', 'H3', 'H4', 'H5'];

        sizes.forEach((size, index) => {
          const { unmount } = render(
            <Typography.Title size={size} data-testid={`title-${size}`}>
              Title {size}
            </Typography.Title>,
          );

          const element = screen.getByTestId(`title-${size}`);
          expect(element.tagName).toBe(expectedTags[index]);
          expect(element.className).toContain(`typography-title-${size}-semibold`);
          unmount();
        });
      });

      it('should use custom "as" prop with priority over size mapping', () => {
        render(
          <Typography.Title size={1} as='h6' data-testid='custom-title'>
            Custom Title
          </Typography.Title>,
        );

        const element = screen.getByTestId('custom-title');
        expect(element.tagName).toBe('H6');
      });

      it('should use size mapping when "as" prop is not provided', () => {
        render(
          <Typography.Title size={2} data-testid='size-title'>
            Size Title
          </Typography.Title>,
        );

        const element = screen.getByTestId('size-title');
        expect(element.tagName).toBe('H2');
      });

      it('should use "as" prop when no size mapping exists', () => {
        render(
          <Typography.Label as='span' data-testid='custom-label'>
            Custom Label
          </Typography.Label>,
        );

        const element = screen.getByTestId('custom-label');
        expect(element.tagName).toBe('SPAN');
      });
    });

    describe('Font weight variants', () => {
      it('should apply semibold font weight by default', () => {
        render(<Typography.Title data-testid='title'>Title</Typography.Title>);
        const element = screen.getByTestId('title');
        expect(element.className).toContain('typography-title-3-semibold');
      });

      it('should apply explicit font weight', () => {
        render(
          <Typography.Title fontWeight='semibold' data-testid='title'>
            Bold Title
          </Typography.Title>,
        );
        const element = screen.getByTestId('title');
        expect(element.className).toContain('typography-title-3-semibold');
      });
    });

    describe('Typography styles', () => {
      it('should apply default typography styles', () => {
        render(<Typography.Title data-testid='title'>Title</Typography.Title>);
        const element = screen.getByTestId('title');
        expect(element.className).toContain('primary');
        expect(element.className).toContain('primary');
      });

      it('should apply custom typography styles', () => {
        const typographyStyles = [
          'secondary',
          'tertiary',
          'accent',
          'accent-secondary',
          'positive',
          'positive-secondary',
          'negative',
          'negative-secondary',
          'warning',
          'warning-secondary',
          'special',
          'special-secondary',
          'contrast',
          'contrast-secondary',
        ] as const;

        typographyStyles.forEach((style) => {
          const { unmount } = render(
            <Typography.Title typographyStyle={style} data-testid={`title-${style}`}>
              {style} Title
            </Typography.Title>,
          );

          const element = screen.getByTestId(`title-${style}`);
          expect(element.className).toContain(style);
          unmount();
        });
      });
    });

    describe('State handling', () => {
      it('should handle disabled state correctly', () => {
        render(
          <Typography.Title disabled data-testid='disabled-title'>
            Disabled Title
          </Typography.Title>,
        );

        const element = screen.getByTestId('disabled-title');
        expect(element.className).toContain('disabled');
      });

      it('should not apply disabled class when disabled is false', () => {
        render(
          <Typography.Title disabled={false} data-testid='active-title'>
            Active Title
          </Typography.Title>,
        );

        const element = screen.getByTestId('active-title');
        expect(element.className).not.toContain('disabled');
      });
    });

    describe('Custom props and className', () => {
      it('should apply custom className', () => {
        render(
          <Typography.Title className='custom-class' data-testid='title'>
            Custom Title
          </Typography.Title>,
        );

        const element = screen.getByTestId('title');
        expect(element.className).toContain('custom-class');
      });

      it('should forward HTML attributes correctly', () => {
        render(
          <Typography.Title id='custom-id' aria-label='Custom Label' data-testid='title'>
            Title with Attributes
          </Typography.Title>,
        );

        const element = screen.getByTestId('title');
        expect(element).toHaveAttribute('id', 'custom-id');
        expect(element).toHaveAttribute('aria-label', 'Custom Label');
      });
    });
  });

  describe('Typography.Subtitle', () => {
    it('should render successfully with default props', () => {
      render(
        <Typography.Subtitle data-testid='typography-subtitle'>Subtitle Text</Typography.Subtitle>,
      );
      const element = screen.getByTestId('typography-subtitle');
      expect(element).toBeInTheDocument();
      expect(element.textContent).toBe('Subtitle Text');
      expect(element.tagName).toBe('H3');
    });

    it('should apply subtitle variant in CSS class', () => {
      render(<Typography.Subtitle data-testid='subtitle'>Subtitle</Typography.Subtitle>);
      const element = screen.getByTestId('subtitle');
      expect(element.className).toContain('typography-subtitle-3-semibold');
    });
  });

  describe('Typography.Label', () => {
    it('should render successfully with default props', () => {
      render(<Typography.Label data-testid='typography-label'>Label Text</Typography.Label>);
      const element = screen.getByTestId('typography-label');
      expect(element).toBeInTheDocument();
      expect(element.textContent).toBe('Label Text');
      expect(element.tagName).toBe('P');
    });

    it('should not render when children is empty', () => {
      render(<Typography.Label data-testid='typography-label' />);
      expect(screen.queryByTestId('typography-label')).not.toBeInTheDocument();
    });

    describe('HTML element variants', () => {
      it('should render with different HTML elements', () => {
        const elements = ['p', 'span', 'label', 'div'] as const;
        const expectedTags = ['P', 'SPAN', 'LABEL', 'DIV'];

        elements.forEach((element, index) => {
          const { unmount } = render(
            <Typography.Label as={element} data-testid={`label-${element}`}>
              Label as {element}
            </Typography.Label>,
          );

          const labelElement = screen.getByTestId(`label-${element}`);
          expect(labelElement.tagName).toBe(expectedTags[index]);
          unmount();
        });
      });
    });

    describe('Size variants', () => {
      it('should apply correct size classes', () => {
        const sizes = [1, 2, 3, 4, 5] as const;

        sizes.forEach((size) => {
          const { unmount } = render(
            <Typography.Label size={size} data-testid={`label-${size}`}>
              Label {size}
            </Typography.Label>,
          );

          const element = screen.getByTestId(`label-${size}`);
          expect(element.className).toContain(`typography-label-${size}-regular`);
          unmount();
        });
      });
    });

    describe('Font weight variants', () => {
      it('should apply regular font weight by default', () => {
        render(<Typography.Label data-testid='label'>Label</Typography.Label>);
        const element = screen.getByTestId('label');
        expect(element.className).toContain('typography-label-3-regular');
      });

      it('should apply medium font weight', () => {
        render(
          <Typography.Label fontWeight='medium' data-testid='label'>
            Medium Label
          </Typography.Label>,
        );
        const element = screen.getByTestId('label');
        expect(element.className).toContain('typography-label-3-medium');
      });
    });

    describe('Typography styles', () => {
      it('should apply default typography styles', () => {
        render(<Typography.Label data-testid='label'>Label</Typography.Label>);
        const element = screen.getByTestId('label');
        expect(element.className).toContain('primary');
        expect(element.className).toContain('primary');
      });

      it('should apply custom typography styles', () => {
        const typographyStyles = [
          'secondary',
          'tertiary',
          'accent',
          'accent-secondary',
          'positive',
          'positive-secondary',
          'negative',
          'negative-secondary',
          'warning',
          'warning-secondary',
          'special',
          'special-secondary',
          'contrast',
          'contrast-secondary',
        ] as const;

        typographyStyles.forEach((style) => {
          const { unmount } = render(
            <Typography.Label typographyStyle={style} data-testid={`label-${style}`}>
              {style} Label
            </Typography.Label>,
          );

          const element = screen.getByTestId(`label-${style}`);
          expect(element.className).toContain(style);
          unmount();
        });
      });
    });

    describe('State handling', () => {
      it('should handle disabled state correctly', () => {
        render(
          <Typography.Label disabled data-testid='disabled-label'>
            Disabled Label
          </Typography.Label>,
        );

        const element = screen.getByTestId('disabled-label');
        expect(element.className).toContain('disabled');
      });
    });
  });

  describe('Typography.Paragraph', () => {
    it('should render successfully with default props', () => {
      render(
        <Typography.Paragraph data-testid='typography-paragraph'>
          Paragraph Text
        </Typography.Paragraph>,
      );
      const element = screen.getByTestId('typography-paragraph');
      expect(element).toBeInTheDocument();
      expect(element.textContent).toBe('Paragraph Text');
      expect(element.tagName).toBe('P');
    });

    it('should apply paragraph variant in CSS class', () => {
      render(<Typography.Paragraph data-testid='paragraph'>Paragraph</Typography.Paragraph>);
      const element = screen.getByTestId('paragraph');
      expect(element.className).toContain('typography-paragraph-3-regular');
    });

    describe('HTML element variants', () => {
      it('should render with different HTML elements', () => {
        const elements = ['p', 'span', 'label', 'div'] as const;
        const expectedTags = ['P', 'SPAN', 'LABEL', 'DIV'];

        elements.forEach((element, index) => {
          const { unmount } = render(
            <Typography.Paragraph as={element} data-testid={`paragraph-${element}`}>
              Paragraph as {element}
            </Typography.Paragraph>,
          );

          const paragraphElement = screen.getByTestId(`paragraph-${element}`);
          expect(paragraphElement.tagName).toBe(expectedTags[index]);
          unmount();
        });
      });
    });

    describe('Font weight variants', () => {
      it('should apply regular font weight by default', () => {
        render(<Typography.Paragraph data-testid='paragraph'>Paragraph</Typography.Paragraph>);
        const element = screen.getByTestId('paragraph');
        expect(element.className).toContain('typography-paragraph-3-regular');
      });

      it('should apply medium font weight', () => {
        render(
          <Typography.Paragraph fontWeight='medium' data-testid='paragraph'>
            Medium Paragraph
          </Typography.Paragraph>,
        );
        const element = screen.getByTestId('paragraph');
        expect(element.className).toContain('typography-paragraph-3-medium');
      });
    });
  });

  describe('Common behavior across all Typography components', () => {
    it('should apply typography base class to all components', () => {
      render(
        <>
          <Typography.Title data-testid='title'>Title</Typography.Title>
          <Typography.Subtitle data-testid='subtitle'>Subtitle</Typography.Subtitle>
          <Typography.Label data-testid='label'>Label</Typography.Label>
          <Typography.Paragraph data-testid='paragraph'>Paragraph</Typography.Paragraph>
        </>,
      );

      ['title', 'subtitle', 'label', 'paragraph'].forEach((component) => {
        const element = screen.getByTestId(component);
        expect(element.className).toContain('typography');
      });
    });

    it('should handle complex children content', () => {
      const complexContent = (
        <span>
          Complex <strong>bold</strong> content with <em>emphasis</em>
        </span>
      );

      render(<Typography.Title data-testid='complex-title'>{complexContent}</Typography.Title>);

      const element = screen.getByTestId('complex-title');
      expect(element).toBeInTheDocument();
      expect(element.querySelector('strong')).toBeInTheDocument();
      expect(element.querySelector('em')).toBeInTheDocument();
    });

    it('should forward refs correctly', () => {
      const titleRef = React.createRef<HTMLHeadingElement>();
      const labelRef = React.createRef<HTMLParagraphElement>();

      render(
        <>
          <Typography.Title ref={titleRef} data-testid='title-ref'>
            Title with Ref
          </Typography.Title>
          <Typography.Label ref={labelRef} data-testid='label-ref'>
            Label with Ref
          </Typography.Label>
        </>,
      );

      expect(titleRef.current).toBeInstanceOf(HTMLHeadingElement);
      expect(labelRef.current).toBeInstanceOf(HTMLParagraphElement);
    });
  });
});
