import type { Meta } from '@storybook/react';
import { Image } from './Image';
import {
  Header,
  Section,
  Divider,
  Grid,
  Variant,
  Table,
  Paragraph,
  pageStyles,
} from '../StoryComponents';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    loading: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    'data-testid': {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

// Main story
export const Specification = () => (
  <div style={pageStyles}>
    <Header title={'Полная спецификация компонента «Image»'} />

    <Divider />

    <Section title={'1. Состояния (states)'}>
      <Table
        headers={['Состояние', 'Описание', 'Визуальное представление']}
        rows={[
          [
            <code>default</code>,
            'Обычное отображение изображения',
            'Показывает загруженное изображение',
          ],
          [<code>loading</code>, 'Состояние загрузки', 'Показывает спиннер'],
          [
            <code>placeholder</code>,
            'Ошибка загрузки изображения',
            'Скрывает изображение, показывает fallback',
          ],
        ]}
      />

      <Grid>
        <Variant
          title={'default'}
          paramText={
            'Отображение изображения. Размер изображения может быть любой, скругления углов могут быть любые.'
          }
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
              width: '100%',
              height: '200px',
            }}
          >
            <Image
              src={'/src/components/Image/assets/ImageExamplePicture.webp'}
              alt={'Example image'}
              style={{ width: 120, height: 100 }}
            />
          </div>
        </Variant>
        <Variant title={'loading'} paramText={'Загрузка изображения'}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
              width: '100%',
              height: '200px',
            }}
          >
            <Image
              src={'/src/components/Image/assets/ImageExamplePicture.webp'}
              isLoading={true}
              alt={'Loading image'}
              style={{ width: 120, height: 100 }}
            />
          </div>
        </Variant>
        <Variant
          title={'placeholder'}
          paramText={'Состояние, возникающее в случае ошибки загрузки изображения'}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
              width: '100%',
              height: '200px',
            }}
          >
            <Image
              src={'/invalid-image.jpg'}
              alt={'Invalid image'}
              style={{ width: 120, height: 100 }}
            />
          </div>
        </Variant>
      </Grid>
    </Section>

    <Section title={'2. Размеры иконок (icon sizes)'}>
      <Paragraph>
        Размер loader = 48 px
        <br />
        Размер иконки = 48 px
        <br />
        Иконка и лоадер всегда центрируются по центру.
      </Paragraph>

      <Grid>
        <Variant title={'Loading'} paramText={'48×48 px'}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
              width: '100%',
              height: '200px',
            }}
          >
            <Image
              isLoading={true}
              src={'/src/components/Image/assets/ImageExamplePicture.webp'}
              alt={'Loading image'}
              style={{ width: 120, height: 100 }}
            />
          </div>
        </Variant>
        <Variant title={'Placeholder'} paramText={'48×48 px'}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
              width: '100%',
              height: '200px',
            }}
          >
            <Image
              src={'/invalid-image.jpg'}
              alt={'Invalid image'}
              style={{ width: 120, height: 100 }}
            />
          </div>
        </Variant>
      </Grid>
    </Section>
  </div>
);

// Playground story
export const Playground = {
  args: {
    src: '/src/components/Image/assets/ImageExamplePicture.webp',
    alt: 'Example image',
    loading: 'lazy',
    isLoading: false,
    style: { width: 360, height: 240 },
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    loading: {
      options: ['lazy', 'eager'],
      control: { type: 'radio' },
    },
    className: {
      table: {
        disable: true,
      },
    },
    'data-testid': {
      table: {
        disable: true,
      },
    },
    onLoad: {
      table: {
        disable: true,
      },
    },
    onError: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    onLoadStart: {
      table: {
        disable: true,
      },
    },
    onLoadEnd: {
      table: {
        disable: true,
      },
    },
    onAbort: {
      table: {
        disable: true,
      },
    },
    onCanPlay: {
      table: {
        disable: true,
      },
    },
    onCanPlayThrough: {
      table: {
        disable: true,
      },
    },
    onDurationChange: {
      table: {
        disable: true,
      },
    },
    onEmptied: {
      table: {
        disable: true,
      },
    },
    onEncrypted: {
      table: {
        disable: true,
      },
    },
    onEnded: {
      table: {
        disable: true,
      },
    },
    onProgress: {
      table: {
        disable: true,
      },
    },
    onRateChange: {
      table: {
        disable: true,
      },
    },
    onSeeked: {
      table: {
        disable: true,
      },
    },
    onSeeking: {
      table: {
        disable: true,
      },
    },
    onStalled: {
      table: {
        disable: true,
      },
    },
    onSuspend: {
      table: {
        disable: true,
      },
    },
    onTimeUpdate: {
      table: {
        disable: true,
      },
    },
    onVolumeChange: {
      table: {
        disable: true,
      },
    },
    onWaiting: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента Image со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20 }}>
        <Story />
      </div>
    ),
  ],
};
