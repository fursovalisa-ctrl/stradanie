import type { Meta } from '@storybook/react';
import { Loader } from './Loader';
import {
  Header,
  Section,
  SubSection,
  Divider,
  CodeBlock,
  Grid,
  Variant,
  Table,
  pageStyles,
} from '../StoryComponents';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Main story
export const Specification = () => (
  <div style={pageStyles}>
    <Header title={'Полная спецификация компонента «Loader»'} />

    <Divider />

    <Section title={'1. Размеры (size)'}>
      <Table
        headers={['Значение', 'Физические размеры', 'Примеры использования']}
        rows={[
          [<code>16</code>, '16×16 px', 'Компактные интерфейсы'],
          [<code>24</code>, '24×24 px', 'Обычные случаи'],
          [<code>48</code>, '48×48 px', 'Основные загрузки'],
          [<code>64</code>, '64×64 px', 'Важные загрузки'],
          [<code>96</code>, '96×96 px', 'Полноэкранные загрузки'],
        ]}
      />

      <Grid>
        <Variant title={'16'} paramText={'16×16 px'}>
          <Loader size={16} />
        </Variant>
        <Variant title={'24'} paramText={'24×24 px'}>
          <Loader size={24} />
        </Variant>
        <Variant title={'48'} paramText={'48×48 px'}>
          <Loader size={48} />
        </Variant>
        <Variant title={'64'} paramText={'64×64 px'}>
          <Loader size={64} />
        </Variant>
        <Variant title={'96'} paramText={'96×96 px'}>
          <Loader size={96} />
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'2. Варианты цвета (variant)'}>
      <Table
        headers={['Значение', 'Токен']}
        rows={[
          [<code>accent</code>, <code>--text-accent</code>],
          [<code>neutral</code>, <code>--text-primary</code>],
          [<code>positive</code>, <code>--text-positive</code>],
          [<code>negative</code>, <code>--text-negative</code>],
          [<code>gray</code>, <code>--text-secondary</code>],
          [<code>special</code>, <code>--text-tertiary</code>],
          [<code>contrast</code>, <code>--text-contrast</code>],
        ]}
      />

      <Grid>
        <Variant title={'accent'} paramText={'--text-accent'}>
          <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
            <Loader size={48} variant={'accent'} />
          </div>
        </Variant>
        <Variant title={'neutral'} paramText={'--text-primary'}>
          <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
            <Loader size={48} variant={'neutral'} />
          </div>
        </Variant>
        <Variant title={'positive'} paramText={'--text-positive'}>
          <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
            <Loader size={48} variant={'positive'} />
          </div>
        </Variant>
        <Variant title={'negative'} paramText={'--text-negative'}>
          <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
            <Loader size={48} variant={'negative'} />
          </div>
        </Variant>
        <Variant title={'gray'} paramText={'--text-secondary'}>
          <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
            <Loader size={48} variant={'gray'} />
          </div>
        </Variant>
        <Variant title={'special'} paramText={'--text-tertiary'}>
          <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
            <Loader size={48} variant={'special'} />
          </div>
        </Variant>
        <Variant title={'contrast'} paramText={'--text-contrast'}>
          <div style={{ backgroundColor: '#333', padding: '16px', borderRadius: '8px' }}>
            <Loader size={48} variant={'contrast'} />
          </div>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'3. Animation'}>
      <p>
        Лоадер бесконечно и равномерно вращается вокруг своего центра по часовой стрелке делая
        полный оборот за 1000 мс.
      </p>
    </Section>

    <Divider />

    <Section title={'4. Код'}>
      <SubSection title={'4.1 Базовое использование'}>
        <CodeBlock
          content={`import { Loader } from './Loader';

<Loader size={48} />`}
        />
      </SubSection>

      <SubSection title={'4.2 С вариантами цвета'}>
        <CodeBlock
          content={`<Loader size={48} variant="neutral" />
<Loader size={48} variant="positive" />
<Loader size={48} variant="negative" />
<Loader size={48} variant="gray" />
<Loader size={48} variant="special" />
<Loader size={48} variant="contrast" />`}
        />
      </SubSection>

      <SubSection title={'4.3 С параметрами'}>
        <CodeBlock
          content={`<Loader 
  size={64} 
  variant="accent"
  className="custom-class"
  data-testid="my-loader"
/>`}
        />
      </SubSection>

      <SubSection title={'4.4 Контейнер режим'}>
        <CodeBlock
          content={`import { Loader } from './Loader';

// Контейнер с лоадером (автоматически определяется по наличию children)
<Loader loading={isLoading} variant="neutral">
  <button>Click me</button>
</Loader>`}
        />
      </SubSection>

      {/* Визуальные примеры 4.1 и 4.4 рядом */}
      <Grid>
        <Variant title={'4.1 Базовое использование'} paramText={'Спиннер'}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <Loader size={24} />
          </div>
        </Variant>
        <Variant title={'4.4 Контейнер режим'} paramText={'Контейнер с оверлеем'}>
          <div
            style={{
              borderRadius: '8px',
              width: '200px',
              height: '80px',
            }}
          >
            <Loader loading={true} size={24}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#6c757d',
                  fontWeight: '500',
                }}
              >
                Контент
              </div>
            </Loader>
          </div>
        </Variant>
      </Grid>
    </Section>
  </div>
);

/**
 * Интерактивная демонстрация с настраиваемыми пропсами
 */
export const Playground = {
  args: {
    size: 24,
    variant: 'accent',
  },
  argTypes: {
    size: {
      options: [16, 24, 48, 64, 96],
      control: { type: 'radio' },
    },
    variant: {
      options: ['accent', 'neutral', 'positive', 'negative', 'contrast', 'gray', 'special'],
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
    style: {
      table: {
        disable: true,
      },
    },
    id: {
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
        story: 'Интерактивная демонстрация компонента Loader со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
};
