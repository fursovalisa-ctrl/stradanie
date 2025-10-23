import type { ComponentPropsWithoutRef, CSSProperties, FC, HTMLProps, MouseEvent } from 'react';

/** Типы режимов отображения аватара */
export type AvatarModeType = 'image' | 'icon' | 'name' | 'placeholder';

type CommonEventsType =
  | 'onClick'
  | 'onFocus'
  | 'onBlur'
  | 'onPointerDown'
  | 'onPointerUp'
  | 'onPointerEnter'
  | 'onPointerLeave'
  | 'onPointerCancel'
  | 'onPointerOut'
  | 'onPointerOver';

/** Пропсы компонента Avatar */
export interface AvatarProps
  extends Pick<HTMLProps<HTMLSpanElement>, 'className' | 'style' | 'children' | CommonEventsType> {
  /**
   * Размер аватара в пикселях
   * @default 40
   */
  size?: 24 | 32 | 40 | 48 | 56 | 84 | 96 | 208;
  /**
   * Форма аватара
   * @default 'circle'
   */
  shape?: 'circle' | 'square';
  /**
   * Вариант отображения аватара.
   * - filled - залитый цветом
   * - light - светлый фон с контурным текстом/иконкой
   * - outline - только контур
   * @default 'filled'
   */
  variant?: 'filled' | 'light' | 'outline';
  /**
   * Тип плейсхолдера (используется только для mode="placeholder" и shape="square")
   */
  placeholderType?: 'male' | 'female' | 'org' | 'neutral';
  /**
   * Имя для генерации инициалов (используется только для mode="letters")
   */
  name?: string;
  /**
   * URL изображения. Если изображение не может быть загружено, отображается плейсхолдер
   */
  imgSrc?: string;
  /**
   * Альтернативный текст для изображения
   */
  imgAlt?: string;
  /** Атрибуты, передаваемые элементу `img` */
  imgProps?: ComponentPropsWithoutRef<'img'>;
  /**
   * Иконка для отображения (используется только для mode="icon")
   */
  icon?: FC;
  /**
   * Показывает состояние загрузки
   * @default false
   */
  isLoading?: boolean;
  /**
   * Делает аватар недоступным для взаимодействия
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Цветовая схема аватара (используется для mode="icon" и mode="name")
   */
  colorScheme?:
    | 'brand' // Брендовый цвет
    | 'red' // Ошибки, опасные действия
    | 'orange' // Предупреждения
    | 'yellow' // Внимание
    | 'green' // Успех, подтверждение
    | 'blue' // Информация
    | 'lightblue' // Второстепенная информация
    | 'purple' // Специальные статусы
    | 'gray' // Нейтральный статус
    | 'contrast'; // Контрастный фон
  /**
   * Дополнительные стили
   */
  style?: CSSProperties;
  /**
   * testId для тестирования
   */
  'data-testid'?: string;
}

/**
 * Пропсы компонента AvatarGroup
 */
export interface AvatarGroupProps {
  /** Массив аватаров для отображения */
  avatars: Omit<AvatarProps, 'size' | 'shape'>[];
  /** Размер аватаров в группе */
  size?: AvatarProps['size'];
  /** Форма аватаров */
  shape?: AvatarProps['shape'];
  /** Число для счетчика переполнения. Максимально 99+ */
  overflowCount?: number;
  /** Обработчик клика на счетчик переполнения */
  overflowOnClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /** Степень перекрытия аватаров (0.25 | 0.3 | 0.5) */
  overlap?: 0.5 | 0.3 | 0.25;
}
