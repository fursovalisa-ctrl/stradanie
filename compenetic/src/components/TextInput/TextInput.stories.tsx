import type { Meta } from '@storybook/react';
import { TextInput } from './TextInput';
import { SearchIcon, XIcon } from '../InputBase';
import '../../i18n';
import {
  Header,
  Section,
  SubSection,
  Divider,
  Grid,
  Variant,
  Table,
  CodeBlock,
  pageStyles,
} from '../StoryComponents';
import { useState } from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Main story
export const Specification = () => (
  <div style={pageStyles}>
    <Header title='Полная спецификация компонента «TextInput»' />

    <Divider />

    <Section title='1. Размеры (size)'>
      <Table
        headers={['Значение', 'Описание', 'Высота', 'Размер шрифта', 'Примеры использования']}
        rows={[
          [
            <code>large</code>,
            'Лендинги, авторизация',
            '48px',
            '16px',
            'Главные формы, регистрация',
          ],
          [
            <code>medium</code>,
            'Основной размер (частое использование)',
            '40px',
            '14px',
            'Формы, диалоги, поиск',
          ],
          [<code>small</code>, 'Редкие случаи', '32px', '12px', 'Компактные интерфейсы, таблицы'],
        ]}
      />

      <Grid>
        <Variant title='Large' paramText='size: large'>
          <TextInput size='large' placeholder='Email' />
        </Variant>
        <Variant title='Medium (Default)' paramText='size: medium'>
          <TextInput size='medium' placeholder='Email' />
        </Variant>
        <Variant title='Small' paramText='size: small'>
          <TextInput size='small' placeholder='Email' />
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title='2. Состояния'>
      <Table
        headers={['Состояние', 'Описание', 'Визуальные изменения', 'Поведение']}
        rows={[
          [
            <code>default</code>,
            'Обычное состояние',
            'Стандартная рамка',
            'Полная функциональность',
          ],
          [<code>focused</code>, 'При фокусе', 'Подсвеченная рамка', 'Активное состояние'],
          [
            <code>error</code>,
            'Ошибка валидации',
            'Красная рамка и текст',
            'Показ сообщения об ошибке',
          ],
          [
            <code>disabled</code>,
            'Отключенное состояние',
            'Блеклые цвета, курсор disabled',
            'Блокировка взаимодействия',
          ],
          [
            <code>loading</code>,
            'Состояние загрузки',
            'Полупрозрачность, спиннер',
            'Блокировка взаимодействия',
          ],
        ]}
      />

      <Grid>
        <Variant title='Default' paramText='default state'>
          <TextInput placeholder='your@email.com' />
        </Variant>
        <Variant title='Focused' paramText='focused: true'>
          <TextInput placeholder='your@email.com' />
        </Variant>
        <Variant title='Error' paramText='error: true'>
          <TextInput placeholder='your@email.com' error helper='Неверный формат email' />
        </Variant>
        <Variant title='Disabled' paramText='disabled: true'>
          <TextInput disabled placeholder='your@email.com' />
        </Variant>
        <Variant title='Loading' paramText='loading: true'>
          <TextInput loading placeholder='your@email.com' />
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title='3. Префиксы и суффиксы'>
      <SubSection title='3.1 Префиксы (иконки слева)'>
        <p>Используется для иконок, префиксов и дополнительной информации слева от поля ввода.</p>

        <Grid>
          <Variant title='Search' paramText='prefix: SearchIcon'>
            <TextInput
              prefix={<SearchIcon size='xs' color='#6b7280' />}
              placeholder='Введите поисковый запрос...'
            />
          </Variant>
        </Grid>
      </SubSection>

      <SubSection title='3.2 Суффиксы (иконки справа)'>
        <p>Используется для иконок, суффиксов и действий справа от поля ввода.</p>

        <Grid>
          <Variant title='Clear' paramText='suffix: XIcon'>
            <TextInput
              suffix={<XIcon size='xs' color='#6b7280' />}
              placeholder='Введите текст...'
            />
          </Variant>
        </Grid>
      </SubSection>

      <SubSection title='3.3 Префикс и суффикс вместе'>
        <p>Можно использовать обе секции одновременно для сложных интерфейсов.</p>

        <Grid>
          <Variant title='Search with clear' paramText='prefix: SearchIcon, suffix: XIcon'>
            <TextInput
              prefix={<SearchIcon size='xs' color='#6b7280' />}
              suffix={<XIcon size='xs' color='#6b7280' />}
              placeholder='Введите запрос...'
            />
          </Variant>
        </Grid>
      </SubSection>
    </Section>

    <Divider />

    <Section title='4. Валидация'>
      <SubSection title='4.1 Helper текст'>
        <p>Дополнительная информация под полем ввода.</p>

        <Grid>
          <Variant title='Helper text' paramText='helper: string'>
            <TextInput placeholder='your@email.com' helper='Введите корректный email адрес' />
          </Variant>
          <Variant title='Error helper' paramText='error: true, helper: string'>
            <TextInput error placeholder='your@email.com' helper='Неверный формат email' />
          </Variant>
        </Grid>
      </SubSection>
    </Section>

    <Divider />

    <Section title='5. Подсказки'>
      <SubSection title='5.1 Внутренние подсказки'>
        <p>Подсказки внутри поля ввода для помощи пользователю.</p>

        <Grid>
          <Variant title='With hint' paramText='hint: "Подсказка", showHint: true'>
            <TextInput
              placeholder='your@email.com'
              hint='~ 15 откликов'
              showHint
              value='test@example.com'
            />
          </Variant>
          <Variant title='Hint on empty' paramText='showHintOnEmpty: true'>
            <TextInput placeholder='your@email.com' hint='~ 15 откликов' showHint showHintOnEmpty />
          </Variant>
        </Grid>
      </SubSection>
    </Section>

    <Divider />

    <Section title='6. Примеры кода'>
      <SubSection title='6.1. Базовое использование'>
        <CodeBlock
          content={`import { TextInput } from './TextInput';

// Простой текстовый ввод
<TextInput 
  placeholder="Введите текст"
  onChange={(value) => console.log(value)}
/>`}
        />
      </SubSection>

      <SubSection title='6.2. С префиксом и суффиксом'>
        <CodeBlock
          content={`import { TextInput } from './TextInput';
import { SearchIcon, XIcon } from '../InputBase';

// С иконкой поиска и кнопкой очистки
<TextInput 
  placeholder="Поиск..."
  prefix={<SearchIcon size="xs" color="#6b7280" />}
  suffix={<XIcon size="xs" color="#6b7280" />}
  clearable={true}
  onChange={(value) => console.log(value)}
/>`}
        />
      </SubSection>

      <SubSection title='6.3. С валидацией и подсказками'>
        <CodeBlock
          content={`import { TextInput } from './TextInput';

// С валидацией и подсказками
<TextInput 
  placeholder="Email"
  error={hasError}
  helper={hasError ? "Введите корректный email" : ""}
  hint="example@domain.com"
  showHint={true}
  showHintOnEmpty={true}
  onChange={(value) => setEmail(value)}
/>`}
        />
      </SubSection>

      <SubSection title='6.4. С плавающим лейблом'>
        <CodeBlock
          content={`import { TextInput } from './TextInput';

// С плавающим лейблом (только для large размера)
<TextInput 
  size="large"
  placeholder="Полное имя"
  showLabel={true}
  onChange={(value) => setName(value)}
/>`}
        />
      </SubSection>
    </Section>
  </div>
);

/**
 * Интерактивная демонстрация с настраиваемыми пропсами
 */
const PlaygroundComponent = (args: React.ComponentProps<typeof TextInput>) => {
  const [value, setValue] = useState<string | null>(args.value || '');

  return <TextInput {...args} value={value} onChange={setValue} />;
};

export const Playground = {
  args: {
    placeholder: 'Label',
    size: 'medium',
    value: '',
    prefix: undefined,
    suffix: undefined,
    helper: 'Введите корректный email адрес',
    error: false,
    disabled: false,
    loading: false,
    showLabel: true,
    truncate: true,
    hint: '',
    showHint: false,
    showHintOnEmpty: false,
  },
  render: PlaygroundComponent,
  argTypes: {
    // Скрываем неиграбельные пропсы
    id: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onKeyUp: { table: { disable: true } },
    className: { table: { disable: true } },
    style: { table: { disable: true } },
    wrapperProps: { table: { disable: true } },
    wrapperStyles: { table: { disable: true } },
    floatingLabelStyles: { table: { disable: true } },
    prefixStyles: { table: { disable: true } },
    suffixStyles: { table: { disable: true } },
    labelProps: { table: { disable: true } },
    helperProps: { table: { disable: true } },
    inputProps: { table: { disable: true } },
    component: { table: { disable: true } },
    resize: { table: { disable: true } },
    showGrip: { table: { disable: true } },
    'aria-invalid': { table: { disable: true } },
    'aria-errormessage': { table: { disable: true } },
    shouldShowFloatingLabelClass: { table: { disable: true } },
    autoFocus: { table: { disable: true } },
    autoComplete: { table: { disable: true } },
    minLength: { table: { disable: true } },
    type: { table: { disable: true } },

    // Играбельные пропсы
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    truncate: {
      control: { type: 'boolean' },
    },
    showHint: {
      control: { type: 'boolean' },
    },
    showHintOnEmpty: {
      control: { type: 'boolean' },
    },
    // TODO: Добавить компонент иконки
    prefix: {
      options: ['none', 'search', 'xIcon'],
      mapping: {
        none: undefined,
        search: <SearchIcon size='xs' color='#6b7280' />,
        xIcon: <XIcon size='xs' color='#6b7280' />,
      },
      control: { type: 'radio' },
    },
    suffix: {
      options: ['none', 'xIcon', 'search'],
      mapping: {
        none: undefined,
        xIcon: <XIcon size='xs' color='#6b7280' />,
        search: <SearchIcon size='xs' color='#6b7280' />,
      },
      control: { type: 'radio' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    helper: {
      control: { type: 'text' },
    },
    hint: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента TextInput со всеми настраиваемыми пропсами.',
      },
    },
  },
};
