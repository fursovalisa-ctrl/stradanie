import type { Meta } from '@storybook/react';
import { Helper } from './Helper';
import '../../i18n';
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

const meta: Meta<typeof Helper> = {
  title: 'Components/Helper',
  component: Helper,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Декоративный пример компонента
const ExampleComponent = () => (
  <div
    style={{
      height: '16px',
      minHeight: '16px',
      width: 200,
      border: '2px dotted #ccc',
      borderRadius: '12px',
      padding: '12px',
      marginBottom: '6px',
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
    }}
  >
    Пример компонента
  </div>
);

// Main story
export const Specification = () => (
  <div style={pageStyles}>
    <Header title={'Полная спецификация компонента «Helper»'} />

    <Divider />

    <Section title={'1. Состояния (state)'}>
      <p>
        Компонент Helper работает по принципу: при наличии ошибки отображается текст ошибки, иначе
        отображается основной текст. В состоянии disabled в первую очередь отображается основной
        текст
      </p>

      <Table
        headers={['Состояние', 'Сценарий', 'Отображение', 'Пример']}
        rows={[
          [<code>default</code>, 'Только title', 'Заголовок', 'Как в паспорте'],
          [
            <code>error</code>,
            'Title + Error / Error',
            'Сообщение об ошибке',
            'Не может содержать цифры',
          ],
          [<code>disabled</code>, 'Title + Disabled', 'Заголовок', 'Как в паспорте (disabled)'],
        ]}
      />

      <Grid>
        <Variant title={'Default'} paramText={'title: "Как в паспорте"'}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Helper title={'Как в паспорте'} />
          </div>
        </Variant>
        <Variant
          title={'Error'}
          paramText={'title: "Как в паспорте", error: "Не может содержать цифры"'}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Helper title={'Как в паспорте'} error={'Не может содержать цифры'} />
          </div>
        </Variant>
        <Variant title={'Disabled'} paramText={'title: "Как в паспорте", disabled: true'}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Helper title={'Как в паспорте'} disabled={true} />
          </div>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'2. Helper + группа компонентов'}>
      <SubSection title={'2.1 Helper внутри компонента'}>
        <p>Helper может быть частью компонента, например TextInput:</p>

        <div style={{ maxWidth: '300px', margin: '16px 0' }}>
          <ExampleComponent />
          <Helper title={'Как в паспорте'} />
        </div>

        <CodeBlock
          content={`// Пример использования Helper внутри компонента
const ExampleComponent = ({ helper, error, disabled }) => (
  <div>
    <div className="example-content">
      {/* Содержимое компонента */}
    </div>
    <Helper 
      title={helper} 
      error={error}
      disabled={disabled}
    />
  </div>
);

// Пример использования содержащего Helper компонента
<ExampleComponent 
  helper="Текст помощи для компонента"
  error="Сообщение об ошибке"
  disabled={false}
/>`}
        />
      </SubSection>

      <SubSection title={'2.2 Helper под каждым полем в группе'}>
        <p>Helper располагается под каждым компонентом группы:</p>

        <div style={{ maxWidth: '400px', margin: '16px 0' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1 }}>
              <ExampleComponent />
              <Helper title={'Helper'} />
            </div>
            <div style={{ flex: 1 }}>
              <ExampleComponent />
              <Helper title={'Helper'} />
            </div>
          </div>
        </div>
      </SubSection>

      <SubSection title={'2.3 Helper под всей группой'}>
        <p>Helper располагается под всей группой компонентов:</p>

        <div style={{ maxWidth: '400px', margin: '16px 0' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
            <div style={{ flex: 1 }}>
              <ExampleComponent />
            </div>
            <div style={{ flex: 1 }}>
              <ExampleComponent />
            </div>
          </div>
          <Helper title={'Helper для всей группы компонентов'} />
        </div>
      </SubSection>
    </Section>
  </div>
);

/**
 * Интерактивная демонстрация с настраиваемыми пропсами
 */
export const Playground = {
  args: {
    title: 'Как в паспорте',
    error: undefined,
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
    className: {
      table: { disable: true },
    },
    style: {
      table: { disable: true },
    },
    'data-testid': {
      table: { disable: true },
    },
    'aria-label': {
      table: { disable: true },
    },
    'aria-describedby': {
      table: { disable: true },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента Helper со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story, _context) => (
      <div
        style={{
          padding: 20,
          background: 'transparent',
          minHeight: '200px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
