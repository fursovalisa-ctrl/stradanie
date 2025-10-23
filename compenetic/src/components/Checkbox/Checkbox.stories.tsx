import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Checkbox } from './Checkbox';
import '../../i18n';
import {
  Header,
  Section,
  SubSection,
  List,
  Divider,
  Grid,
  Variant,
  Table,
  pageStyles,
} from '../StoryComponents';

const noop = () => null;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Main story
export const Specification = () => (
  <div style={pageStyles}>
    <Header title={'Полная спецификация компонента «Checkbox»'} />

    <Divider />

    <Section title={'1. Размеры (size)'}>
      <Table
        headers={['Значение', 'Описание', 'Размер чекбокса']}
        rows={[
          [<code>medium</code>, 'Основной размер (по умолчанию)', '20×20 px'],
          [<code>large</code>, 'Большой размер', '24×24 px'],
        ]}
      />

      <Grid>
        <Variant title={'Medium (Default)'} paramText={'size: medium'}>
          <Checkbox name={'medium-checkbox'} size={'medium'} value={false} onChange={noop}>
            Средний размер
          </Checkbox>
        </Variant>
        <Variant title={'Large'} paramText={'size: large'}>
          <Checkbox name={'large-checkbox'} size={'large'} value={false} onChange={noop}>
            Большой размер
          </Checkbox>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'2. Состояния (state)'}>
      <Table
        headers={['Состояние', 'Описание', 'ARIA атрибуты']}
        rows={[
          [<code>unchecked</code>, 'Неотмеченный чекбокс', <code>aria-checked="false"</code>],
          [<code>checked</code>, 'Отмеченный чекбокс', <code>aria-checked="true"</code>],
          [
            <code>indeterminate</code>,
            'Неопределенное состояние',
            <code>aria-checked="true"</code>,
          ],
          [
            <code>disabled</code>,
            'Отключенное состояние (включая loading)',
            <code>aria-disabled="true"</code>,
          ],
          [<code>error</code>, 'Состояние ошибки', <code>aria-invalid="true"</code>],
        ]}
      />

      <Grid>
        <Variant title={'Unchecked'} paramText={'value: false'}>
          <Checkbox name={'unchecked'} value={false} onChange={() => {}}>
            Неотмеченный
          </Checkbox>
        </Variant>
        <Variant title={'Checked'} paramText={'value: true'}>
          <Checkbox name={'checked'} value={true} onChange={() => {}}>
            Отмеченный
          </Checkbox>
        </Variant>
        <Variant title={'Indeterminate'} paramText={'indeterminate: true'}>
          <Checkbox name={'indeterminate'} value={true} indeterminate={true} onChange={() => {}}>
            Неопределенный
          </Checkbox>
        </Variant>
        <Variant title={'Disabled'} paramText={'disabled: true или loading: true'}>
          <Checkbox
            name={'disabled'}
            value={false}
            disabled={true}
            loading={true}
            onChange={() => {}}
          >
            Отключенный
          </Checkbox>
        </Variant>
        <Variant title={'Error'} paramText={'error: "Ошибка"'}>
          <Checkbox name={'error'} value={false} error={'Это поле обязательно'} onChange={() => {}}>
            С ошибкой
          </Checkbox>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'3. Состояния с ошибкой'}>
      <List
        items={[
          <span>
            <strong>Визуальное отображение</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>
                Во всех состояниях (unchecked, checked, indeterminate) одинаковое визуальное
                отображение ошибки
              </li>
            </ul>
          </span>,
          <span>
            <strong>ARIA атрибуты</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>
                <code>aria-invalid="true"</code> на чекбоксе
              </li>
              <li style={{ marginBottom: '4px' }}>
                <code>aria-errormessage</code> указывает на ID сообщения об ошибке
              </li>
            </ul>
          </span>,
        ]}
      />

      <Grid>
        <Variant title={'Unchecked с ошибкой'} paramText={'value: false, error: "Ошибка"'}>
          <Checkbox
            name={'error-unchecked'}
            value={false}
            error={'Это поле обязательно для заполнения'}
            onChange={() => {}}
          >
            Неотмеченный с ошибкой
          </Checkbox>
        </Variant>
        <Variant title={'Checked с ошибкой'} paramText={'value: true, error: "Ошибка"'}>
          <Checkbox
            name={'error-checked'}
            value={true}
            error={'Неверное значение'}
            onChange={() => {}}
          >
            Отмеченный с ошибкой
          </Checkbox>
        </Variant>
        <Variant
          title={'Indeterminate с ошибкой'}
          paramText={'indeterminate: true, error: "Ошибка"'}
        >
          <Checkbox
            name={'error-indeterminate'}
            value={true}
            indeterminate={true}
            error={'Ошибка валидации'}
            onChange={() => {}}
          >
            Неопределенный с ошибкой
          </Checkbox>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'4. Загрузка (loading)'}>
      <List
        items={[
          <span>
            <strong>Поведение</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>Чекбокс становится неактивным</li>
              <li style={{ marginBottom: '4px' }}>Курсор меняется на not-allowed</li>
              <li style={{ marginBottom: '4px' }}>События клика блокируются</li>
            </ul>
          </span>,
        ]}
      />

      <Grid>
        <Variant title={'Loading unchecked'} paramText={'loading: true, value: false'}>
          <Checkbox name={'loading-unchecked'} value={false} loading={true} onChange={noop}>
            Загрузка (неотмеченный)
          </Checkbox>
        </Variant>
        <Variant title={'Loading checked'} paramText={'loading: true, value: true'}>
          <Checkbox name={'loading-checked'} value={true} loading={true} onChange={noop}>
            Загрузка (отмеченный)
          </Checkbox>
        </Variant>
        <Variant title={'Loading indeterminate'} paramText={'loading: true, indeterminate: true'}>
          <Checkbox
            name={'loading-indeterminate'}
            value={true}
            indeterminate={true}
            loading={true}
            onChange={noop}
          >
            Загрузка (неопределенный)
          </Checkbox>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'5. Интерактивность'}>
      <SubSection title={'5.1. Кликабельный лейбл'}>
        <List
          items={[
            <span>
              <strong>clickableLabel: true (по умолчанию)</strong>:
              <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>Весь элемент (чекбокс + лейбл) кликабелен</li>
                <li style={{ marginBottom: '4px' }}>Курсор pointer на лейбле</li>
                <li style={{ marginBottom: '4px' }}>Лейбл обернут в label элемент</li>
              </ul>
            </span>,
            <span>
              <strong>clickableLabel: false</strong>:
              <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>Кликабелен только сам чекбокс</li>
                <li style={{ marginBottom: '4px' }}>Лейбл отображается как обычный текст</li>
              </ul>
            </span>,
          ]}
        />

        <Grid>
          <Variant title={'Кликабельный лейбл'} paramText={'clickableLabel: true'}>
            <Checkbox name={'clickable'} clickableLabel={true}>
              Кликните на лейбл
            </Checkbox>
          </Variant>
          <Variant title={'Не кликабельный лейбл'} paramText={'clickableLabel: false'}>
            <Checkbox name={'non-clickable'} clickableLabel={false}>
              Кликните только на чекбокс
            </Checkbox>
          </Variant>
        </Grid>
      </SubSection>
    </Section>

    <Divider />

    <Section title={'6. Анимация'}>
      <Table
        headers={['Событие', 'Токен анимации', 'Длительность', 'Описание']}
        rows={[
          [
            'Нажатие',
            <code>semantic-animation-ease-in-out-tiger-200</code>,
            '200 мс',
            'Уменьшение масштаба на 4%',
          ],
          [
            'Отпускание',
            <code>semantic-animation-ease-in-out-tiger-200</code>,
            '200 мс',
            'Возврат к исходному размеру',
          ],
          [
            'Изменение состояния',
            <code>semantic-animation-ease-in-out-200</code>,
            '200 мс',
            'Плавное появление/исчезновение иконки',
          ],
          [
            'Hover',
            <code>semantic-animation-ease-in-out-tiger-200</code>,
            '200 мс',
            'Изменение цвета рамки и фона',
          ],
        ]}
      />
    </Section>

    <Divider />

    <Section title={'7. Design Tokens'}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(600px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Unchecked State */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            padding: '24px',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ marginBottom: '16px' }}>
              <Checkbox name={'tokens-unchecked'} value={false}>
                Unchecked State
              </Checkbox>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Unchecked State</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Стандартное неотмеченное состояние чекбокса.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>checkbox-background-unchecked</code>],
                ['Рамка', <code>checkbox-border-unchecked</code>],
                ['Hover рамка', <code>checkbox-border-hover</code>],
                ['Focus обводка', <code>checkbox-focus-ring</code>],
              ]}
            />
          </div>
        </div>

        {/* Checked State */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            padding: '24px',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ marginBottom: '16px' }}>
              <Checkbox name={'tokens-checked'} value={true}>
                Checked State
              </Checkbox>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Checked State</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Отмеченное состояние с галочкой.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>checkbox-background-checked</code>],
                ['Рамка', <code>checkbox-background-checked</code>],
                ['Иконка', <code>checkbox-icon-color</code>],
                ['Hover фон', <code>base-blue-550</code>],
              ]}
            />
          </div>
        </div>

        {/* Disabled State */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            padding: '24px',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ marginBottom: '16px' }}>
              <Checkbox name={'tokens-disabled'} value={true} disabled={true}>
                Disabled State
              </Checkbox>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Disabled State</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Отключенное состояние с серым фоном.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>checkbox-background-disabled</code>],
                ['Рамка', <code>checkbox-border-disabled</code>],
                ['Иконка', <code>checkbox-icon-disabled</code>],
                ['Курсор', <code>not-allowed</code>],
              ]}
            />
          </div>
        </div>

        {/* Error State */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            padding: '24px',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ marginBottom: '16px' }}>
              <Checkbox name={'tokens-error'} value={false} error={'Ошибка валидации'}>
                Error State
              </Checkbox>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Error State</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Состояние ошибки с красной рамкой.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Рамка', <code>checkbox-border-error</code>],
                ['Focus обводка', <code>checkbox-focus-ring-error</code>],
                ['Текст ошибки', <code>base-red-600</code>],
                ['ARIA', <code>aria-invalid="true"</code>],
              ]}
            />
          </div>
        </div>
      </div>
    </Section>

    <Divider />

    <Section title={'8. Взаимодействие с другими компонентами'}>
      <List
        items={[
          <span>
            <strong>Горизонтальные стеки</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>Отступ между чекбоксами: 16px.</li>
              <li style={{ marginBottom: '4px' }}>Выравнивание по центру.</li>
            </ul>
          </span>,
          <span>
            <strong>Вертикальные списки</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>Отступ между элементами: 12px.</li>
              <li style={{ marginBottom: '4px' }}>Выравнивание по левому краю.</li>
            </ul>
          </span>,
        ]}
      />

      <div style={{ marginTop: '24px', marginBottom: '24px' }}>
        <div style={{ marginBottom: '12px' }}>Пример горизонтального стека:</div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Checkbox name={'stack1'} value={false}>
            Опция 1
          </Checkbox>
          <Checkbox name={'stack2'} value={true}>
            Опция 2
          </Checkbox>
          <Checkbox name={'stack3'} value={false}>
            Опция 3
          </Checkbox>
        </div>
      </div>

      <div style={{ marginTop: '24px', marginBottom: '24px' }}>
        <div style={{ marginBottom: '12px' }}>Пример вертикального списка:</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox name={'list1'} value={false}>
            Первый пункт
          </Checkbox>
          <Checkbox name={'list2'} value={true}>
            Второй пункт
          </Checkbox>
          <Checkbox name={'list3'} value={false}>
            Третий пункт
          </Checkbox>
        </div>
      </div>
    </Section>
  </div>
);

/**
 * Интерактивная демонстрация с настраиваемыми пропсами
 */
const PlaygroundComponent = (args) => {
  const [checked, setChecked] = useState(args.value || false);

  return (
    <div style={{ padding: 20 }}>
      <Checkbox {...args} value={checked} onChange={setChecked} />
    </div>
  );
};

export const Playground = {
  render: PlaygroundComponent,
  args: {
    name: 'playground-checkbox',
    value: false,
    size: 'medium',
    indeterminate: false,
    loading: false,
    error: '',
    disabled: false,
    clickableLabel: true,
    children: 'Чекбокс',
  },
  argTypes: {
    // Скрытые служебные/технические пропсы
    name: { table: { disable: true }, control: false },
    value: { table: { disable: true }, control: false },
    containerClassName: { table: { disable: true }, control: false },
    className: { table: { disable: true }, control: false },
    containerStyle: { table: { disable: true }, control: false },
    style: { table: { disable: true }, control: false },
    tabIndex: { table: { disable: true }, control: false },
    onChange: { table: { disable: true }, control: false },
    'data-testid': { table: { disable: true }, control: false },

    size: {
      options: ['medium', 'large'],
      control: { type: 'radio' },
    },
    clickableLabel: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
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
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента Checkbox со всеми настраиваемыми пропсами.',
      },
    },
  },
};
