import type { Meta } from '@storybook/react';
import { Button } from './Button';
import '../../i18n';
import {
  Header,
  Section,
  SubSection,
  List,
  Divider,
  CodeBlock,
  Grid,
  Variant,
  Table,
  pageStyles,
} from '../StoryComponents';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

const MapMarkerIcon = () => (
  <svg
    width={'20'}
    height={'20'}
    viewBox={'0 0 20 20'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      d={
        'M10 1.25C6.82 1.25 4.25 3.82 4.25 7C4.25 11.25 10 18.75 10 18.75C10 18.75 15.75 11.25 15.75 7C15.75 3.82 13.18 1.25 10 1.25ZM10 9C8.9 9 8 8.1 8 7C8 5.9 8.9 5 10 5C11.1 5 12 5.9 12 7C12 8.1 11.1 9 10 9Z'
      }
      fill={'currentColor'}
    />
  </svg>
);

// Main story
export const Specification = () => (
  <div style={pageStyles}>
    <Header title={'Полная спецификация компонента «Button»'} />

    <Divider />

    <Section title={'1. Размеры (size)'}>
      <Table
        headers={[
          'Значение',
          'Описание',
          'Отступы (верт./гориз.)',
          'Размер иконки',
          'Примеры использования',
        ]}
        rows={[
          [
            <code>large</code>,
            'Лендинги, авторизация',
            '16px / 20px',
            '24×24 px',
            'Главный призыв к действию',
          ],
          [
            <code>medium</code>,
            'Основной размер (частое использование)',
            '12px / 16px',
            '24×24 px',
            'Формы, диалоги',
          ],
          [
            <code>small</code>,
            'Редкие случаи',
            '10px / 12px',
            '16×16 px',
            'Компактные интерфейсы, таблицы',
          ],
        ]}
      />

      <Grid>
        <Variant title={'Large'} paramText={'size: l'}>
          <Button size={'l'} buttonStyle={'accent'}>
            Скачать 127 Кб
          </Button>
        </Variant>
        <Variant title={'Medium (Default)'} paramText={'size: m'}>
          <Button size={'m'} buttonStyle={'accent'}>
            Откликнуться
          </Button>
        </Variant>
        <Variant title={'Small'} paramText={'size: s'}>
          <Button size={'s'} buttonStyle={'accent'}>
            Удалить
          </Button>
        </Variant>
        <Variant title={'Extra Small'} paramText={'size: xs'}>
          <Button size={'xs'} buttonStyle={'accent'}>
            Like
          </Button>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'2. Типы (mode) и стили (style)'}>
      <SubSection title={'2.1. Типы'}>
        <Table
          headers={['Тип', 'Назначение', 'Пример токена (фон)']}
          rows={[
            [
              <code>primary</code>,
              'Главное действие на странице',
              <code>button-background-neutral</code>,
            ],
            [
              <code>secondary</code>,
              'Второстепенное действие',
              <code>button-background-neutral-secondary</code>,
            ],
            [
              <code>tertiary</code>,
              'Наименее важные действия',
              <code>button-background-neutral-tertiary</code>,
            ],
          ]}
        />

        <Grid>
          <Variant title={'Primary'} paramText={'mode: primary'}>
            <Button mode={'primary'} buttonStyle={'accent'}>
              Оплатить и разместить
            </Button>
          </Variant>
          <Variant title={'Secondary'} paramText={'mode: secondary'}>
            <Button mode={'secondary'} buttonStyle={'accent'}>
              В избранное
            </Button>
          </Variant>
          <Variant title={'Tertiary'} paramText={'mode: tertiary'}>
            <Button mode={'tertiary'} buttonStyle={'accent'}>
              Сообщения
            </Button>
          </Variant>
        </Grid>
      </SubSection>

      <SubSection title={'2.2. Стили'}>
        <Table
          headers={['', 'Neutral', 'Accent', 'Positive', 'Negative', 'Contrast']}
          rows={[
            [
              <strong>Primary</strong>,
              <Button
                mode={'primary'}
                buttonStyle={'neutral'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Neutral
              </Button>,
              <Button
                mode={'primary'}
                buttonStyle={'accent'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Accent
              </Button>,
              <Button
                mode={'primary'}
                buttonStyle={'positive'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Positive
              </Button>,
              <Button
                mode={'primary'}
                buttonStyle={'negative'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Negative
              </Button>,
              <div style={{ background: '#333', padding: '8px', borderRadius: '8px' }}>
                <Button
                  mode={'primary'}
                  buttonStyle={'contrast'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                >
                  Contrast
                </Button>
              </div>,
            ],
            [
              <strong>Secondary</strong>,
              <Button
                mode={'secondary'}
                buttonStyle={'neutral'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Neutral
              </Button>,
              <Button
                mode={'secondary'}
                buttonStyle={'accent'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Accent
              </Button>,
              <Button
                mode={'secondary'}
                buttonStyle={'positive'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Positive
              </Button>,
              <Button
                mode={'secondary'}
                buttonStyle={'negative'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Negative
              </Button>,
              <div style={{ background: '#333', padding: '8px', borderRadius: '8px' }}>
                <Button
                  mode={'secondary'}
                  buttonStyle={'contrast'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                >
                  Contrast
                </Button>
              </div>,
            ],
            [
              <strong>Tertiary</strong>,
              <Button
                mode={'tertiary'}
                buttonStyle={'neutral'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Neutral
              </Button>,
              <Button
                mode={'tertiary'}
                buttonStyle={'accent'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Accent
              </Button>,
              <Button
                mode={'tertiary'}
                buttonStyle={'positive'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Positive
              </Button>,
              <Button
                mode={'tertiary'}
                buttonStyle={'negative'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
              >
                Negative
              </Button>,
              <div style={{ background: '#333', padding: '8px', borderRadius: '8px' }}>
                <Button
                  mode={'tertiary'}
                  buttonStyle={'contrast'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                >
                  Contrast
                </Button>
              </div>,
            ],
          ]}
        />

        <h3 style={{ marginTop: '24px', marginBottom: '16px', fontSize: '16px', fontWeight: 500 }}>
          Растянутые кнопки с распределением контента
        </h3>

        <Table
          headers={['', 'Neutral', 'Accent', 'Positive', 'Negative', 'Contrast']}
          rows={[
            [
              <strong>Primary</strong>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'primary'}
                  buttonStyle={'neutral'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Neutral
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'primary'}
                  buttonStyle={'accent'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Accent
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'primary'}
                  buttonStyle={'positive'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Positive
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'primary'}
                  buttonStyle={'negative'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Negative
                </Button>
              </div>,
              <div
                style={{ background: '#333', padding: '8px', borderRadius: '8px', width: '300px' }}
              >
                <Button
                  mode={'primary'}
                  buttonStyle={'contrast'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Contrast
                </Button>
              </div>,
            ],
            [
              <strong>Secondary</strong>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'secondary'}
                  buttonStyle={'neutral'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Neutral
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'secondary'}
                  buttonStyle={'accent'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Accent
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'secondary'}
                  buttonStyle={'positive'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Positive
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'secondary'}
                  buttonStyle={'negative'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Negative
                </Button>
              </div>,
              <div
                style={{ background: '#333', padding: '8px', borderRadius: '8px', width: '300px' }}
              >
                <Button
                  mode={'secondary'}
                  buttonStyle={'contrast'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Contrast
                </Button>
              </div>,
            ],
            [
              <strong>Tertiary</strong>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'tertiary'}
                  buttonStyle={'neutral'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Neutral
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'tertiary'}
                  buttonStyle={'accent'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Accent
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'tertiary'}
                  buttonStyle={'positive'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Positive
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'tertiary'}
                  buttonStyle={'negative'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Negative
                </Button>
              </div>,
              <div
                style={{ background: '#333', padding: '8px', borderRadius: '8px', width: '300px' }}
              >
                <Button
                  mode={'tertiary'}
                  buttonStyle={'contrast'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                  spaceBetween
                >
                  Contrast
                </Button>
              </div>,
            ],
          ]}
        />

        <h3 style={{ marginTop: '24px', marginBottom: '16px', fontSize: '16px', fontWeight: 500 }}>
          Растянутые кнопки с центрированным контентом
        </h3>

        <Table
          headers={['', 'Neutral', 'Accent', 'Positive', 'Negative', 'Contrast']}
          rows={[
            [
              <strong>Primary</strong>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'primary'}
                  buttonStyle={'neutral'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Neutral
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'primary'}
                  buttonStyle={'accent'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Accent
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'primary'}
                  buttonStyle={'positive'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Positive
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'primary'}
                  buttonStyle={'negative'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Negative
                </Button>
              </div>,
              <div
                style={{ background: '#333', padding: '8px', borderRadius: '8px', width: '300px' }}
              >
                <Button
                  mode={'primary'}
                  buttonStyle={'contrast'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Contrast
                </Button>
              </div>,
            ],
            [
              <strong>Secondary</strong>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'secondary'}
                  buttonStyle={'neutral'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Neutral
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'secondary'}
                  buttonStyle={'accent'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Accent
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'secondary'}
                  buttonStyle={'positive'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Positive
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'secondary'}
                  buttonStyle={'negative'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Negative
                </Button>
              </div>,
              <div
                style={{ background: '#333', padding: '8px', borderRadius: '8px', width: '300px' }}
              >
                <Button
                  mode={'secondary'}
                  buttonStyle={'contrast'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Contrast
                </Button>
              </div>,
            ],
            [
              <strong>Tertiary</strong>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'tertiary'}
                  buttonStyle={'neutral'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Neutral
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'tertiary'}
                  buttonStyle={'accent'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Accent
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'tertiary'}
                  buttonStyle={'positive'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Positive
                </Button>
              </div>,
              <div style={{ width: '300px' }}>
                <Button
                  mode={'tertiary'}
                  buttonStyle={'negative'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Negative
                </Button>
              </div>,
              <div
                style={{ background: '#333', padding: '8px', borderRadius: '8px', width: '300px' }}
              >
                <Button
                  mode={'tertiary'}
                  buttonStyle={'contrast'}
                  icon={<MapMarkerIcon />}
                  postfix={'→'}
                  stretched
                >
                  Contrast
                </Button>
              </div>,
            ],
          ]}
        />
      </SubSection>
    </Section>

    <Divider />

    <Section title={'3. Состояния (state)'}>
      <Table
        headers={['Состояние', 'Описание', 'Курсор', 'Анимация']}
        rows={[
          [<code>default</code>, 'Стандартное состояние', <code>default</code>, '—'],
          [
            <code>loading</code>,
            'Контент заменяется лоадером',
            <code>not-allowed</code>,
            <code>semantic-animation-ease-in-out-100</code>,
          ],
          [<code>disabled</code>, 'Блокировка взаимодействия', <code>not-allowed</code>, '—'],
          [
            <code>hovered</code>,
            'Эффект при наведении (не для тач-устройств)',
            <code>pointer</code>,
            <code>semantic-animation-ease-in-out-200</code>,
          ],
          [
            <code>pressed</code>,
            'Уменьшение размера на 4% (токен: scale-pressed)',
            <code>pointer</code>,
            'Масштабирование ×0.96',
          ],
          [<code>focused</code>, 'Обводка 4px (токен: semantic-borderWidth-tab-focused)', '—', '—'],
        ]}
      />

      <Grid>
        <Variant title={'Default'} paramText={'state: default'}>
          <Button buttonStyle={'accent'}>Стандартное состояние</Button>
        </Variant>
        <Variant title={'Loading'} paramText={'state: loading'}>
          <Button loading buttonStyle={'accent'}>
            Загрузка
          </Button>
        </Variant>
        <Variant title={'Disabled'} paramText={'state: disabled'}>
          <Button disabled buttonStyle={'accent'}>
            Недоступно
          </Button>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'4. Бейдж (show_badge)'}>
      <SubSection title={'4.1. Параметры'}>
        <List
          items={[
            <span>
              <strong>Размеры</strong>:
              <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>
                  <code>small</code>: 16×16 px
                </li>
                <li style={{ marginBottom: '4px' }}>
                  <code>extra small</code>: 12×12 px - отображается как точка без текста
                </li>
              </ul>
            </span>,
            <span>
              <strong>Позиционирование</strong>:
              <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>
                  Для <code>extra small</code>: Центр на правом верхнем углу. Всегда отображается
                  как цветная точка.
                </li>
                <li style={{ marginBottom: '4px' }}>
                  Для <code>small</code>: Вплотную к правому верхнему углу внутри контура.
                </li>
              </ul>
            </span>,
            <span>
              <strong>Поведение</strong>:
              <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>
                  При длинных числах бейдж (размер <code>small</code>) растягивается влево (правая
                  граница фиксирована).
                </li>
                <li style={{ marginBottom: '4px' }}>
                  Бейдж <code>extra-small</code> всегда отображается как точка, независимо от
                  переданного значения.
                </li>
                <li style={{ marginBottom: '4px' }}>
                  Бейдж всегда отображается поверх маски, вырезающей угол кнопки.
                </li>
              </ul>
            </span>,
          ]}
        />
      </SubSection>

      <SubSection title={'4.2. Примеры'}>
        <CodeBlock
          content={`{
  "size": "large",
  "show_badge": true,
  "badge_size": "small",
  "label": "В избранное"
}`}
        />

        <Grid>
          <Variant title={'С бейджем'} paramText={"showBadge: true, badgeValue: '5'"}>
            <Button showBadge badgeValue={'5'}>
              В избранное
            </Button>
          </Variant>
          <Variant title={'Малый бейдж'} paramText={"badgeSize: 'small'"}>
            <Button showBadge badgeValue={'12'} badgeSize={'small'}>
              Сообщения
            </Button>
          </Variant>
          <Variant
            title={'Точечный индикатор'}
            paramText={"badgeSize: 'extra-small', значение не отображается"}
          >
            <Button showBadge badgeValue={'3'} badgeSize={'extra-small'}>
              Уведомления
            </Button>
          </Variant>
          <Variant title={'Большое значение'} paramText={"badgeValue: '999+'"}>
            <Button showBadge badgeValue={'999+'}>
              Новости
            </Button>
          </Variant>
        </Grid>
      </SubSection>
    </Section>

    <Divider />

    <Section title={'5. Label'}>
      <List
        items={[
          <span>
            <strong>Условия</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>
                При <code>showLabel: true</code> текст отображается всегда
              </li>
              <li style={{ marginBottom: '4px' }}>
                При <code>showLabel: false</code> текст скрыт, но доступен для скринридеров
              </li>
              <li style={{ marginBottom: '4px' }}>
                Если текст не помещается, он обрезается с многоточием
              </li>
            </ul>
          </span>,
        ]}
      />

      <Grid>
        <Variant title={'С текстом'} paramText={'showLabel: true'}>
          <Button mode={'primary'} buttonStyle={'accent'} icon={<MapMarkerIcon />}>
            Выбрать на карте
          </Button>
        </Variant>
        <Variant title={'Без текста'} paramText={'showLabel: false'}>
          <Button
            mode={'primary'}
            buttonStyle={'accent'}
            icon={<MapMarkerIcon />}
            aria-label={'Выбрать на карте'}
          />
        </Variant>
        <Variant title={'Текст поместился'} paramText={'width: 200px'}>
          <div style={{ width: '200px' }}>
            <Button mode={'primary'} buttonStyle={'accent'} icon={<MapMarkerIcon />} stretched>
              Выбрать
            </Button>
          </div>
        </Variant>
        <Variant title={'Текст не поместился'} paramText={'width: 150px'}>
          <div style={{ width: '150px' }}>
            <Button mode={'primary'} buttonStyle={'accent'} icon={<MapMarkerIcon />} stretched>
              Очень длинный текст, который не поместится в кнопку
            </Button>
          </div>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'6. Подпись (show_subcaption)'}>
      <List
        items={[
          <span>
            <strong>Условия</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>
                Не отображается при <code>size: small</code> и <code>size: extra&nbsp;small</code>.
              </li>
              <li style={{ marginBottom: '4px' }}>Скрывает иконку и постфикс, если включена.</li>
            </ul>
          </span>,
        ]}
      />

      <CodeBlock
        content={`{
  "label": "Скачать",
  "subcaption": "178 Кб",
  "show_subcaption": true
}`}
      />

      <Grid>
        <Variant title={'С подписью (Large)'} paramText={'size: large, showSubcaption: true'}>
          <Button size={'l'} showSubcaption subcaption={'178 Кб'}>
            Скачать
          </Button>
        </Variant>
        <Variant title={'С подписью (Medium)'} paramText={'size: medium, showSubcaption: true'}>
          <Button size={'m'} showSubcaption subcaption={'200 Мб'}>
            Скачать
          </Button>
        </Variant>
        <Variant title={'С подписью (Small)'} paramText={'size: small, showSubcaption: true'}>
          <Button size={'s'} showSubcaption subcaption={'300 Мб'}>
            Скачать
          </Button>
        </Variant>
        <Variant
          title={'С подписью (Extra Small)'}
          paramText={'size: extra small, showSubcaption: true'}
        >
          <Button size={'xs'} showSubcaption subcaption={'50 Кб'}>
            Скачать
          </Button>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title={'7. Иконка и постфикс'}>
      <SubSection title={'7.1. Иконка'}>
        <List
          items={[
            <span>
              <strong>Размеры</strong>:
              <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>
                  <code>large</code>: 24×24 px
                </li>
                <li style={{ marginBottom: '4px' }}>
                  <code>medium</code>: 24×24 px
                </li>
                <li style={{ marginBottom: '4px' }}>
                  <code>small</code>: 16×16 px
                </li>
              </ul>
            </span>,
          ]}
        />

        <Grid>
          <Variant title={'С иконкой'} paramText={'icon={<Icon />}'}>
            <Button mode={'primary'} buttonStyle={'accent'} icon={<MapMarkerIcon />}>
              Выбрать на карте
            </Button>
          </Variant>
          <Variant title={'Без иконки'} paramText={'icon={undefined}'}>
            <Button mode={'primary'} buttonStyle={'accent'}>
              Выбрать на карте
            </Button>
          </Variant>
          <Variant title={'Только иконка'} paramText={'icon={<Icon />}, без текста'}>
            <Button
              mode={'primary'}
              buttonStyle={'accent'}
              icon={<MapMarkerIcon />}
              aria-label={'Выбрать на карте'}
            />
          </Variant>
          <Variant title={'Иконка и постфикс'} paramText={'icon={<Icon />}, postfix="→"'}>
            <Button mode={'primary'} buttonStyle={'accent'} icon={<MapMarkerIcon />} postfix={'→'}>
              Выбрать на карте
            </Button>
          </Variant>
        </Grid>
      </SubSection>

      <SubSection title={'7.2. Постфикс'}>
        <List
          items={[
            <span>
              <strong>Условия</strong>:
              <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>
                  Постфикс может быть текстом или React компонентом
                </li>
                <li style={{ marginBottom: '4px' }}>
                  При <code>spaceBetween: true</code> постфикс группируется с иконкой справа
                </li>
                <li style={{ marginBottom: '4px' }}>
                  Скрывается при включенной подписи (<code>showSubcaption: true</code>)
                </li>
              </ul>
            </span>,
          ]}
        />

        <Grid>
          <Variant title={'С постфиксом'} paramText={'postfix="→"'}>
            <Button mode={'primary'} buttonStyle={'accent'} postfix={'→'}>
              Перейти
            </Button>
          </Variant>
          <Variant title={'Без постфикса'} paramText={'postfix={undefined}'}>
            <Button mode={'primary'} buttonStyle={'accent'}>
              Перейти
            </Button>
          </Variant>
          <Variant title={'Постфикс справа'} paramText={'postfix="→", spaceBetween: true'}>
            <div style={{ width: '200px' }}>
              <Button mode={'primary'} buttonStyle={'accent'} postfix={'→'} stretched spaceBetween>
                Перейти
              </Button>
            </div>
          </Variant>
          <Variant title={'Постфикс скрыт'} paramText={'postfix="→", showSubcaption: true'}>
            <Button
              mode={'primary'}
              buttonStyle={'accent'}
              postfix={'→'}
              showSubcaption
              subcaption={'Подпись'}
            >
              Перейти
            </Button>
          </Variant>
        </Grid>
      </SubSection>
    </Section>

    <Divider />

    <Section title={'8. Анимация'}>
      <Table
        headers={['Событие', 'Токен анимации', 'Длительность', 'Пример использования']}
        rows={[
          [
            'Нажатие',
            <code>semantic-animation-ease-in-out-100</code>,
            '100 мс',
            'Уменьшение масштаба',
          ],
          [
            'Отпускание',
            <code>semantic-animation-ease-in-out-200</code>,
            '200 мс',
            'Возврат к исходному размеру',
          ],
          ['Загрузка', <code>semantic-animation-ease-in-out-100</code>, '—', 'Индикатор прогресса'],
        ]}
      />
    </Section>

    <Divider />

    <Section title={'9. Design Tokens'}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(600px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Primary/Neutral */}
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
              <Button
                mode={'primary'}
                buttonStyle={'neutral'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Primary/Neutral
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Primary/Neutral</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Основной тип кнопки с нейтральным стилем. Используется для главных действий.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-neutral</code>],
                ['Лейбл', <code>button-text-neutral</code>],
                ['Иконка', <code>button-icon-neutral</code>],
                ['Постфикс', <code>button-postfix-text-neutral</code>],
                ['Обводка', <code>button-stroke-state-neutral-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Primary/Accent */}
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
              <Button
                mode={'primary'}
                buttonStyle={'accent'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Primary/Accent
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Primary/Accent</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Акцентный вариант основной кнопки. Привлекает внимание к важным действиям.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-accent</code>],
                ['Лейбл', <code>button-text-accent</code>],
                ['Иконка', <code>button-icon-accent</code>],
                ['Постфикс', <code>button-postfix-text-accent</code>],
                ['Обводка', <code>button-stroke-state-accent-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Primary/Positive */}
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
              <Button
                mode={'primary'}
                buttonStyle={'positive'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Primary/Positive
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Primary/Positive</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Позитивный вариант основной кнопки. Используется для успешных действий.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-positive</code>],
                ['Лейбл', <code>button-text-positive</code>],
                ['Иконка', <code>button-icon-positive</code>],
                ['Постфикс', <code>button-postfix-text-positive</code>],
                ['Обводка', <code>button-stroke-state-positive-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Primary/Negative */}
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
              <Button
                mode={'primary'}
                buttonStyle={'negative'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Primary/Negative
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Primary/Negative</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Негативный вариант основной кнопки. Используется для опасных действий.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-negative</code>],
                ['Лейбл', <code>button-text-negative</code>],
                ['Иконка', <code>button-icon-negative</code>],
                ['Постфикс', <code>button-postfix-text-negative</code>],
                ['Обводка', <code>button-stroke-state-negative-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Primary/Contrast */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            padding: '24px',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            background: '#333',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ marginBottom: '16px' }}>
              <Button
                mode={'primary'}
                buttonStyle={'contrast'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Primary/Contrast
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500', color: '#fff' }}>
                Primary/Contrast
              </p>
              <p style={{ margin: '0', color: '#94A3B8', fontSize: '14px' }}>
                Контрастный вариант основной кнопки. Используется на темных фонах.
              </p>
            </div>
          </div>
          <div style={{ flex: '1', color: '#fff' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                [
                  <span style={{ color: '#94a3b8' }}>Фон</span>,
                  <code style={{ color: '#94A3B8' }}>button-background-contrast</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Лейбл</span>,
                  <code style={{ color: '#94A3B8' }}>button-text-contrast</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Иконка</span>,
                  <code style={{ color: '#94A3B8' }}>button-icon-contrast</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Постфикс</span>,
                  <code style={{ color: '#94A3B8' }}>button-postfix-text-contrast</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Обводка</span>,
                  <code style={{ color: '#94A3B8' }}>
                    button-stroke-state-contrast-focused-accessible
                  </code>,
                ],
              ]}
            />
          </div>
        </div>

        {/* Secondary/Neutral */}
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
              <Button
                mode={'secondary'}
                buttonStyle={'neutral'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Secondary/Neutral
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Secondary/Neutral</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Второстепенный вариант кнопки с нейтральным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-neutral-secondary</code>],
                ['Лейбл', <code>button-text-neutral-secondary</code>],
                ['Иконка', <code>button-icon-neutral-secondary</code>],
                ['Постфикс', <code>button-postfix-text-neutral-secondary</code>],
                ['Обводка', <code>button-stroke-state-neutral-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Secondary/Accent */}
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
              <Button
                mode={'secondary'}
                buttonStyle={'accent'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Secondary/Accent
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Secondary/Accent</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Второстепенный вариант кнопки с акцентным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-accent-secondary</code>],
                ['Лейбл', <code>button-text-accent-secondary</code>],
                ['Иконка', <code>button-icon-accent-secondary</code>],
                ['Постфикс', <code>button-postfix-text-accent-secondary</code>],
                ['Обводка', <code>button-stroke-state-accent-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Secondary/Positive */}
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
              <Button
                mode={'secondary'}
                buttonStyle={'positive'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Secondary/Positive
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Secondary/Positive</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Второстепенный вариант кнопки с позитивным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-positive-secondary</code>],
                ['Лейбл', <code>button-text-positive-secondary</code>],
                ['Иконка', <code>button-icon-positive-secondary</code>],
                ['Постфикс', <code>button-postfix-text-positive-secondary</code>],
                ['Обводка', <code>button-stroke-state-positive-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Secondary/Negative */}
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
              <Button
                mode={'secondary'}
                buttonStyle={'negative'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Secondary/Negative
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Secondary/Negative</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Второстепенный вариант кнопки с негативным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-negative-secondary</code>],
                ['Лейбл', <code>button-text-negative-secondary</code>],
                ['Иконка', <code>button-icon-negative-secondary</code>],
                ['Постфикс', <code>button-postfix-text-negative-secondary</code>],
                ['Обводка', <code>button-stroke-state-negative-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Secondary/Contrast */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            padding: '24px',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            background: '#333',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ marginBottom: '16px' }}>
              <Button
                mode={'secondary'}
                buttonStyle={'contrast'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Secondary/Contrast
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500', color: '#fff' }}>
                Secondary/Contrast
              </p>
              <p style={{ margin: '0', color: '#94A3B8', fontSize: '14px' }}>
                Второстепенный вариант кнопки с контрастным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1', color: '#fff' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                [
                  <span style={{ color: '#94a3b8' }}>Фон</span>,
                  <code style={{ color: '#94A3B8' }}>button-background-contrast-secondary</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Лейбл</span>,
                  <code style={{ color: '#94A3B8' }}>button-text-contrast-secondary</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Иконка</span>,
                  <code style={{ color: '#94A3B8' }}>button-icon-contrast-secondary</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Постфикс</span>,
                  <code style={{ color: '#94A3B8' }}>button-postfix-text-contrast-secondary</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Обводка</span>,
                  <code style={{ color: '#94A3B8' }}>
                    button-stroke-state-contrast-focused-accessible
                  </code>,
                ],
              ]}
            />
          </div>
        </div>

        {/* Tertiary/Neutral */}
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
              <Button
                mode={'tertiary'}
                buttonStyle={'neutral'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Tertiary/Neutral
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Tertiary/Neutral</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Третичный вариант кнопки с нейтральным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-neutral-tertiary</code>],
                ['Лейбл', <code>button-text-neutral-tertiary</code>],
                ['Иконка', <code>button-icon-neutral-tertiary</code>],
                ['Постфикс', <code>button-postfix-text-neutral-tertiary</code>],
                ['Обводка', <code>button-stroke-state-neutral-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Tertiary/Accent */}
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
              <Button
                mode={'tertiary'}
                buttonStyle={'accent'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Tertiary/Accent
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Tertiary/Accent</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Третичный вариант кнопки с акцентным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-accent-tertiary</code>],
                ['Лейбл', <code>button-text-accent-tertiary</code>],
                ['Иконка', <code>button-icon-accent-tertiary</code>],
                ['Постфикс', <code>button-postfix-text-accent-tertiary</code>],
                ['Обводка', <code>button-stroke-state-accent-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Tertiary/Positive */}
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
              <Button
                mode={'tertiary'}
                buttonStyle={'positive'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Tertiary/Positive
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Tertiary/Positive</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Третичный вариант кнопки с позитивным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-positive-tertiary</code>],
                ['Лейбл', <code>button-text-positive-tertiary</code>],
                ['Иконка', <code>button-icon-positive-tertiary</code>],
                ['Постфикс', <code>button-postfix-text-positive-tertiary</code>],
                ['Обводка', <code>button-stroke-state-positive-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Tertiary/Negative */}
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
              <Button
                mode={'tertiary'}
                buttonStyle={'negative'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Tertiary/Negative
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Tertiary/Negative</p>
              <p style={{ margin: '0', color: '#64748B', fontSize: '14px' }}>
                Третичный вариант кнопки с негативным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                ['Фон', <code>button-background-negative-tertiary</code>],
                ['Лейбл', <code>button-text-negative-tertiary</code>],
                ['Иконка', <code>button-icon-negative-tertiary</code>],
                ['Постфикс', <code>button-postfix-text-negative-tertiary</code>],
                ['Обводка', <code>button-stroke-state-negative-focused-accessible</code>],
              ]}
            />
          </div>
        </div>

        {/* Tertiary/Contrast */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            padding: '24px',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            background: '#333',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ marginBottom: '16px' }}>
              <Button
                mode={'tertiary'}
                buttonStyle={'contrast'}
                icon={<MapMarkerIcon />}
                postfix={'→'}
                stretched
                spaceBetween
              >
                Tertiary/Contrast
              </Button>
            </div>
            <div>
              <p style={{ margin: '0 0 8px', fontWeight: '500', color: '#fff' }}>
                Tertiary/Contrast
              </p>
              <p style={{ margin: '0', color: '#94A3B8', fontSize: '14px' }}>
                Третичный вариант кнопки с контрастным стилем.
              </p>
            </div>
          </div>
          <div style={{ flex: '1', color: '#fff' }}>
            <Table
              headers={['Свойство', 'Токен']}
              rows={[
                [
                  <span style={{ color: '#94a3b8' }}>Фон</span>,
                  <code style={{ color: '#94A3B8' }}>button-background-contrast-tertiary</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Лейбл</span>,
                  <code style={{ color: '#94A3B8' }}>button-text-contrast-tertiary</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Иконка</span>,
                  <code style={{ color: '#94A3B8' }}>button-icon-contrast-tertiary</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Постфикс</span>,
                  <code style={{ color: '#94A3B8' }}>button-postfix-text-contrast-tertiary</code>,
                ],
                [
                  <span style={{ color: '#94a3b8' }}>Обводка</span>,
                  <code style={{ color: '#94A3B8' }}>
                    button-stroke-state-contrast-focused-accessible
                  </code>,
                ],
              ]}
            />
          </div>
        </div>
      </div>
    </Section>

    <Divider />

    <Section title={'10. Взаимодействие с другими компонентами'}>
      <List
        items={[
          <span>
            <strong>Горизонтальные стеки</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>Отступ между кнопками: 12 px.</li>
            </ul>
          </span>,
          <span>
            <strong>Состояния с бейджем</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>
                Бейдж не влияет на размеры кнопки и соседние элементы.
              </li>
            </ul>
          </span>,
        ]}
      />

      <div style={{ marginTop: '24px', marginBottom: '24px' }}>
        <div style={{ marginBottom: '12px' }}>Пример горизонтального стека:</div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button mode={'primary'} buttonStyle={'neutral'}>
            Поиск
          </Button>
          <Button mode={'primary'} buttonStyle={'neutral'} showBadge badgeValue={'12'}>
            Фильтры
          </Button>
          <Button mode={'primary'} buttonStyle={'neutral'}>
            Вакансии
          </Button>
        </div>
      </div>
    </Section>
  </div>
);

/**
 * Интерактивная демонстрация с настраиваемыми пропсами
 */
export const Playground = {
  args: {
    children: 'Кнопка',
    mode: 'primary',
    buttonStyle: 'accent',
    size: 'm',
    loading: false,
    disabled: false,
    icon: <MapMarkerIcon />,
    postfix: '→',
    showBadge: false,
    badgeValue: '2',
    badgeSize: 'small',
    showSubcaption: false,
    subcaption: 'Подпись',
    stretched: false,
    spaceBetween: false,
  },
  argTypes: {
    mode: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    buttonStyle: {
      options: ['neutral', 'accent', 'positive', 'negative', 'contrast'],
      control: { type: 'select' },
    },
    size: {
      options: ['l', 'm', 's', 'xs'],
      control: { type: 'radio' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      options: ['none', 'map-marker'],
      mapping: {
        none: undefined,
        'map-marker': <MapMarkerIcon />,
      },
      control: { type: 'radio' },
    },
    postfix: {
      options: ['none', 'arrow'],
      mapping: {
        none: undefined,
        arrow: '→',
      },
      control: { type: 'radio' },
    },
    badgeSize: {
      options: ['small', 'extra-small', 'medium'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
    badgeValue: {
      control: { type: 'text' },
    },
    subcaption: {
      control: { type: 'text' },
    },
    showBadge: {
      control: { type: 'boolean' },
    },
    showSubcaption: {
      control: { type: 'boolean' },
    },
    stretched: {
      control: { type: 'boolean' },
    },
    spaceBetween: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная демонстрация компонента Button со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        style={{
          padding: 20,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          background: context.args.buttonStyle === 'contrast' ? '#333' : 'transparent',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
