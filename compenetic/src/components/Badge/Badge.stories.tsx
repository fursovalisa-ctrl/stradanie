import { type Meta, type StoryFn } from '@storybook/react';
import { Badge, type BadgeProps } from './index';
import { Avatar, type AvatarProps } from '../Avatar';
import { CodeBlock, Header, List, pageStyles, Row, Section, Table } from '../StoryComponents';
import { Button } from '../Button';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
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

const badgeColors: BadgeProps['colorScheme'][] = [
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
const badgeSizes: BadgeProps['size'][] = [40, 24, 20, 16, 14, 12, 10, 8];
const avatarSizes: AvatarProps['size'][] = [208, 96, 84, 56, 48, 40, 32, 24];
const badgePlacements: BadgeProps['position'][] = [
  'top-left',
  'top-center',
  'top-right',
  'middle-left',
  'middle-center',
  'middle-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];
const badgeInsidePlacements: BadgeProps['position'][] = [
  'top-left-inside',
  'top-center-inside',
  'top-right-inside',
  'middle-left-inside',
  'middle-center',
  'middle-right-inside',
  'bottom-left-inside',
  'bottom-center-inside',
  'bottom-right-inside',
];
const badgeVariants: BadgeProps['variant'][] = ['filled', 'light', 'outline', 'transparent'];
const badgeIcons: BadgeProps['icon'][] = [HomeIcon, CheckIcon, NotificationIcon];

const sizesTableItems: BadgeProps[] = [
  {
    icon: HomeIcon,
    size: 20,
    colorScheme: 'brand',
    variant: 'filled',
    position: 'top-right-inside',
  },
  {
    icon: NotificationIcon,
    size: 24,
    colorScheme: 'blue',
    variant: 'outline',
    position: 'top-right-inside',
  },
  {
    icon: CheckIcon,
    variant: 'transparent',
    size: 40,
    colorScheme: 'green',
    position: 'middle-center',
  },
];

export const Specification: StoryFn<BadgeProps> = () => (
  <div style={pageStyles}>
    <Header title={'Badge Component Specification'} />
    <h5>
      Компонент Badge (Бейдж) - индикатор для отображения статуса, уведомлений или количественных
      показателей. Может отображаться в виде текста, числа, иконки или точки. Поддерживает различные
      варианты стилизации и позиционирования.
    </h5>
    <Section title={'Общее представление'}>
      <Row>
        <Badge label={'Text'} onClick={() => alert('Бейдж нажат!')}>
          <Avatar />
        </Badge>
        <Badge label={99}>
          <Avatar />
        </Badge>
        <Badge label={'100+'}>
          <Avatar />
        </Badge>
        <Badge icon={badgeIcons[0]}>
          <Avatar />
        </Badge>
        <Badge size={8} position={'top-right-inside'}>
          <Avatar />
        </Badge>
      </Row>
    </Section>
    <div style={{ background: 'rgb(255,255,255)', padding: 10, borderRadius: 10, color: 'white' }}>
      <Section title={'Цвета и варианты их применения'}>
        <Table
          headers={['variant/colorScheme', ...(badgeColors as string[])]}
          rows={badgeVariants.map((variant) => [
            variant,
            ...badgeColors.map((color, index) =>
              color === 'contrast' ? (
                <div
                  style={{
                    background: 'gray',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <Badge
                    key={color}
                    colorScheme={color}
                    variant={variant}
                    label={'5'}
                    position={'top-right-inside'}
                  >
                    <Avatar
                      colorScheme={'contrast'}
                      size={56}
                      shape={index & 1 ? 'circle' : 'square'}
                    />
                  </Badge>
                </div>
              ) : (
                <Badge
                  key={color}
                  colorScheme={color}
                  variant={variant}
                  label={'5'}
                  position={'top-right-inside'}
                >
                  <Avatar size={56} shape={index & 1 ? 'circle' : 'square'} />
                </Badge>
              ),
            ),
          ])}
        />
      </Section>
    </div>
    <Section title={'Иконки в бейджах'}>
      <Table
        headers={['Отображение реализации', 'Код реализации']}
        rows={sizesTableItems.map((props) => [
          <Badge {...props}>
            <Avatar size={56} />
          </Badge>,
          <CodeBlock
            content={`
<Badge 
  icon={${props.icon?.name || 'IconComponent'}}
  size={${props.size}}
  colorScheme="${props.colorScheme}"
  variant="${props.variant}"
  position="${props.position}"
>
  <Avatar size={56} />
</Badge>
        `}
          />,
        ])}
      />
    </Section>
    <Section title={'Вариант "Точка" (Без лейбла или иконки)'}>
      <Row>
        {badgeSizes.map((size, index) => (
          <Badge key={size} colorScheme={badgeColors[index]} size={size} position={'top-right'}>
            <Button buttonStyle={'accent'} mode={'primary'} size={'l'}>
              {'size=' + size}
            </Button>
          </Badge>
        ))}
      </Row>
    </Section>
    <Section title={'Размеры'}>
      {badgeSizes.map((size, index) => (
        <Badge key={size} size={size} label={size} position={'bottom-right-inside'}>
          <Avatar size={avatarSizes[index]} />
        </Badge>
      ))}
    </Section>
    <Section title={'Position (Outside)'}>
      <Table
        headers={['', 'left', 'center', 'right']}
        rows={[
          [
            'top',
            ...badgePlacements.slice(0, 3).map((placement) => (
              <Badge key={placement} position={placement} label={'5'}>
                <Button buttonStyle={'accent'} mode={'primary'}>
                  {placement}
                </Button>
              </Badge>
            )),
          ],
          [
            'middle',
            ...badgePlacements.slice(3, 6).map((placement) => (
              <Badge key={placement} position={placement} label={'5'}>
                <Button buttonStyle={'accent'} mode={'primary'}>
                  {placement}
                </Button>
              </Badge>
            )),
          ],
          [
            'bottom',
            ...badgePlacements.slice(6).map((placement) => (
              <Badge key={placement} position={placement} label={'5'}>
                <Button buttonStyle={'accent'} mode={'primary'}>
                  {placement}
                </Button>
              </Badge>
            )),
          ],
        ]}
      />
    </Section>
    <Section title={'Position (Inside)'}>
      <Table
        headers={['', 'left', 'center', 'right']}
        rows={[
          [
            'top',
            ...badgeInsidePlacements.slice(0, 3).map((placement) => (
              <Badge key={placement} position={placement} label={'5'}>
                <Button buttonStyle={'accent'} mode={'primary'} size={'l'}>
                  {placement}
                </Button>
              </Badge>
            )),
          ],
          [
            'middle',
            ...badgeInsidePlacements.slice(3, 6).map((placement) => (
              <Badge key={placement} position={placement} label={'5'}>
                <Button buttonStyle={'accent'} mode={'primary'} size={'l'}>
                  {placement}
                </Button>
              </Badge>
            )),
          ],
          [
            'bottom',
            ...badgeInsidePlacements.slice(6).map((placement) => (
              <Badge key={placement} position={placement} label={'5'}>
                <Button buttonStyle={'accent'} mode={'primary'} size={'l'}>
                  {placement}
                </Button>
              </Badge>
            )),
          ],
        ]}
      />
    </Section>
    <Section title={'Механика выреза (Cutout)'}>
      <h5>
        Эффект выреза создается с помощью outline того же цвета, что и фон вокруг бейджа. Это
        создает визуальный эффект "выреза", когда бейдж как бы сливается с фоном родительского
        элемента.
      </h5>
      <List
        items={[
          <span>
            Эффект выреза создается с помощью CSS-свойства <code>outline</code>
          </span>,
          <span>
            Цвет обводки по умолчанию берется из фона родителя (определяется хуком{' '}
            <code>useBackgroundColor</code>)
          </span>,
          <span>
            Может быть переопределен через пропс <code>cutoutBackground</code>
          </span>,
          <span>
            Отключен для варианта <code>transparent</code>
          </span>,
          <span>Ширина обводки фиксирована на 3px</span>,
        ]}
      />

      <Table
        headers={['Описание', 'Визуальный пример']}
        rows={[
          [
            <CodeBlock
              content={`
<Badge label='5'>
  <Avatar />
</Badge>
              `}
            />,
            <div style={{ background: 'lightblue', margin: 20, padding: 20 }}>
              <Badge label={'5'} variant={'filled'} colorScheme={'red'}>
                <Avatar />
              </Badge>
              <p style={{ marginTop: '1rem' }}>Фон определяется автоматически из родителя</p>
            </div>,
          ],
          [
            <CodeBlock
              content={`
<Badge 
  label='5' 
  cutoutBackground='yellow'>
  <Avatar />
</Badge>
              `}
            />,
            <div style={{ background: 'lightblue', margin: 20, padding: 20, height: '100%' }}>
              <Badge label={'5'} variant={'filled'} colorScheme={'red'} cutoutBackground={'yellow'}>
                <Avatar />
              </Badge>
              <p style={{ marginTop: '1rem' }}>Желтый цвет обводки задан вручную</p>
            </div>,
          ],
          [
            <CodeBlock
              content={`
<Badge label='5' variant='transparent'>
  <Avatar />
</Badge>
              `}
            />,
            <div style={{ background: 'lightblue', margin: 20, padding: 20 }}>
              <Badge label={'5'} variant={'transparent'} colorScheme={'red'}>
                <Avatar />
              </Badge>
              <p style={{ marginTop: '1rem' }}>Нет фона и эффекта выреза</p>
            </div>,
          ],
          [
            'Разные цвета фона родителя',
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['lightblue', 'lightgreen', 'pink'].map((bgColor) => (
                <div style={{ background: bgColor, padding: '1rem' }}>
                  <Badge label={'5'} variant={'filled'} colorScheme={'red'}>
                    <Avatar />
                  </Badge>
                  <p style={{ marginTop: '1rem' }}>Фон родителя: {bgColor}</p>
                </div>
              ))}
            </div>,
          ],
        ]}
      />
    </Section>

    {/* Секция интерактивности */}
    <Section title={'Состояния интерактивности'}>
      <h5>
        Бейдж может реагировать на взаимодействия, если передан обработчик onClick или другие
        события. Состояние isDisabled отключает взаимодействие и визуально затемняет элемент.
      </h5>

      <Table
        headers={['Состояние', 'Внешний вид', 'Поведение']}
        rows={[
          [
            'Обычное состояние',
            <Badge label={'5'} colorScheme={'blue'}>
              <Avatar />
            </Badge>,
            'Нет взаимодействия',
          ],
          [
            'Интерактивный (с onClick)',
            <Badge label={'5'} colorScheme={'blue'} onClick={() => alert('Клик по бейджу!')}>
              <Avatar />
            </Badge>,
            'Курсор pointer, hover-эффект',
          ],
          [
            'Отключенный (isDisabled)',
            <Badge
              label={'5'}
              colorScheme={'blue'}
              isDisabled
              onClick={() => alert('Этот alert не сработает')}
            >
              <Avatar />
            </Badge>,
            'Курсор not-allowed, прозрачность 48%',
          ],
          [
            'Интерактивный с иконкой',
            <Badge
              icon={NotificationIcon}
              colorScheme={'red'}
              onClick={() => alert('Уведомление!')}
            >
              <Avatar />
            </Badge>,
            'Иконка также кликабельна',
          ],
        ]}
      />

      <div
        style={{
          background: 'var(--bg-secondary)',
          padding: '1rem',
          borderRadius: '8px',
        }}
      >
        <h5 style={{ marginTop: 0 }}>Технические детали</h5>
        <ul>
          <li>
            Интерактивность активируется при передаче любого обработчика событий (onClick,
            onMouseEnter и др.)
          </li>
          <li>Состояние disabled имеет приоритет над интерактивностью</li>
          <li>Hover-эффект - изменение прозрачности до 48%</li>
          <li>
            Для интерактивных состояний добавляется класс <code>.interactive</code>
          </li>
        </ul>
      </div>
    </Section>
    {/* Секция отступов */}
    <Section title={'Отступы (positionOffset)'}>
      <h5>
        Пропс positionOffset позволяет точно настроить позиционирование бейджа относительно
        стандартного расположения. Положительные значения смещают вправо/вниз, отрицательные -
        влево/вверх.
      </h5>

      <Table
        headers={['Смещение', 'Пример']}
        rows={[
          [
            'Без смещения (по умолчанию)',
            <Badge label={'0'} position={'top-right'}>
              <Avatar size={48} />
            </Badge>,
          ],
          [
            'X: 10px, Y: 10px',
            <Badge label={'10,10'} position={'top-right'} positionOffset={{ x: 10, y: 10 }}>
              <Avatar size={48} />
            </Badge>,
          ],
          [
            'X: -10px, Y: 10px',
            <Badge label={'-10,10'} position={'top-right'} positionOffset={{ x: -10, y: 10 }}>
              <Avatar size={48} />
            </Badge>,
          ],
          [
            'X: 0px, Y: -15px',
            <Badge label={'0,-15'} position={'top-right'} positionOffset={{ x: 0, y: -15 }}>
              <Avatar size={48} />
            </Badge>,
          ],
        ]}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        {[
          { x: 0, y: 0 },
          { x: 15, y: 0 },
          { x: 0, y: 15 },
          { x: -15, y: 0 },
          { x: 0, y: -15 },
          { x: 10, y: 10 },
        ].map((offset, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <Badge label={`${offset.x},${offset.y}`} position={'top-right'} positionOffset={offset}>
              <Avatar size={48} />
            </Badge>
            <p style={{ marginTop: '0.5rem' }}>
              X: {offset.x}px, Y: {offset.y}px
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          background: 'var(--bg-secondary)',
          padding: '1rem',
          borderRadius: '8px',
        }}
      >
        <h5 style={{ marginTop: 0 }}>Как это работает</h5>
        <ul>
          <li>
            Смещение применяется через CSS-переменные <code>--badge-offset-x</code> и{' '}
            <code>--badge-offset-y</code>
          </li>
          <li>Значения добавляются к стандартным координатам позиционирования</li>
          <li>Поддерживаются дробные значения (например, 0.5px)</li>
          <li>Работает для всех позиций (position), включая *-inside варианты</li>
        </ul>
      </div>
    </Section>
  </div>
);

export const Playground: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

Playground.args = {
  label: '5',
  colorScheme: 'red',
  position: 'top-right',
  variant: 'filled',
  children: <Avatar />,
  size: 20,
  positionOffset: { x: 0, y: 0 },
  isDisabled: false,
};

Playground.argTypes = {
  colorScheme: { control: { type: 'select' }, options: badgeColors },
  position: {
    control: { type: 'select' },
    options: [...badgePlacements, ...badgeInsidePlacements],
  },
  variant: { control: { type: 'select' }, options: badgeVariants },
  size: { control: { type: 'select' }, options: badgeSizes },
  label: { control: 'text' },
  positionOffset: { control: 'object' },
  cutoutBackground: { control: 'color' },
  isDisabled: { control: 'radio', options: [true, false] },
  'data-testid': { table: { disable: true } },
  icon: { table: { disable: true } },
  children: {
    control: 'radio',
    options: ['avatar', 'button'],
    mapping: {
      avatar: <Avatar name={'Вася Пупкин'} size={56} />,
      button: (
        <Button buttonStyle={'accent'} mode={'primary'} size={'l'}>
          Кнопка
        </Button>
      ),
    },
  },
};
