import { useState } from 'react';
import { type Meta, type StoryFn } from '@storybook/react';

import { CodeBlock, Divider, Header, pageStyles, Section, Table } from '../../StoryComponents';

import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from './RadioGroup.type';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

const Component: React.FC<Partial<RadioGroupProps<string>>> = (props) => {
  const { name, value: _, ...rest } = props;

  const [value, setValue] = useState('');

  const options = [
    {
      value: 'variant_1',
      label: 'Вариант 1',
    },
    {
      value: 'variant_2',
      label: 'Вариант 2',
    },
    {
      value: 'variant_3',
      label: 'Вариант 3',
    },
  ];

  return (
    <RadioGroup
      name={name ?? 'radio_group'}
      value={value}
      options={options}
      layout={'vertical'}
      size={'large'}
      mode={'default'}
      onChange={setValue}
      {...rest}
    />
  );
};

export const Specification: StoryFn<RadioGroupProps<string>> = () => {
  return (
    <div style={pageStyles}>
      <Header title={'Полная спецификация компонента «RadioGroup»'} />

      <Section title={'1. Базовое использование'}>
        <p>
          Компонент «RadioGroup» позволяет создавать группу из компонентов «Radio», принимает
          основные пропсы «RadioProps» для определения взаимодействия с компонентом «Radio».
          Определяет значение выбранного элемента через:{' '}
          <CodeBlock content={`value === option.value`} />
          Также позволяет блокировать элемент выбора через option.disabled
        </p>
        <Divider />

        <Component name={'radio-group_1'} layout={'vertical'} size={'large'} mode={'default'} />

        <br />

        <CodeBlock
          content={`
            <RadioGroup
              name={'radio-group'}
              value={value}
              options={options}
              layout={'vertical'}
              onChange={setValue}
            />
            `}
        />
      </Section>

      <Section title={'2. Направление списка (layout)'}>
        <Table
          headers={['Значение', 'Описание', 'Визуальное представление']}
          rows={[
            [
              'vertical',
              'Вертикальное',
              <Component
                name={'radio-group_2'}
                layout={'vertical'}
                size={'large'}
                mode={'default'}
              />,
            ],
            [
              'horizontal',
              'Основной размер (формы и дропдауны)',
              <Component
                name={'radio-group_3'}
                layout={'horizontal'}
                size={'large'}
                mode={'default'}
              />,
            ],
            [
              'vertical / card',
              'Вертикальное',
              <Component name={'radio-group_4'} layout={'vertical'} size={'large'} mode={'card'} />,
            ],
            [
              'vertical / card',
              'Основной размер (формы и дропдауны)',
              <Component
                name={'radio-group_5'}
                layout={'horizontal'}
                size={'large'}
                mode={'card'}
              />,
            ],
          ]}
        />
      </Section>

      <Divider />
    </div>
  );
};

export const Playground = {
  render: (args) => <Component {...args} />,
  args: {
    name: 'playground-radio-group',
    value: 'playground',
    size: 'medium',
    loading: false,
    error: '',
    disabled: false,
    clickable: 'all',
    options: [
      {
        value: 'variant_1',
        label: 'Вариант 1',
      },
      {
        value: 'variant_2',
        label: 'Вариант 2',
      },
      {
        value: 'playground',
        label: 'Вариант 3',
      },
    ],
  },
  argTypes: {
    // Скрытые служебные/технические пропсы
    name: { table: { disable: true }, control: false },
    value: { table: { disable: true }, control: false },
    containerClassName: { table: { disable: true }, control: false },
    className: { table: { disable: true }, control: false },
    tabIndex: { table: { disable: true }, control: false },
    onChange: { table: { disable: true }, control: false },
    'data-testid': { table: { disable: true }, control: false },

    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    clickable: {
      options: ['all', 'control'],
      control: { type: 'radio' },
    },
    mode: {
      options: ['card', 'default'],
      control: { type: 'radio' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента RadioGroup со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            border: '1px solid lightgray',
            borderRadius: '12px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof RadioGroup<string>>;
