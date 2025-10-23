import type { Meta } from '@storybook/react';
import { TextArea } from './TextArea';
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
import { useState, useEffect } from 'react';

/**
 * Компонент для демонстрации функциональности очистки
 */
const ClearableExample = ({ clearable }: { clearable: boolean }) => {
  const [value, setValue] = useState(
    clearable ? 'Текст с кнопкой очистки' : 'Текст без кнопки очистки',
  );

  const handleChange = (newValue: string | null) => setValue(newValue || '');

  return (
    <TextArea
      size='medium'
      value={value}
      onChange={handleChange}
      clearable={clearable}
      placeholder={clearable ? 'Введите текст и нажмите X для очистки' : 'Введите текст'}
    />
  );
};

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Main story
export const Specification = () => {
  return (
    <div style={pageStyles}>
      <Header title='Полная спецификация компонента «TextArea»' />

      <Divider />

      <Section title='1. Размеры (size)'>
        <Table
          headers={['Значение', 'Описание', 'Высота', 'Размер шрифта', 'Примеры использования']}
          rows={[
            [
              <code>medium</code>,
              'Основной размер (частое использование)',
              '48px / 56px / 112px',
              '16px',
              'Формы, отзывы',
            ],
            [
              <code>small</code>,
              'Редкие случаи',
              '48px / 56px / 112px',
              '14px',
              'Компактные формы',
            ],
          ]}
        />

        <Grid>
          <Variant title='Medium (Default)' paramText='size: medium'>
            <TextArea size='medium' placeholder='Введите ваш комментарий' />
          </Variant>
          <Variant title='Small' paramText='size: small'>
            <TextArea size='small' placeholder='Введите ваш комментарий' />
          </Variant>
        </Grid>
      </Section>

      <Divider />

      <Section title='2. Минимальная высота (minHeight)'>
        <Table
          headers={[
            'Значение',
            'Описание',
            'Высота wrapper',
            'Высота textarea',
            'Примеры использования',
          ]}
          rows={[
            [<code>48</code>, 'Компактный размер', '48px', '22px', 'Короткие комментарии'],
            [<code>56</code>, 'Стандартный размер', '56px', '22px', 'Обычные формы'],
            [<code>112</code>, 'Большой размер', '112px', '48px', 'Длинные тексты, отзывы'],
          ]}
        />

        <Grid>
          <Variant title='48px' paramText='minHeight: 48'>
            <TextArea minHeight={48} placeholder='Компактный размер' />
          </Variant>
          <Variant title='56px' paramText='minHeight: 56'>
            <TextArea minHeight={56} placeholder='Стандартный размер' />
          </Variant>
          <Variant title='112px' paramText='minHeight: 112'>
            <TextArea minHeight={112} placeholder='Большой размер' />
          </Variant>
        </Grid>
      </Section>

      <Divider />

      <Section title='3. Состояния'>
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
            <TextArea placeholder='Введите ваш комментарий' />
          </Variant>
          <Variant title='Focused' paramText='focused: true'>
            <TextArea placeholder='Сфокусируйтесь на компоненте' />
          </Variant>
          <Variant title='Error' paramText='error: true'>
            <TextArea
              placeholder='Введите ваш комментарий'
              error
              helper='Поле обязательно для заполнения'
            />
          </Variant>
          <Variant title='Disabled' paramText='disabled: true'>
            <TextArea disabled placeholder='Введите ваш комментарий' />
          </Variant>
          <Variant title='Loading' paramText='loading: true'>
            <TextArea loading placeholder='Введите ваш комментарий' />
          </Variant>
        </Grid>
      </Section>

      <Divider />

      <Section title='4. Автоматическое изменение размера (resize)'>
        <SubSection title='4.1. Типы resize'>
          <Table
            headers={['Тип', 'Описание', 'Поведение', 'Примеры использования']}
            rows={[
              [
                <code>both</code>,
                'Изменение размера по обеим осям',
                'Поле растет по содержимому без ограничений',
                'Формы с динамическим контентом',
              ],
              [
                <code>vertical</code>,
                'Изменение размера только по вертикали',
                'Поле растет по содержимому с учетом minHeight',
                'Формы с ограничениями',
              ],
              [
                <code>none</code>,
                'Фиксированный размер',
                'При переполнении появляется скролл',
                'Компактные формы',
              ],
            ]}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Fill */}
            <div
              style={{ display: 'flex', gap: '24px', height: '300px', alignItems: 'flex-start' }}
            >
              <div style={{ flex: '1', maxWidth: '400px', height: '100%' }}>
                <TextArea
                  value='Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать.'
                  onChange={() => null}
                  minHeight={112}
                  resize='fill'
                  placeholder='Введите текст, поле будет расти автоматически'
                />
              </div>
              <div style={{ flex: '1' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>Fill</h4>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#64748B' }}>
                  <code>resize: fill</code>
                </p>
                <p style={{ margin: '0 0 12px 0', fontSize: '14px', lineHeight: '1.5' }}>
                  Растягивается по ширине или высоте контейнера. Поле растет по содержимому без
                  ограничений.
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#64748B' }}>
                  <strong>Примеры использования:</strong> Формы с динамическим контентом
                </p>
              </div>
            </div>

            {/* Hug */}
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ flex: '1', maxWidth: '400px' }}>
                <TextArea
                  value='Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать.'
                  onChange={() => null}
                  resize='hug'
                  minHeight={112}
                  placeholder='Поле растет с учетом минимальной высоты'
                />
              </div>
              <div style={{ flex: '1' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>Hug</h4>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#64748B' }}>
                  <code>resize: hug</code>
                </p>
                <p style={{ margin: '0 0 12px 0', fontSize: '14px', lineHeight: '1.5' }}>
                  Обнимает контент с учетом заданной минимальной высоты. Поле растет по содержимому
                  с учетом minHeight.
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#64748B' }}>
                  <strong>Примеры использования:</strong> Формы с ограничениями
                </p>
              </div>
            </div>

            {/* Fixed */}
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ flex: '1', maxWidth: '400px' }}>
                <TextArea
                  value='Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать.'
                  onChange={() => null}
                  resize='fixed'
                  minHeight={112}
                  placeholder='Фиксированный размер'
                />
              </div>
              <div style={{ flex: '1' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>Fixed</h4>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#64748B' }}>
                  <code>resize: fixed</code>
                </p>
                <p style={{ margin: '0 0 12px 0', fontSize: '14px', lineHeight: '1.5' }}>
                  Фиксированный размер. При переполнении появляется скролл.
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#64748B' }}>
                  <strong>Примеры использования:</strong> Компактные формы
                </p>
              </div>
            </div>

            {/* With grip */}
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ flex: '1', maxWidth: '400px' }}>
                <TextArea
                  value='Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать.'
                  onChange={() => null}
                  showGrip
                  minHeight={112}
                  placeholder='Потяните за угол для изменения размера'
                />
              </div>
              <div style={{ flex: '1' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>
                  With grip
                </h4>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#64748B' }}>
                  <code>showGrip: true</code>
                </p>
                <p style={{ margin: '0 0 12px 0', fontSize: '14px', lineHeight: '1.5' }}>
                  Поле с возможностью ручного изменения размера пользователем. Показывает индикатор
                  изменения размера в правом нижнем углу. Отображается в ситуации, когда параметр
                  resize не передан или установлен в 'fixed' и отсутствует 'limit'.
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#64748B' }}>
                  <strong>Примеры использования:</strong> Редакторы текста, формы с гибким размером
                </p>
              </div>
            </div>
          </div>
        </SubSection>
      </Section>

      <Divider />

      <Section title='5. Валидация'>
        <SubSection title='5.1. Helper текст'>
          <p>Дополнительная информация под полем ввода.</p>

          <Grid>
            <Variant title='Helper text' paramText='helper: string'>
              <TextArea placeholder='Введите ваш комментарий' helper='Максимум 500 символов' />
            </Variant>
            <Variant title='Error helper' paramText='error: true, helper: string'>
              <TextArea
                error
                placeholder='Введите ваш комментарий'
                helper='Поле обязательно для заполнения'
              />
            </Variant>
          </Grid>
        </SubSection>

        <SubSection title='5.2. Ограничения длины'>
          <p>Установка минимальной и максимальной длины текста.</p>

          <Grid>
            <Variant title='With max length' paramText='maxLength: 100'>
              <TextArea
                value='Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать.'
                onChange={() => null}
                maxLength={100}
                minHeight={112}
                placeholder='Введите текст (максимум 100 символов)'
              />
            </Variant>
            <Variant title='With min length' paramText='minLength: 10'>
              <TextArea
                value='Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать.'
                onChange={() => null}
                minLength={10}
                minHeight={112}
                placeholder='Введите текст (минимум 10 символов)'
              />
            </Variant>
            <Variant title='With character limit' paramText='showLimit: true'>
              <TextArea
                value='Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать.'
                onChange={() => null}
                maxLength={255}
                showLimit
                minHeight={112}
                placeholder='Введите текст с отображением лимита'
              />
            </Variant>
          </Grid>
        </SubSection>
      </Section>

      <Divider />

      <Section title='6. Очистка (clearable)'>
        <p>Кнопка очистки поля ввода.</p>

        <Grid>
          <Variant title='With clear button' paramText='clearable: true'>
            <ClearableExample clearable={true} />
          </Variant>
          <Variant title='Without clear button' paramText='clearable: false'>
            <ClearableExample clearable={false} />
          </Variant>
        </Grid>
      </Section>

      <Divider />

      <Section title='8. Типографика'>
        <Table
          headers={[
            'Размер',
            'Font Family',
            'Font Size',
            'Line Height',
            'Letter Spacing',
            'Font Weight',
          ]}
          rows={[
            [<code>medium</code>, 'Inter', '16px', '22px', '0%', '400'],
            [<code>small</code>, 'Inter', '14px', '20px', '0.5%', '400'],
          ]}
        />

        <Grid>
          <Variant title='Medium size label' paramText='size: medium'>
            <TextArea size='medium' placeholder='Medium size label' />
          </Variant>
          <Variant title='Small size label' paramText='size: small'>
            <TextArea size='small' placeholder='Small size label' />
          </Variant>
        </Grid>
      </Section>

      <Divider />

      <Section title='9. Анимация'>
        <Table
          headers={['Событие', 'Токен анимации', 'Длительность', 'Пример использования']}
          rows={[
            [
              'Переход из placeholder в value + label',
              <code>semantic-animation-ease-in-out-100</code>,
              '200 мс',
              'Анимация плавающего лейбла',
            ],
            [
              'Автоматическое изменение размера (resize)',
              <code>semantic-animation-ease-in-out-100</code>,
              '200 мс',
              'Плавное изменение высоты textarea',
            ],
            [
              'Появление/скрытие helper текста',
              <code>semantic-animation-ease-in-out-300</code>,
              '300 мс',
              'Анимация появления сообщения об ошибке',
            ],
            [
              'Изменение состояния фокуса',
              <code>semantic-animation-ease-in-out-100</code>,
              '200 мс',
              'Изменение цвета рамки и тени',
            ],
          ]}
        />
      </Section>

      <Divider />

      <Section title='10. Автоматическое поведение placeholder'>
        <p>Placeholder автоматически адаптируется к состоянию поля:</p>
        <ul>
          <li>
            <strong>Обычное состояние:</strong> placeholder занимает всю доступную область
          </li>
          <li>
            <strong>Активное состояние (значение):</strong> placeholder сжимается в одну строку и
            обрезается
          </li>
        </ul>

        <Grid>
          <Variant title='Обычное состояние' paramText='default state'>
            <TextArea
              placeholder='Очень длинный текст для Label в обычном состоянии'
              minHeight={112}
              resize='fixed'
              showLabel={true}
            />
          </Variant>
          <Variant title='Со значением' paramText='with value'>
            <TextArea
              value={
                'Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать. Очень длинный текст не помещается в это маленькое поле, что бы ты ни делал — не пытайся его обрезать.'
              }
              placeholder='Очень длинный текст для Label в состоянии со значением'
              minHeight={112}
              resize='fixed'
              showLabel={true}
            />
          </Variant>
        </Grid>
      </Section>

      <Divider />

      <Section title='6. Примеры кода'>
        <SubSection title='6.1. Базовое использование'>
          <CodeBlock
            content={`import { TextArea } from './TextArea';

// Простое текстовое поле
<TextArea 
  placeholder="Введите ваш комментарий"
  onChange={(value) => console.log(value)}
/>`}
          />
        </SubSection>

        <SubSection title='6.2. С ограничениями и счетчиком'>
          <CodeBlock
            content={`import { TextArea } from './TextArea';

// С ограничением символов и счетчиком
<TextArea 
  placeholder="Введите отзыв"
  maxLength={500}
  showLimit={true}
  helper="Максимум 500 символов"
  onChange={(value) => setReview(value)}
/>`}
          />
        </SubSection>

        <SubSection title='6.3. С кнопкой очистки'>
          <CodeBlock
            content={`import { TextArea } from './TextArea';

// С кнопкой очистки
<TextArea 
  placeholder="Введите текст"
  clearable={true}
  onChange={(value) => setText(value)}
/>`}
          />
        </SubSection>

        <SubSection title='6.4. С разными размерами и высотами'>
          <CodeBlock
            content={`import { TextArea } from './TextArea';

// Маленький размер с минимальной высотой 48px
<TextArea 
  size="small"
  minHeight={48}
  placeholder="Короткий комментарий"
/>

// Средний размер с минимальной высотой 112px
<TextArea 
  size="medium"
  minHeight={112}
  placeholder="Длинный отзыв"
  showLimit={true}
  maxLength={1000}
/>`}
          />
        </SubSection>

        <SubSection title='6.5. С grip для изменения размера'>
          <CodeBlock
            content={`import { TextArea } from './TextArea';

// С grip для ручного изменения размера (работает только при resize='fixed' или когда resize не указан)
<TextArea 
  placeholder="Введите текст"
  showGrip={true}
  resize="fixed"
  minHeight={112}
  onChange={(value) => setText(value)}
/>`}
          />
        </SubSection>
      </Section>
    </div>
  );
};

/**
 * Интерактивная демонстрация с настраиваемыми пропсами
 */
const PlaygroundComponent = (args: React.ComponentProps<typeof TextArea>) => {
  const [value, setValue] = useState<string | null>('');

  useEffect(() => {
    setValue('');
  }, [args.resize]);

  return (
    <div style={{ height: '20rem' }}>
      <TextArea {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const Playground = {
  render: PlaygroundComponent,
  args: {
    placeholder: 'Введите ваш комментарий',
    size: 'medium',
    minHeight: 56,
    resize: undefined,
    showGrip: true,
    error: false,
    disabled: false,
    loading: false,
    clearable: true,
    showLimit: true,
    maxLength: 500,
    helper: 'Максимум 500 символов',
    showLabel: true,
  },
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    minHeight: {
      options: [48, 56, 112],
      control: { type: 'radio' },
    },
    resize: {
      options: [undefined, 'fill', 'hug', 'fixed'],
      control: { type: 'radio' },
    },
    showGrip: {
      control: { type: 'boolean' },
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
    clearable: {
      control: { type: 'boolean' },
    },
    showLimit: {
      control: { type: 'boolean' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    helper: {
      control: { type: 'text' },
    },
    maxLength: {
      control: { type: 'number' },
    },
    // Исключаем неинтерактивные пропсы
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    autoFocus: { table: { disable: true } },
    autoComplete: { table: { disable: true } },
    id: { table: { disable: true } },
    focused: { table: { disable: true } },
    className: { table: { disable: true } },
    rows: { table: { disable: true } },
    maxRows: { table: { disable: true } },
    wrapperProps: { table: { disable: true } },
    labelProps: { table: { disable: true } },
    helperProps: { table: { disable: true } },
    textareaProps: { table: { disable: true } },
    suffix: { table: { disable: true } },
    minLength: { table: { disable: true } },
    type: { table: { disable: true } },
    prefixStyles: { table: { disable: true } },
    suffixStyles: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента TextArea со всеми настраиваемыми пропсами.',
      },
    },
  },
};
