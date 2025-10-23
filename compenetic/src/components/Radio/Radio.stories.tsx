import { type Meta, type StoryFn } from '@storybook/react';
import { Radio, RadioProps } from './index';
import {
  CodeBlock,
  Divider,
  Grid,
  Header,
  List,
  pageStyles,
  Section,
  SubSection,
  Table,
  Variant,
} from '../StoryComponents';
import { Fragment, useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Specification: StoryFn<RadioProps<string>> = () => {
  const [value, setValue] = useState('');

  const generateProps = (props: Partial<RadioProps<string>>): RadioProps<string> => ({
    name: String(props.value),
    value: props.value ?? '',
    checked: props.value === value,
    onChange: (value) => setValue(value),
    ...props,
  });

  return (
    <div style={pageStyles}>
      <Header title={'Полная спецификация компонента «Radio»'} />

      <Divider />

      <Section title={'1. Размеры (size)'}>
        <Table
          headers={['Значение', 'Описание', 'Физические размеры', 'Визуальное представление']}
          rows={[
            [
              'small',
              'Когда нужна маленькая карточка, редкий кейс',
              '16.67×16.67 px',
              <Radio {...generateProps({ size: 'small', value: '1_test_1' })} />,
            ],
            [
              'medium',
              'Основной размер (формы и дропдауны)',
              '16.67×16.67 px',
              <Radio {...generateProps({ size: 'medium', value: '1_test_2' })} />,
            ],
            [
              'large',
              'Основной выбор и кастомные кнопки, наример тип формы',
              '20×20 px',
              <Radio {...generateProps({ size: 'large', value: '1_test_3' })} />,
            ],
          ]}
        />
      </Section>

      <Divider />

      <Section title={'2. Варианты отображения (mode)'}>
        <h4>Пропс mode используется для отображения Radio в двух видах:</h4>

        <List
          items={[
            'Строка с/без лейблом, имеет базовые отступы 2px для Radio иконки',
            <Fragment>
              Карточка Radio с/без лейблом, имеет отступы в зависимости от размера:
              <List items={['small - 10px 8px', 'medium - 14px', 'large - 16px']} />
            </Fragment>,
          ]}
        />
        <Table
          headers={['Значение', 'Описание', 'Примеры использования']}
          rows={[
            [
              'default',
              'Базовая radio кнопка с необязательным лейблом',
              'Дропдаун с единичным выбором',
            ],
            [
              'card',
              'Radio кнопка с дополнительной обводкой и скруглением',
              'Единичный выбор на странице, модалке или дровере',
            ],
          ]}
        />
        <Grid>
          <Variant title={'default'} paramText={'Только базовые отступы 2px: --radio-padding'}>
            <Radio {...generateProps({ size: 'large', value: '2_test_1' })} />
          </Variant>
          <Variant title={'card'} paramText={'Дополнительные отступы и рамка'}>
            <Radio {...generateProps({ size: 'large', value: '2_test_2', mode: 'card' })} />
          </Variant>
        </Grid>
      </Section>

      <Divider />

      <Section title={'3. Состояние компонента'}>
        <Table
          headers={['Значение', 'Описание', 'Визуальное представление']}
          rows={[
            [
              'unchecked',
              'Значение не выбрано',
              <Radio {...generateProps({ size: 'large', value: '3_test_1', checked: false })} />,
            ],
            [
              'checked',
              'Значение выбрано',
              <Radio {...generateProps({ size: 'large', value: '3_test_2', checked: true })} />,
            ],
            [
              'error / checked',
              'Присутствует ошибка, значение выбрано',
              <Radio
                {...generateProps({
                  size: 'large',
                  error: 'error',
                  value: '3_test_3',
                  checked: true,
                })}
              />,
            ],
            [
              'error / unchecked',
              'Присутствует ошибка, значение не выбрано',
              <Radio
                {...generateProps({
                  size: 'large',
                  error: 'error',
                  value: '3_test_4',
                  checked: false,
                })}
              />,
            ],
            [
              'disabled / checked',
              'Выбор заблокирован, значение выбрано',
              <Radio
                {...generateProps({
                  size: 'large',
                  value: '3_test_5',
                  disabled: true,
                  checked: true,
                })}
              />,
            ],
            [
              'disabled / unchecked',
              'Выбор заблокирован, значение не выбрано',
              <Radio
                {...generateProps({
                  size: 'large',
                  value: '3_test_6',
                  disabled: true,
                  checked: false,
                })}
              />,
            ],
          ]}
        />
      </Section>

      <Divider />

      <Section title={'4. Использование label в Radio'}>
        <p>
          Пропс label используется для отображения в Radio подписи к кнопке. label Может быть
          кликабельным или нет, что определяется пропсом clickable. label может быть обычным
          текстом, длинным текстом или ReactNode, выравнивание Radio имеет слева сверху
        </p>

        <Grid>
          <Variant title={'without label'} paramText={'Базовое отображение без label'}>
            <Radio {...generateProps({ size: 'large', value: '4_test_1' })} />
          </Variant>
          <Variant title={'label'} paramText={'Базовое отображение с label'}>
            <Radio {...generateProps({ size: 'large', value: '4_test_2', label: 'Вариант 1' })} />
          </Variant>
          <Variant title={'label long'} paramText={'Отображение с label большой длины'}>
            <Radio
              {...generateProps({
                size: 'large',
                value: '4_test_3',
                label:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis quod odio ut ratione eaque ducimus, voluptatem necessitatibus est blanditiis id corporis quibusdam vero. Voluptatum cum cupiditate vel maxime a.',
              })}
            />
          </Variant>
          <Variant
            title={'label ReactNode'}
            paramText={'Отображение с label, как дополнительный компонент'}
          >
            <Radio
              {...generateProps({
                size: 'large',
                value: '4_test_5',
                label: (
                  <ul>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor</li>
                  </ul>
                ),
              })}
            />
          </Variant>
        </Grid>
      </Section>

      <Divider />

      <Section title={'5. Способы взаимодействия с Radio (clickable)'}>
        <p>
          Пропс clickable используется для обозначения кликабельной области в Radio. Всего 2
          варианта взаимодействия: исключительно на кнопку Radio или по всей области компонента
        </p>

        <Table
          headers={['Значение', 'Описание', 'Примеры использования']}
          rows={[
            [
              <Fragment>
                <strong>all</strong> / deafult mode / without label
              </Fragment>,
              'Клик работает на всю область, которая принадлежит Radio',
              <Radio {...generateProps({ size: 'large', value: '5_test_1' })} />,
            ],
            [
              <Fragment>
                <strong>all</strong> / deafult mode / with label
              </Fragment>,
              'Клик работает на всю область, которая принадлежит Radio и label',
              <Radio
                {...generateProps({ size: 'large', value: '5_test_2', label: 'Вариант 1' })}
              />,
            ],
            [
              <Fragment>
                <strong>control</strong> / deafult mode / without label
              </Fragment>,
              'Клик работает только на кнопку Radio',
              <Radio
                {...generateProps({ size: 'large', value: '5_test_3', clickable: 'control' })}
              />,
            ],
            [
              <Fragment>
                <strong>control</strong> / deafult mode / with label
              </Fragment>,
              'Клик работает только на кнопку Radio',
              <Radio
                {...generateProps({
                  size: 'large',
                  value: '5_test_4',
                  clickable: 'control',
                  label: 'Вариант 4',
                })}
              />,
            ],
            [
              <Fragment>
                <strong>all</strong> / card mode / without label
              </Fragment>,
              'Клик работает на всю область в границах карточки Radio',
              <Radio {...generateProps({ size: 'large', value: '5_test_5', mode: 'card' })} />,
            ],
            [
              <Fragment>
                <strong>all</strong> / card mode / with label
              </Fragment>,
              'Клик работает на всю область в границах карточки Radio',
              <Radio
                {...generateProps({
                  size: 'large',
                  value: '5_test_6',
                  label: 'Вариант 6',
                  mode: 'card',
                })}
              />,
            ],
            [
              <Fragment>
                <strong>control</strong> / card mode / without label
              </Fragment>,
              'Клик работает только на кнопку Radio',
              <Radio
                {...generateProps({
                  size: 'large',
                  value: '5_test_7',
                  clickable: 'control',
                  mode: 'card',
                })}
              />,
            ],
            [
              <Fragment>
                <strong>control</strong> / card mode / with label
              </Fragment>,
              'Клик работает только на кнопку Radio',
              <Radio
                {...generateProps({
                  size: 'large',
                  value: '5_test_8',
                  clickable: 'control',
                  label: 'Вариант 8',
                  mode: 'card',
                })}
              />,
            ],
          ]}
        />
      </Section>

      <Divider />

      <Section title={'6. Код'}>
        <SubSection title={'6.1 Базовое использование'}>
          <CodeBlock
            content={`
            <Radio
                name={'radio'}
                value={'radioValue'}
                onChange={setValue}
                checked={'radioValue' === value}
            />
            `}
          />
        </SubSection>

        <SubSection title={'6.2 C использованием label'}>
          <CodeBlock
            content={`
            <Radio
                name={'radio'}
                value={'radioValue'}
                label={'Вариант 1'}
                onChange={setValue}
                checked={'radioValue' === value}
            />
            `}
          />
        </SubSection>

        <SubSection title={'6.3 Radio в карточке'}>
          <CodeBlock
            content={`
            <Radio
                name={'radio'}
                value={'radioValue'}
                label={'Вариант 1'}
                onChange={setValue}
                checked={'radioValue' === value}
                mode={'card'}
            />
            `}
          />
        </SubSection>

        <SubSection title={'6.4 Radio c дополнительными состояниями'}>
          <CodeBlock
            content={`
            <Radio
                name={'radio'}
                value={'radioValue'}
                label={'Вариант 1'}
                onChange={setValue}
                checked={'radioValue' === value}
                disabled
                error={'error'}
            />
            `}
          />
        </SubSection>
      </Section>
    </div>
  );
};

export const Playground = {
  args: {
    name: 'playground-radio',
    value: 'playground',
    size: 'medium',
    loading: false,
    error: '',
    disabled: false,
    clickable: 'all',
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
    checked: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента Radio со всеми настраиваемыми пропсами.',
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
            width: 100,
            height: 100,
            border: '1px solid lightgray',
            borderRadius: '12px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Radio>;
