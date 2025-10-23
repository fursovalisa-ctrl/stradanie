import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import type { TypographyTitleProps, TypographyTextProps } from './Typography.type';
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

const meta: Meta<typeof Typography.Title> = {
  title: 'Components/Typography',
  component: Typography.Title,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Main story
export const Specification = () => (
  <div style={pageStyles}>
    <Header title='Полная спецификация компонента «Типографика»' />

    <Divider />

    <Section title='1. Варианты типографики'>
      <Table
        headers={[
          'Вариант',
          'Описание',
          'HTML тег по умолчанию',
          'Размеры',
          'Примеры использования',
        ]}
        rows={[
          [
            <code>Title</code>,
            'Заголовки страниц и разделов',
            <code>h1-h5</code>,
            '1-5',
            'Главные заголовки, названия страниц',
          ],
          [
            <code>Subtitle</code>,
            'Подзаголовки и второстепенные заголовки',
            <code>h1-h5</code>,
            '1-4',
            'Подзаголовки разделов, карточек',
          ],
          [
            <code>Label</code>,
            'Метки, подписи, короткий текст',
            <code>p</code>,
            '1-5',
            'Метки полей, статусы, теги',
          ],
          [
            <code>Paragraph</code>,
            'Основной текст, абзацы',
            <code>p</code>,
            '1-4',
            'Описания, основной контент',
          ],
        ]}
      />

      <Grid>
        <Variant title='Title' paramText='Typography.Title'>
          <Typography.Title size={2}>Заголовок первого уровня</Typography.Title>
        </Variant>
        <Variant title='Subtitle' paramText='Typography.Subtitle'>
          <Typography.Subtitle size={2}>Подзаголовок второго уровня</Typography.Subtitle>
        </Variant>
        <Variant title='Label' paramText='Typography.Label'>
          <Typography.Label size={3}>Метка компонента</Typography.Label>
        </Variant>
        <Variant title='Paragraph' paramText='Typography.Paragraph'>
          <Typography.Paragraph size={3}>
            Основной текст для описания контента и предоставления информации пользователю.
          </Typography.Paragraph>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title='2. Размеры (size)'>
      <Table
        headers={['Размер', 'Описание', 'Размер шрифта', 'Высота строки', 'Примеры использования']}
        rows={[
          [<code>1</code>, 'Самый крупный размер', '32px', '40px', 'Главные заголовки страниц'],
          [<code>2</code>, 'Крупный размер', '28px', '36px', 'Заголовки разделов'],
          [
            <code>3</code>,
            'Средний размер (по умолчанию)',
            '24px',
            '32px',
            'Подзаголовки, основной текст',
          ],
          [<code>4</code>, 'Малый размер', '20px', '28px', 'Метки, второстепенный текст'],
          [<code>5</code>, 'Самый мелкий размер', '16px', '24px', 'Дополнительная информация'],
        ]}
      />

      <SubSection title='2.1. Title - все размеры'>
        <Grid>
          <Variant title='Size 1'>
            <Typography.Title size={1}>Title size 1</Typography.Title>
          </Variant>
          <Variant title='Size 2'>
            <Typography.Title size={2}>Title size 2</Typography.Title>
          </Variant>
          <Variant title='Size 3 (Default)'>
            <Typography.Title size={3}>Title size 3</Typography.Title>
          </Variant>
          <Variant title='Size 4'>
            <Typography.Title size={4}>Title size 4</Typography.Title>
          </Variant>
          <Variant title='Size 5'>
            <Typography.Title size={5}>Title size 5</Typography.Title>
          </Variant>
        </Grid>
      </SubSection>

      <SubSection title='2.2. Subtitle - все размеры'>
        <Grid>
          <Variant title='Size 1' paramText='size: 1'>
            <Typography.Subtitle size={1}>Subtitle size 1</Typography.Subtitle>
          </Variant>
          <Variant title='Size 2' paramText='size: 2'>
            <Typography.Subtitle size={2}>Subtitle size 2</Typography.Subtitle>
          </Variant>
          <Variant title='Size 3 (Default)' paramText='size: 3'>
            <Typography.Subtitle size={3}>Subtitle size 3</Typography.Subtitle>
          </Variant>
          <Variant title='Size 4' paramText='size: 4'>
            <Typography.Subtitle size={4}>Subtitle size 4</Typography.Subtitle>
          </Variant>
        </Grid>
      </SubSection>

      <SubSection title='2.3. Label - все размеры'>
        <Grid>
          <Variant title='Size 1' paramText='size: 1'>
            <Typography.Label size={1}>Label size 1</Typography.Label>
          </Variant>
          <Variant title='Size 2' paramText='size: 2'>
            <Typography.Label size={2}>Label size 2</Typography.Label>
          </Variant>
          <Variant title='Size 3 (Default)' paramText='size: 3'>
            <Typography.Label size={3}>Label size 3</Typography.Label>
          </Variant>
          <Variant title='Size 4' paramText='size: 4'>
            <Typography.Label size={4}>Label size 4</Typography.Label>
          </Variant>
          <Variant title='Size 5' paramText='size: 5'>
            <Typography.Label size={5}>Label size 5</Typography.Label>
          </Variant>
        </Grid>
      </SubSection>

      <SubSection title='2.4. Paragraph - все размеры'>
        <Grid>
          <Variant title='Size 1' paramText='size: 1'>
            <Typography.Paragraph size={1}>
              Абзац первого размера с достаточно длинным текстом для демонстрации переноса строк.
            </Typography.Paragraph>
          </Variant>
          <Variant title='Size 2' paramText='size: 2'>
            <Typography.Paragraph size={2}>
              Абзац второго размера с достаточно длинным текстом для демонстрации переноса строк.
            </Typography.Paragraph>
          </Variant>
          <Variant title='Size 3 (Default)' paramText='size: 3'>
            <Typography.Paragraph size={3}>
              Абзац третьего размера с достаточно длинным текстом для демонстрации переноса строк.
            </Typography.Paragraph>
          </Variant>
          <Variant title='Size 4' paramText='size: 4'>
            <Typography.Paragraph size={4}>
              Абзац четвертого размера с достаточно длинным текстом для демонстрации переноса строк.
            </Typography.Paragraph>
          </Variant>
        </Grid>
      </SubSection>
    </Section>

    <Divider />

    <Section title='3. Стили (typographyStyle)'>
      <Table
        headers={['Стиль', 'Описание', 'Цвет текста', 'Примеры использования']}
        rows={[
          [
            <code>primary</code>,
            'Основной стиль (по умолчанию)',
            <span style={{ color: 'var(--text-primary)' }}>Основной цвет текста</span>,
            'Основной контент, заголовки',
          ],
          [
            <code>secondary</code>,
            'Второстепенный стиль',
            <span style={{ color: 'var(--text-secondary)' }}>Второстепенный цвет текста</span>,
            'Дополнительная информация',
          ],
          [
            <code>tertiary</code>,
            'Третичный стиль',
            <span style={{ color: 'var(--text-tertiary)' }}>Третичный цвет текста</span>,
            'Менее важная информация',
          ],
          [
            <code>accent</code>,
            'Акцентный стиль',
            <span style={{ color: 'var(--text-accent)' }}>Акцентный цвет</span>,
            'Важные элементы, ссылки',
          ],
          [
            <code>accent-secondary</code>,
            'Вторичный акцентный стиль',
            <span style={{ color: 'var(--text-accent-secondary)' }}>Вторичный акцентный цвет</span>,
            'Дополнительные акцентные элементы',
          ],
          [
            <code>positive</code>,
            'Позитивный стиль',
            <span style={{ color: 'var(--text-positive)' }}>Зеленый цвет</span>,
            'Успешные действия, статусы',
          ],
          [
            <code>positive-secondary</code>,
            'Вторичный позитивный стиль',
            <span style={{ color: 'var(--text-positive-secondary)' }}>Вторичный зеленый цвет</span>,
            'Дополнительные успешные элементы',
          ],
          [
            <code>negative</code>,
            'Негативный стиль',
            <span style={{ color: 'var(--text-negative)' }}>Красный цвет</span>,
            'Ошибки, предупреждения',
          ],
          [
            <code>negative-secondary</code>,
            'Вторичный негативный стиль',
            <span style={{ color: 'var(--text-negative-secondary)' }}>Вторичный красный цвет</span>,
            'Дополнительные элементы ошибок',
          ],
          [
            <code>warning</code>,
            'Предупреждающий стиль',
            <span style={{ color: 'var(--text-warning)' }}>Оранжевый цвет</span>,
            'Предупреждения, уведомления',
          ],
          [
            <code>warning-secondary</code>,
            'Вторичный предупреждающий стиль',
            <span style={{ color: 'var(--text-warning-secondary)' }}>
              Вторичный оранжевый цвет
            </span>,
            'Дополнительные предупреждения',
          ],
          [
            <code>special</code>,
            'Специальный стиль',
            <span style={{ color: 'var(--text-special)' }}>Специальный цвет</span>,
            'Особые случаи',
          ],
          [
            <code>special-secondary</code>,
            'Вторичный специальный стиль',
            <span style={{ color: 'var(--text-special-secondary)' }}>
              Вторичный специальный цвет
            </span>,
            'Дополнительные особые элементы',
          ],
          [
            <code>contrast</code>,
            'Контрастный стиль',
            <span
              style={{
                color: 'var(--text-contrast)',
                background: '#000',
                padding: '4px 8px',
                borderRadius: '4px',
                display: 'inline-block',
              }}
            >
              Контрастный цвет
            </span>,
            'Темные фоны',
          ],
          [
            <code>contrast-secondary</code>,
            'Вторичный контрастный стиль',
            <span
              style={{
                color: 'var(--text-contrast-secondary)',
                background: '#000',
                padding: '4px 8px',
                borderRadius: '4px',
                display: 'inline-block',
              }}
            >
              Вторичный контрастный цвет
            </span>,
            'Дополнительные элементы на темных фонах',
          ],
        ]}
      />

      <Grid>
        <Variant title='Primary' paramText='typographyStyle: primary'>
          <Typography.Title size={3} typographyStyle='primary'>
            Основной заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Secondary' paramText='typographyStyle: secondary'>
          <Typography.Title size={3} typographyStyle='secondary'>
            Второстепенный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Tertiary' paramText='typographyStyle: tertiary'>
          <Typography.Title size={3} typographyStyle='tertiary'>
            Третичный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Accent' paramText='typographyStyle: accent'>
          <Typography.Title size={3} typographyStyle='accent'>
            Акцентный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Accent Secondary' paramText='typographyStyle: accent-secondary'>
          <Typography.Title size={3} typographyStyle='accent-secondary'>
            Вторичный акцентный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Positive' paramText='typographyStyle: positive'>
          <Typography.Title size={3} typographyStyle='positive'>
            Позитивный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Positive Secondary' paramText='typographyStyle: positive-secondary'>
          <Typography.Title size={3} typographyStyle='positive-secondary'>
            Вторичный позитивный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Negative' paramText='typographyStyle: negative'>
          <Typography.Title size={3} typographyStyle='negative'>
            Негативный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Negative Secondary' paramText='typographyStyle: negative-secondary'>
          <Typography.Title size={3} typographyStyle='negative-secondary'>
            Вторичный негативный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Warning' paramText='typographyStyle: warning'>
          <Typography.Title size={3} typographyStyle='warning'>
            Предупреждающий заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Warning Secondary' paramText='typographyStyle: warning-secondary'>
          <Typography.Title size={3} typographyStyle='warning-secondary'>
            Вторичный предупреждающий заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Special' paramText='typographyStyle: special'>
          <Typography.Title size={3} typographyStyle='special'>
            Специальный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Special Secondary' paramText='typographyStyle: special-secondary'>
          <Typography.Title size={3} typographyStyle='special-secondary'>
            Вторичный специальный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Contrast' paramText='typographyStyle: contrast'>
          <div style={{ background: '#000', padding: '16px', borderRadius: '8px' }}>
            <Typography.Title size={3} typographyStyle='contrast'>
              Контрастный заголовок
            </Typography.Title>
          </div>
        </Variant>
        <Variant title='Contrast Secondary' paramText='typographyStyle: contrast-secondary'>
          <div style={{ background: '#000', padding: '16px', borderRadius: '8px' }}>
            <Typography.Title size={3} typographyStyle='contrast-secondary'>
              Вторичный контрастный
            </Typography.Title>
          </div>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title='4. Начертания (fontWeight)'>
      <SubSection title='4.1. Title и Subtitle'>
        <Table
          headers={['Начертание', 'Описание', 'Значение', 'Применение']}
          rows={[
            [
              <code>semibold</code>,
              'Полужирное начертание (по умолчанию)',
              '600',
              'Заголовки и подзаголовки',
            ],
          ]}
        />

        <Grid>
          <Variant title='Semibold (Default)' paramText='fontWeight: semibold'>
            <Typography.Title size={3} fontWeight='semibold'>
              Полужирный заголовок
            </Typography.Title>
          </Variant>
        </Grid>
      </SubSection>

      <SubSection title='4.2. Label'>
        <Table
          headers={['Начертание', 'Описание', 'Значение', 'Применение']}
          rows={[
            [<code>regular</code>, 'Обычное начертание (по умолчанию)', '400', 'Основные метки'],
            [<code>medium</code>, 'Среднее начертание', '500', 'Важные метки, выделенный текст'],
          ]}
        />

        <Grid>
          <Variant title='Regular (Default)' paramText='fontWeight: regular'>
            <Typography.Label size={3} fontWeight='regular'>
              Обычная метка
            </Typography.Label>
          </Variant>
          <Variant title='Medium' paramText='fontWeight: medium'>
            <Typography.Label size={3} fontWeight='medium'>
              Важная метка
            </Typography.Label>
          </Variant>
        </Grid>
      </SubSection>

      <SubSection title='4.3. Paragraph'>
        <Table
          headers={['Начертание', 'Описание', 'Значение', 'Применение']}
          rows={[
            [
              <code>regular</code>,
              'Обычное начертание (единственное доступное)',
              '400',
              'Основной текст, абзацы',
            ],
          ]}
        />

        <Grid>
          <Variant title='Regular (Default)' paramText='fontWeight: regular'>
            <Typography.Paragraph size={3} fontWeight='regular'>
              Обычный текст абзаца
            </Typography.Paragraph>
          </Variant>
        </Grid>
      </SubSection>
    </Section>

    <Divider />

    <Section title='5. HTML теги (as)'>
      <Table
        headers={['Вариант', 'Доступные теги', 'По умолчанию', 'Примеры использования']}
        rows={[
          [
            <code>Title</code>,
            <code>h1, h2, h3, h4, h5, h6</code>,
            <code>h1-h5 (в зависимости от размера)</code>,
            'Семантические заголовки',
          ],
          [
            <code>Subtitle</code>,
            <code>h1, h2, h3, h4, h5, h6</code>,
            <code>h1-h5 (в зависимости от размера)</code>,
            'Семантические подзаголовки',
          ],
          [<code>Label</code>, <code>span, p, label, div</code>, <code>p</code>, 'Метки, подписи'],
          [
            <code>Paragraph</code>,
            <code>p, span, label, div</code>,
            <code>p</code>,
            'Абзацы, основной текст',
          ],
        ]}
      />

      <Grid>
        <Variant title='Title as h1' paramText='as: "h1"'>
          <Typography.Title size={1} as='h1'>
            Главный заголовок
          </Typography.Title>
        </Variant>
        <Variant title='Subtitle as h2' paramText='as: "h2"'>
          <Typography.Subtitle size={2} as='h2'>
            Подзаголовок раздела
          </Typography.Subtitle>
        </Variant>
        <Variant title='Label as span' paramText='as: "span"'>
          <Typography.Label size={3} as='span'>
            Метка в строке
          </Typography.Label>
        </Variant>
        <Variant title='Paragraph as div' paramText='as: "div"'>
          <Typography.Paragraph size={3} as='div'>
            Текст в div контейнере
          </Typography.Paragraph>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title='6. Состояния'>
      <Table
        headers={['Состояние', 'Описание', 'Визуальное изменение', 'Применение']}
        rows={[
          [
            <code>default</code>,
            'Стандартное состояние',
            'Нормальное отображение',
            'Активный контент',
          ],
          [
            <code>disabled</code>,
            'Неактивное состояние',
            'Пониженная прозрачность',
            'Отключенный контент',
          ],
        ]}
      />

      <Grid>
        <Variant title='Default' paramText='disabled: false'>
          <Typography.Title size={3}>Активный заголовок</Typography.Title>
        </Variant>
        <Variant title='Disabled' paramText='disabled: true'>
          <Typography.Title size={3} disabled>
            Неактивный заголовок
          </Typography.Title>
        </Variant>
      </Grid>
    </Section>

    <Divider />

    <Section title='7. Примеры использования'>
      <SubSection title='7.1. Иерархия заголовков'>
        <div style={{ marginBottom: '24px' }}>
          <Typography.Title size={1} as='h1'>
            Главная страница
          </Typography.Title>
          <Typography.Subtitle size={2} as='h2'>
            Раздел услуг
          </Typography.Subtitle>
          <Typography.Title size={3} as='h3'>
            Подраздел
          </Typography.Title>
          <Typography.Paragraph size={3}>
            Описание раздела с подробной информацией о предоставляемых услугах и возможностях.
          </Typography.Paragraph>
        </div>
      </SubSection>

      <SubSection title='7.2. Карточка с типографикой'>
        <div
          style={{
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '400px',
          }}
        >
          <Typography.Title size={2} as='h2'>
            Название карточки
          </Typography.Title>
          <Typography.Subtitle size={3} as='h3' typographyStyle='secondary'>
            Подзаголовок карточки
          </Typography.Subtitle>
          <Typography.Paragraph size={3}>
            Описание карточки с основной информацией о продукте или услуге.
          </Typography.Paragraph>
          <div style={{ marginTop: '16px' }}>
            <Typography.Label size={4} typographyStyle='accent'>
              Статус: Активен
            </Typography.Label>
          </div>
        </div>
      </SubSection>

      <SubSection title='7.3. Форма с метками'>
        <div style={{ maxWidth: '300px' }}>
          <Typography.Label size={3} as='label'>
            Имя пользователя
          </Typography.Label>
          <input
            type='text'
            placeholder='Введите имя'
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
              marginTop: '4px',
              marginBottom: '16px',
            }}
          />
          <Typography.Label size={3} as='label'>
            Email
          </Typography.Label>
          <input
            type='email'
            placeholder='Введите email'
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
              marginTop: '4px',
            }}
          />
        </div>
      </SubSection>
    </Section>

    <Divider />

    <Section title='8. CSS Переменные и состояния'>
      <SubSection title='8.0. Тест CSS переменных'>
        <div style={{ marginBottom: '24px' }}>
          <p>Проверка работы CSS переменных в Storybook:</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-primary)' }}>Primary: var(--text-primary)</span>
            <span style={{ color: 'var(--text-secondary)' }}>Secondary: var(--text-secondary)</span>
            <span style={{ color: 'var(--text-accent)' }}>Accent: var(--text-accent)</span>
            <span style={{ color: 'var(--text-positive)' }}>Positive: var(--text-positive)</span>
            <span style={{ color: 'var(--text-negative)' }}>Negative: var(--text-negative)</span>
            <span style={{ color: 'var(--text-warning)' }}>Warning: var(--text-warning)</span>
            <span style={{ color: 'var(--text-special)' }}>Special: var(--text-special)</span>
            <span
              style={{
                color: 'var(--text-contrast)',
                background: '#000',
                padding: '4px 8px',
                borderRadius: '4px',
              }}
            >
              Contrast: var(--text-contrast)
            </span>
          </div>
          <div style={{ marginTop: '16px' }}>
            <p>Disabled состояния:</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--text-state-primary-disabled)' }}>Primary disabled</span>
              <span style={{ color: 'var(--text-state-accent-disabled)' }}>Accent disabled</span>
              <span style={{ color: 'var(--text-state-contrast-disabled)' }}>
                Contrast disabled
              </span>
            </div>
          </div>
        </div>
      </SubSection>
      <SubSection title='8.1. Цвета текста'>
        <Table
          headers={['Стиль', 'CSS Переменная', 'Описание', 'Состояние disabled']}
          rows={[
            [
              <code>primary</code>,
              <code>--text-primary</code>,
              <span style={{ color: 'var(--text-primary)' }}>Основной цвет текста (черный)</span>,
              <span style={{ color: 'var(--text-state-primary-disabled)' }}>
                --text-state-primary-disabled
              </span>,
            ],
            [
              <code>secondary</code>,
              <code>--text-secondary</code>,
              <span style={{ color: 'var(--text-secondary)' }}>
                Второстепенный цвет текста (серый)
              </span>,
              <span style={{ color: 'var(--text-state-secondary-disabled)' }}>
                --text-state-secondary-disabled
              </span>,
            ],
            [
              <code>tertiary</code>,
              <code>--text-tertiary</code>,
              <span style={{ color: 'var(--text-tertiary)' }}>
                Третичный цвет текста (светло-серый)
              </span>,
              <span style={{ color: 'var(--text-state-tertiary-disabled)' }}>
                --text-state-tertiary-disabled
              </span>,
            ],
            [
              <code>accent</code>,
              <code>--text-accent</code>,
              <span style={{ color: 'var(--text-accent)' }}>Акцентный цвет (основной бренд)</span>,
              <span style={{ color: 'var(--text-state-accent-disabled)' }}>
                --text-state-accent-disabled
              </span>,
            ],
            [
              <code>positive</code>,
              <code>--text-positive</code>,
              <span style={{ color: 'var(--text-positive)' }}>Позитивный цвет (зеленый)</span>,
              <span style={{ color: 'var(--text-state-positive-disabled)' }}>
                --text-state-positive-disabled
              </span>,
            ],
            [
              <code>negative</code>,
              <code>--text-negative</code>,
              <span style={{ color: 'var(--text-negative)' }}>Негативный цвет (красный)</span>,
              <span style={{ color: 'var(--text-state-negative-disabled)' }}>
                --text-state-negative-disabled
              </span>,
            ],
            [
              <code>warning</code>,
              <code>--text-warning</code>,
              <span style={{ color: 'var(--text-warning)' }}>
                Предупреждающий цвет (оранжевый)
              </span>,
              <span style={{ color: 'var(--text-state-warning-disabled)' }}>
                --text-state-warning-disabled
              </span>,
            ],
            [
              <code>special</code>,
              <code>--text-special</code>,
              <span style={{ color: 'var(--text-special)' }}>Специальный цвет (фиолетовый)</span>,
              <span style={{ color: 'var(--text-state-special-disabled)' }}>
                --text-state-special-disabled
              </span>,
            ],
            [
              <code>contrast</code>,
              <code>--text-contrast</code>,
              <span
                style={{
                  color: 'var(--text-contrast)',
                  background: '#000',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'inline-block',
                }}
              >
                Контрастный цвет (белый)
              </span>,
              <span
                style={{
                  color: 'var(--text-state-contrast-disabled)',
                  background: '#000',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'inline-block',
                }}
              >
                --text-state-contrast-disabled
              </span>,
            ],
          ]}
        />
      </SubSection>

      <SubSection title='8.2. Вторичные цвета'>
        <Table
          headers={['Стиль', 'CSS Переменная', 'Описание', 'Состояние disabled']}
          rows={[
            [
              <code>accent + secondary</code>,
              <code>--text-accent-secondary</code>,
              <span style={{ color: 'var(--text-accent-secondary)' }}>
                Вторичный акцентный цвет
              </span>,
              <span style={{ color: 'var(--text-state-accent-secondary-disabled)' }}>
                --text-state-accent-secondary-disabled
              </span>,
            ],
            [
              <code>positive + secondary</code>,
              <code>--text-positive-secondary</code>,
              <span style={{ color: 'var(--text-positive-secondary)' }}>
                Вторичный позитивный цвет
              </span>,
              <span style={{ color: 'var(--text-state-positive-secondary-disabled)' }}>
                --text-state-positive-secondary-disabled
              </span>,
            ],
            [
              <code>negative + secondary</code>,
              <code>--text-negative-secondary</code>,
              <span style={{ color: 'var(--text-negative-secondary)' }}>
                Вторичный негативный цвет
              </span>,
              <span style={{ color: 'var(--text-state-negative-secondary-disabled)' }}>
                --text-state-negative-secondary-disabled
              </span>,
            ],
            [
              <code>warning + secondary</code>,
              <code>--text-warning-secondary</code>,
              <span style={{ color: 'var(--text-warning-secondary)' }}>
                Вторичный предупреждающий цвет
              </span>,
              <span style={{ color: 'var(--text-state-warning-secondary-disabled)' }}>
                --text-state-warning-secondary-disabled
              </span>,
            ],
            [
              <code>special + secondary</code>,
              <code>--text-special-secondary</code>,
              <span style={{ color: 'var(--text-special-secondary)' }}>
                Вторичный специальный цвет
              </span>,
              <span style={{ color: 'var(--text-state-special-secondary-disabled)' }}>
                --text-state-special-secondary-disabled
              </span>,
            ],
            [
              <code>contrast + secondary</code>,
              <code>--text-contrast-secondary</code>,
              <span
                style={{
                  color: 'var(--text-contrast-secondary)',
                  background: '#000',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'inline-block',
                }}
              >
                Вторичный контрастный цвет
              </span>,
              <span
                style={{
                  color: 'var(--text-state-contrast-secondary-disabled)',
                  background: '#000',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'inline-block',
                }}
              >
                --text-state-contrast-secondary-disabled
              </span>,
            ],
          ]}
        />
      </SubSection>

      <SubSection title='8.3. CSS классы'>
        <Table
          headers={['Компонент', 'CSS класс', 'Описание']}
          rows={[
            [
              <code>Typography</code>,
              <code>.typography</code>,
              'Базовый класс для всех вариантов типографики',
            ],
            [
              <code>Primary</code>,
              <code>.typography.primary</code>,
              'Основной стиль с цветом --text-primary',
            ],
            [
              <code>Secondary</code>,
              <code>.typography.secondary</code>,
              'Второстепенный стиль с цветом --text-secondary',
            ],
            [
              <code>Tertiary</code>,
              <code>.typography.tertiary</code>,
              'Третичный стиль с цветом --text-tertiary',
            ],
            [
              <code>Accent</code>,
              <code>.typography.accent</code>,
              'Акцентный стиль с цветом --text-accent',
            ],
            [
              <code>Accent Secondary</code>,
              <code>.typography.accent-secondary</code>,
              'Вторичный акцентный стиль с цветом --text-accent-secondary',
            ],
            [
              <code>Positive</code>,
              <code>.typography.positive</code>,
              'Позитивный стиль с цветом --text-positive',
            ],
            [
              <code>Positive Secondary</code>,
              <code>.typography.positive-secondary</code>,
              'Вторичный позитивный стиль с цветом --text-positive-secondary',
            ],
            [
              <code>Negative</code>,
              <code>.typography.negative</code>,
              'Негативный стиль с цветом --text-negative',
            ],
            [
              <code>Negative Secondary</code>,
              <code>.typography.negative-secondary</code>,
              'Вторичный негативный стиль с цветом --text-negative-secondary',
            ],
            [
              <code>Warning</code>,
              <code>.typography.warning</code>,
              'Предупреждающий стиль с цветом --text-warning',
            ],
            [
              <code>Warning Secondary</code>,
              <code>.typography.warning-secondary</code>,
              'Вторичный предупреждающий стиль с цветом --text-warning-secondary',
            ],
            [
              <code>Special</code>,
              <code>.typography.special</code>,
              'Специальный стиль с цветом --text-special',
            ],
            [
              <code>Special Secondary</code>,
              <code>.typography.special-secondary</code>,
              'Вторичный специальный стиль с цветом --text-special-secondary',
            ],
            [
              <code>Contrast</code>,
              <code>.typography.contrast</code>,
              'Контрастный стиль с цветом --text-contrast',
            ],
            [
              <code>Contrast Secondary</code>,
              <code>.typography.contrast-secondary</code>,
              'Вторичный контрастный стиль с цветом --text-contrast-secondary',
            ],
            [
              <code>Disabled</code>,
              <code>.typography.*.disabled</code>,
              'Неактивное состояние для всех стилей',
            ],
          ]}
        />
      </SubSection>
    </Section>

    <Divider />

    <Section title='9. Взаимодействие с другими компонентами'>
      <List
        items={[
          <span>
            <strong>Иерархия заголовков</strong>:
            <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
              <li style={{ marginBottom: '4px' }}>Используйте семантические теги h1-h6 для SEO.</li>
              <li style={{ marginBottom: '4px' }}>Соблюдайте правильную иерархию заголовков.</li>
            </ul>
          </span>,
        ]}
      />

      <div style={{ marginTop: '24px', marginBottom: '24px' }}>
        <div style={{ marginBottom: '12px' }}>Пример правильной иерархии:</div>
        <div style={{ border: '1px solid #E2E8F0', borderRadius: '8px', padding: '16px' }}>
          <Typography.Title size={1} as='h1'>
            Главная страница
          </Typography.Title>
          <Typography.Subtitle size={2} as='h2'>
            Раздел услуг
          </Typography.Subtitle>
          <Typography.Title size={3} as='h3'>
            Подраздел
          </Typography.Title>
          <Typography.Paragraph size={3}>
            Описание раздела с подробной информацией о предоставляемых услугах.
          </Typography.Paragraph>
        </div>
      </div>
    </Section>
  </div>
);

/**
 * Интерактивная демонстрация Title
 */
export const TitlePlayground: StoryObj<typeof Typography.Title> = {
  render: (args: TypographyTitleProps) => <Typography.Title {...args} />,
  args: {
    children: 'Заголовок',
    size: 3,
    typographyStyle: 'primary',
    fontWeight: 'semibold',
    disabled: false,
    as: 'h3',
  },
  argTypes: {
    size: {
      options: [1, 2, 3, 4, 5],
      control: { type: 'radio' },
    },
    typographyStyle: {
      options: [
        'primary',
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
      ],
      control: { type: 'select' },
    },
    fontWeight: {
      options: ['semibold'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Интерактивная демонстрация компонента Typography.Title со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        style={{
          padding: 20,
          background:
            context.args.typographyStyle === 'contrast' ||
            context.args.typographyStyle === 'contrast-secondary'
              ? '#000'
              : 'transparent',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

/**
 * Интерактивная демонстрация Subtitle
 */
export const SubtitlePlayground: StoryObj<typeof Typography.Subtitle> = {
  render: (args: TypographyTitleProps) => <Typography.Subtitle {...args} />,
  args: {
    children: 'Подзаголовок',
    size: 3,
    typographyStyle: 'primary',
    fontWeight: 'semibold',
    disabled: false,
    as: 'h3',
  },
  argTypes: {
    size: {
      options: [1, 2, 3, 4, 5],
      control: { type: 'radio' },
    },
    typographyStyle: {
      options: [
        'primary',
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
      ],
      control: { type: 'select' },
    },
    fontWeight: {
      options: ['semibold'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Интерактивная демонстрация компонента Typography.Subtitle со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        style={{
          padding: 20,
          background:
            context.args.typographyStyle === 'contrast' ||
            context.args.typographyStyle === 'contrast-secondary'
              ? '#000'
              : 'transparent',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

/**
 * Интерактивная демонстрация Label
 */
export const LabelPlayground: StoryObj<typeof Typography.Label> = {
  render: (args: TypographyTextProps) => <Typography.Label {...args} />,
  args: {
    children: 'Метка',
    size: 3,
    typographyStyle: 'primary',
    fontWeight: 'regular',
    disabled: false,
    as: 'span',
  },
  argTypes: {
    size: {
      options: [1, 2, 3, 4, 5],
      control: { type: 'radio' },
    },
    typographyStyle: {
      options: [
        'primary',
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
      ],
      control: { type: 'select' },
    },
    fontWeight: {
      options: ['regular', 'medium'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    as: {
      options: ['span', 'p', 'label', 'div'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Интерактивная демонстрация компонента Typography.Label со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        style={{
          padding: 20,
          background:
            context.args.typographyStyle === 'contrast' ||
            context.args.typographyStyle === 'contrast-secondary'
              ? '#000'
              : 'transparent',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

/**
 * Интерактивная демонстрация Paragraph
 */
export const ParagraphPlayground: StoryObj<typeof Typography.Paragraph> = {
  render: (args: TypographyTextProps) => <Typography.Paragraph {...args} />,
  args: {
    children:
      'Абзац с текстом для демонстрации компонента Typography.Paragraph и его возможностей.',
    size: 3,
    typographyStyle: 'primary',
    fontWeight: 'regular',
    disabled: false,
    as: 'p',
  },
  argTypes: {
    size: {
      options: [1, 2, 3, 4, 5],
      control: { type: 'radio' },
    },
    typographyStyle: {
      options: [
        'primary',
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
      ],
      control: { type: 'select' },
    },
    fontWeight: {
      options: ['regular'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    as: {
      options: ['p', 'span', 'label', 'div'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Интерактивная демонстрация компонента Typography.Paragraph со всеми настраиваемыми пропсами.',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        style={{
          padding: 20,
          background:
            context.args.typographyStyle === 'contrast' ||
            context.args.typographyStyle === 'contrast-secondary'
              ? '#000'
              : 'transparent',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
