import type { CSSProperties, FC, HTMLProps, ReactNode } from 'react';

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

export interface BadgeProps
  extends Pick<HTMLProps<HTMLSpanElement>, 'className' | 'style' | 'children' | CommonEventsType> {
  /**
   * Содержимое бейджа. Может быть текстом, числом или React-элементом.
   * Если не указано, бейдж отобразится как точка (размер регулируется пропсом size).
   */
  label?: ReactNode | string | number;

  /**
   * Иконка для отображения внутри бейджа (вместо label).
   * Должна быть React-компонентом, принимающим стандартные пропсы svg-элемента.
   */
  icon?: FC;

  /**
   * Цветовая схема бейджа.
   * @default 'red'
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
   * Размер бейджа в пикселях. Также определяет размер шрифта и padding.
   * @default 20
   */
  size?: 40 | 24 | 20 | 16 | 14 | 12 | 10 | 8;

  /**
   * Вариант отображения бейджа.
   * - filled - залитый цветом
   * - light - светлый фон с контурным текстом/иконкой
   * - outline - только контур
   * - transparent - прозрачный фон, только содержимое
   * @default 'filled'
   */
  variant?: 'filled' | 'light' | 'outline' | 'transparent';

  /**
   * Позиция бейджа относительно дочернего элемента.
   * Значения с суффиксом -inside размещают бейдж внутри границ элемента.
   * @default 'top-end'
   */
  position?:
    | 'bottom-left-inside' // Внутри снизу слева
    | 'bottom-right-inside' // Внутри снизу справа
    | 'top-left-inside' // Внутри сверху слева
    | 'top-right-inside' // Внутри сверху справа
    | 'bottom-center-inside' // Внутри по центру снизу
    | 'top-center-inside' // Внутри по центру сверху
    | 'middle-left-inside' // Внутри по центру слева
    | 'middle-right-inside' // Внутри по центру справа
    | 'middle-center' // По центру элемента
    | 'bottom-left' // Снаружи снизу слева
    | 'bottom-right' // Снаружи снизу справа
    | 'top-left' // Снаружи сверху слева
    | 'top-right' // Снаружи сверху справа
    | 'bottom-center' // Снаружи по центру снизу
    | 'top-center' // Снаружи по центру сверху
    | 'middle-left' // Снаружи по центру слева
    | 'middle-right'; // Снаружи по центру справа

  /**
   * Смещение бейджа относительно стандартной позиции.
   * Положительные значения смещают вправо/вниз, отрицательные - влево/вверх.
   */
  positionOffset?: {
    x: number; // Горизонтальное смещение (px)
    y: number; // Вертикальное смещение (px)
  };

  /**
   * Цвет обводки вокруг бейджа (для создания эффекта "выреза").
   * Если не указан, будет автоматически определен как фон родительского элемента.
   */
  cutoutBackground?: CSSProperties['color'];

  /**
   * Флаг неактивного состояния (бейдж становится полупрозрачным, события не срабатывают).
   */
  isDisabled?: boolean;

  /**
   * Идентификатор для тестирования.
   */
  'data-testid'?: string;
}
