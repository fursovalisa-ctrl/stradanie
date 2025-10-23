import { type Meta, type StoryFn } from '@storybook/react';
import { Avatar, type AvatarGroupProps, type AvatarProps } from './index.ts';
import {
  CodeBlock,
  Header,
  List,
  pageStyles,
  Row,
  Section,
  SubSection,
  Table,
} from '../StoryComponents';
import exampleImgUrl from './assets/avatar-example.jpg'; // with import

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const HomeIcon = () => (
  <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}>
    <path d={'M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z'} />
  </svg>
);

const NotificationIcon = () => (
  <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}>
    <path
      d={
        'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z'
      }
    />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}>
    <path d={'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'} />
  </svg>
);

const badgeIcons: AvatarProps['icon'][] = [HomeIcon, CheckIcon, NotificationIcon];

const avatarSizes: AvatarProps['size'][] = [24, 32, 40, 48, 56, 84, 96, 208];
const avatarColors: AvatarProps['colorScheme'][] = [
  'brand',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'lightblue',
  'blue',
  'purple',
  'contrast',
];

const characterNames = [
  'Илья Муромец', // «Илья Муромец» (мультфильм)
  'Алёша Попович', // «Алёша Попович и Тугарин Змей»
  'Добрыня Никитич', // «Добрыня Никитич и Змей Горыныч»
  'Василиса Премудрая', // «Иван Царевич и Серый Волк»
  'Иван Царевич', // «Иван Царевич и Серый Волк»
  'Маша Медведева', // «Маша и Медведь»
  'Волк Серый', // «Ну, погоди!»
  'Заяц Косой', // «Ну, погоди!»
  'Чебурашка Безымянный', // «Чебурашка и Крокодил Гена»
  'Гена Крокодилов', // «Чебурашка и Крокодил Гена»
  'Шапокляк Старушкина', // «Чебурашка и Крокодил Гена»
  'Карлсон Пропеллеров', // «Малыш и Карлсон»
  'Фрекен Бок Кухонная', // «Малыш и Карлсон»
  'Кот Матроскин', // «Простоквашино»
  'Пёс Шариков', // «Простоквашино»
];

const avatarVariants: AvatarProps['variant'][] = ['filled', 'light', 'outline'];

const placeholderTypes: AvatarProps['placeholderType'][] = ['male', 'female', 'org', 'neutral'];

// const exampleImgUrl =
//   'https://i.pinimg.com/originals/78/a3/fa/78a3fa3b123e1d222a2a1590e7b30994.jpg';

export const Specification: StoryFn<AvatarProps> = () => (
  <div style={pageStyles}>
    <Header title={'<Avatar />: спецификация'} />
    <h5>
      Компонент Avatar (Аватар) - элемент для отображения изображения пользователя, инициалов,
      иконки или плейсхолдера. Поддерживает различные размеры, формы и варианты отображения.
    </h5>
    <Section title={'Общее представление'}>
      <Row>
        <Avatar placeholderType={'org'} />
        <Avatar name={'Ивана Иванова'} />
        <Avatar imgSrc={exampleImgUrl} />
        <Avatar icon={badgeIcons[0]} />
      </Row>
    </Section>
    <Section title={'Цвета и варианты их применения'}>
      <Table
        headers={['variant/colorScheme', ...(avatarColors as string[])]}
        rows={avatarVariants.map((variant) => [
          variant,
          ...avatarColors.map((color, index) =>
            color === 'contrast' ? (
              <div
                key={color}
                style={{
                  flexWrap: 'wrap',
                  width: 100,
                  gap: 10,
                  padding: 10,
                  background: 'gray',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                {placeholderTypes.map((type) => (
                  <Avatar
                    key={type}
                    shape={index & 1 ? 'circle' : 'square'}
                    colorScheme={color}
                    variant={variant}
                    placeholderType={type}
                  />
                ))}

                <Avatar
                  shape={index & 1 ? 'circle' : 'square'}
                  colorScheme={color}
                  variant={variant}
                  icon={badgeIcons[index % badgeIcons.length]}
                />
                <Avatar
                  shape={index & 1 ? 'circle' : 'square'}
                  colorScheme={color}
                  variant={variant}
                  name={characterNames[index]}
                />
              </div>
            ) : (
              <Row key={color}>
                <Avatar
                  shape={index & 1 ? 'circle' : 'square'}
                  colorScheme={color}
                  variant={variant}
                  icon={badgeIcons[index % badgeIcons.length]}
                />
                <Avatar
                  shape={index & 1 ? 'circle' : 'square'}
                  colorScheme={color}
                  variant={variant}
                  placeholderType={placeholderTypes[index % placeholderTypes.length]}
                />
                <Avatar
                  shape={index & 1 ? 'circle' : 'square'}
                  colorScheme={color}
                  variant={variant}
                  name={characterNames[index]}
                />
              </Row>
            ),
          ),
        ])}
      />
    </Section>

    <Section title={'Размеры и форма'}>
      <Table
        headers={['Форма/Размер', ...avatarSizes.map((size) => `size=${size}`)]}
        rows={[
          [
            'Circle',
            ...avatarSizes.map((size, index) => (
              <Avatar
                key={`${size}-circle`}
                size={size}
                shape={'circle'}
                name={characterNames[index]}
              />
            )),
          ],
          [
            'Square',
            ...avatarSizes.map((size, index) => (
              <Avatar
                key={`${size}-circle`}
                size={size}
                shape={'square'}
                name={characterNames[index]}
              />
            )),
          ],
        ]}
      />
    </Section>
    <Section title={'Цвета (colorScheme)'}>
      <Table
        headers={['Тип', ...(avatarColors as string[])]}
        rows={[
          [
            'Инициалы (name)',
            ...avatarColors.map((color) => (
              <Avatar key={color} size={40} name={'AI'} colorScheme={color} />
            )),
          ],
          [
            'Иконка (icon)',
            ...avatarColors.map((color) => (
              <Avatar
                key={color}
                size={40}
                variant={'filled'}
                icon={HomeIcon}
                colorScheme={color}
              />
            )),
          ],
        ]}
      />
    </Section>
    <Section title={'Типы плейсхолдеров (placeholderType)'}>
      <Table
        headers={['Тип', 'Circle', 'Square']}
        rows={placeholderTypes.map((type) => [
          type,
          <Avatar key={`${type}-circle`} size={48} shape={'circle'} placeholderType={type} />,
          <Avatar key={`${type}-square`} size={48} shape={'square'} placeholderType={type} />,
        ])}
      />
    </Section>
    <Section title={'Механика выбора Mode'}>
      <SubSection title={'Приоритет отображения'}>
        <List
          items={[
            '1. Изображение (image) - если указан imgSrc и загрузка успешна',
            '2. Иконка (icon) - если указана иконка',
            '3. Инициалы (name) - если указано имя',
            '4. Плейсхолдер (placeholder) - во всех остальных случаях',
          ]}
        />
      </SubSection>

      <SubSection title={'Примеры по приоритету'}>
        <Table
          headers={['Режим', 'Пример', 'Код реализации']}
          rows={[
            [
              'Изображение (image)',
              <Avatar imgSrc={exampleImgUrl} imgAlt={'User avatar'} />,
              <CodeBlock
                content={`
<Avatar 
  imgSrc="https://example.com/avatar.jpg"
  imgAlt="User avatar"
/>
            `}
              />,
            ],
            [
              'Иконка (icon)',
              <Avatar icon={NotificationIcon} colorScheme={'purple'} />,
              <CodeBlock
                content={`
<Avatar 
  icon={<NotificationIcon />}
  colorScheme="purple"
/>
            `}
              />,
            ],
            [
              'Инициалы (name)',
              <Avatar name={'Иван Иванов'} colorScheme={'brand'} />,
              <CodeBlock
                content={`
<Avatar 
  name="Иван Иванов"
  colorScheme="brand"
/>
            `}
              />,
            ],
            [
              'Плейсхолдер (placeholder)',
              <Avatar placeholderType={'org'} />,
              <CodeBlock
                content={`
<Avatar 
  placeholderType="org"
/>
            `}
              />,
            ],
          ]}
        />
      </SubSection>

      <SubSection title={'Особые случаи'}>
        <Table
          headers={['Сценарий', 'Пример', 'Описание', 'Код реализации']}
          rows={[
            [
              'Ошибка загрузки изображения',
              <Avatar imgSrc={'invalid-url.jpg'} placeholderType={'neutral'} name={'ИИ'} />,
              'При ошибке загрузки автоматически переключается на следующий по приоритету mode',
              <CodeBlock
                content={`
<Avatar 
  imgSrc="invalid-url.jpg"
  placeholderType="neutral"
  name="ИИ"
/>
          `}
              />,
            ],
            [
              'Пустое имя',
              <Avatar name={''} icon={CheckIcon} />,
              'При пустом имени будет использована иконка, даже если name передано',
              <CodeBlock
                content={`
<Avatar 
  name=""
  icon={<CheckIcon />}
/>
          `}
              />,
            ],
            [
              'Все параметры пустые',
              <Avatar />,
              'Будет использован плейсхолдер с типом по умолчанию (neutral)',
              <CodeBlock
                content={`
<Avatar />
          `}
              />,
            ],
          ]}
        />
      </SubSection>
    </Section>
    <Section title={'Состояния'}>
      <Table
        headers={['Состояние', 'Пример', 'Описание']}
        rows={[
          ['Обычное', <Avatar size={48} name={'ИИ'} />, 'Стандартное состояние аватара'],
          [
            'Интерактивный',
            <Avatar size={48} name={'ИИ'} onClick={() => alert('Клик по аватару!')} />,
            'Курсор pointer, анимация при клике',
          ],
          [
            'Disabled',
            <Avatar size={48} name={'ИИ'} isDisabled />,
            'Прозрачность 48%, курсор not-allowed',
          ],
          [
            'Загрузка',
            <Avatar size={48} name={'ИИ'} isLoading />,
            'Состояние загрузки (можно добавить скелетон)',
          ],
        ]}
      />
    </Section>
    <Section title={'Комбинации с другими компонентами'}>
      <SubSection title={'Аватар с текстом'}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Avatar size={56} imgSrc={exampleImgUrl} />
          <div>
            <h4 style={{ margin: 0 }}>Иван Иванов</h4>
            <p style={{ margin: 0, color: '#666' }}>Менеджер проекта</p>
          </div>
        </div>
      </SubSection>
    </Section>
    <Section title={'Технические детали'}>
      <List
        items={[
          'Все размеры задаются в пикселях и фиксированы',
          'Формы: circle (круг) и square (квадрат со скругленными углами)',
          'Приоритет отображения: image > icon > name > placeholder',
          'При ошибке загрузки изображения автоматически отображается placeholder',
          'Инициалы генерируются из первых букв имени',
        ]}
      />
    </Section>

    <Section title={'Генерация инициалов'}>
      <Table
        headers={['Имя', 'Результат', 'Код']}
        rows={[
          ['Иван Иванов', <Avatar name={'Иван Иванов'} />, `name="Иван Иванов"`],
          ['John Doe', <Avatar name={'John Doe'} />, `name="John Doe"`],
          ['А', <Avatar name={'А'} />, `name="А"`],
        ]}
      />
    </Section>
  </div>
);

export const AvatarGroup: StoryFn<AvatarGroupProps> = () => (
  <div style={pageStyles}>
    <Header title={'<Avatar.Group />: спецификация'} />

    <Section title={'Основное использование'}>
      <SubSection title={'Простая группа'}>
        <Avatar.Group
          avatars={[{ name: 'Иван Иванов' }, { imgSrc: exampleImgUrl }, { icon: CheckIcon }]}
        />
        <CodeBlock
          content={`
<Avatar.Group
  avatars={[
    { name: 'Иван Иванов' },
    { imgSrc: 'https://example.com/avatar.jpg' },
    { icon: <CheckIcon /> },
  ]}
/>
          `}
        />
      </SubSection>

      <SubSection title={'С перекрытием и счетчиком'}>
        <Avatar.Group avatars={Array(5).fill({ name: 'User' })} overflowCount={3} overlap={0.5} />
        <CodeBlock
          content={`
<Avatar.Group
  avatars={Array(5).fill({ name: 'User' })}
  overflowCount={3}
  overlap={0.5}
/>
          `}
        />
      </SubSection>
    </Section>

    <Section title={'Пропсы AvatarGroup'}>
      <Table
        headers={['Пропс', 'Тип', 'По умолчанию', 'Описание']}
        rows={[
          ['avatars', 'AvatarProps[]', '[]', 'Массив аватаров для отображения'],
          ['size', '24 | 32 | 40 | ...', '40', 'Размер всех аватаров в группе'],
          ['shape', '"circle" | "square"', '"circle"', 'Форма аватаров'],
          ['overlap', '0.25 | 0.3 | 0.5', '0.3', 'Степень перекрытия аватаров'],
          ['overflowCount', 'number', '0', 'Количество скрытых аватаров (макс. 99+)'],
          ['overflowOnClick', 'function', '-', 'Обработчик клика на счетчик'],
        ]}
      />
    </Section>

    <Section title={'Варианты перекрытия (overlap)'}>
      <Table
        headers={['Значение', 'Пример', 'Код реализации']}
        rows={[
          ['0.25 (25%)', <Avatar.Group avatars={Array(3).fill({})} overlap={0.25} />],
          ['0.3 (30%)', <Avatar.Group avatars={Array(3).fill({})} overlap={0.3} />],
          ['0.5 (50%)', <Avatar.Group avatars={Array(3).fill({})} overlap={0.5} />],
        ].map(([label, example]) => [
          label,
          example,
          <CodeBlock content={`overlap={${(label as string).split(' ')[0]}}`} />,
        ])}
      />
    </Section>

    <Section title={'Счетчик переполнения (overflowCount)'}>
      <Table
        headers={['Количество', 'Пример', 'Описание', 'Код реализации']}
        rows={[
          [
            '1-99',
            <Avatar.Group avatars={Array(3).fill({})} overflowCount={5} />,
            'Отображается точное число',
          ],
          [
            '100-∞',
            <Avatar.Group avatars={Array(3).fill({})} overflowCount={100} />,
            'Отображается "99+"',
          ],
          [
            'С обработчиком',
            <Avatar.Group
              avatars={Array(3).fill({})}
              overflowCount={10}
              overflowOnClick={() => alert('Показать всех')}
            />,
            'Клик на счетчик вызывает обработчик',
          ],
        ].map(([count, example, desc]) => [
          count,
          example,
          desc,
          <CodeBlock
            content={
              count === 'С обработчиком'
                ? `overflowCount={10}\noverflowOnClick={() => alert('Показать всех')}`
                : `overflowCount={${(count as string).split('-')[0]}}`
            }
          />,
        ])}
      />
    </Section>

    <Section title={'Комбинирование с Avatar'}>
      <SubSection title={'Разные типы аватаров в группе'}>
        <Avatar.Group
          avatars={[
            { name: 'Иван Иванов', colorScheme: 'brand' },
            { imgSrc: exampleImgUrl, imgAlt: 'User' },
            { icon: NotificationIcon, colorScheme: 'red' },
            { placeholderType: 'org' },
          ]}
          size={56}
        />
        <CodeBlock
          content={`
<Avatar.Group
  avatars={[
    { name: 'Иван Иванов', colorScheme: 'brand' },
    { imgSrc: 'https://example.com/avatar.jpg', imgAlt: 'User' },
    { icon: <NotificationIcon />, colorScheme: 'red' },
    { placeholderType: 'org' },
  ]}
  size={56}
/>
          `}
        />
      </SubSection>

      <SubSection title={'Разные размеры и формы'}>
        <Row>
          <Avatar.Group avatars={Array(4).fill({})} shape={'circle'} size={48} />
          <Avatar.Group avatars={Array(4).fill({})} shape={'square'} size={84} />
        </Row>
        <CodeBlock
          content={`
// Круглые аватары
<Avatar.Group shape="circle" size={48} />

// Квадратные аватары
<Avatar.Group shape="square" size={64} />
          `}
        />
      </SubSection>
    </Section>

    <Section title={'Особенности реализации'}>
      <List
        items={[
          'Для обрезки аватаров используется SVG clipPath',
          'Между аватарами добавляется прозрачный зазор (3px) для визуального разделения',
          'Счетчик overflowCount использует иконку с текстом',
          'Компонент не рендерится при пустом массиве avatars',
        ]}
      />
    </Section>
  </div>
);

export const Playground: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

Playground.args = {
  size: 48,
  shape: 'circle',
  name: 'Иван Иванов',
  placeholderType: 'neutral',
  colorScheme: 'brand',
};

Playground.argTypes = {
  size: {
    control: { type: 'select' },
    options: avatarSizes,
    description: 'Размер аватара в пикселях',
  },
  shape: {
    control: { type: 'radio' },
    options: ['circle', 'square'],
    description: 'Форма аватара',
  },
  placeholderType: {
    control: { type: 'select' },
    options: placeholderTypes,
    description: 'Тип плейсхолдера',
  },
  colorScheme: {
    control: { type: 'select' },
    options: avatarColors,
    description: 'Цвет фона или иконки',
  },
  isDisabled: {
    options: [true, false],
    control: { type: 'radio' },
    description: 'Неактивное состояние',
  },
  isLoading: {
    options: [true, false],
    control: { type: 'radio' },
    description: 'Состояние загрузки',
  },

  // Скрываем неиспользуемые пропсы
  imgSrc: {
    table: {
      disable: true,
    },
  },
  imgAlt: {
    table: {
      disable: true,
    },
  },
  icon: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    },
  },
  style: {
    table: {
      disable: true,
    },
  },
  ['data-testid']: {
    table: {
      disable: true,
    },
  },
};
