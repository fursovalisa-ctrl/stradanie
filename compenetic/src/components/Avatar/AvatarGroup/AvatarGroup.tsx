import type { FC} from 'react';
import { useRef } from 'react';
import classNames from 'classnames';
import { AvatarComponent as Avatar } from '../Avatar';
import s from './AvatarGroup.module.css';
import { getAvatarBorderRadiusBySizeAndShape, getOverflowCountText } from '../lib';
import type { AvatarGroupProps } from '../Avatar.type';
import { generateHash } from '../../../lib/generate-hash';
import { nanoid } from 'nanoid';
import { createRoundedCutoutRectanglePath } from '../../../lib';

/**
 * Константа, задающая прозрачный зазор между аватарами в группе (в пикселях).
 * Необходима для визуального разделения аватаров при перекрытии,
 * чтобы избежать эффекта "слипания" краев.
 */
const AVATARS_TRANSPARENT_GAP = 2;

/**
 * Компонент для отображения группы аватаров с возможностью:
 * - Перекрытия аватаров с заданным коэффициентом overlap
 * - Отображения счетчика скрытых аватаров через overflowCount
 * - Поддержки различных форм (круг/квадрат) и размеров
 *
 * @returns {ReactElement} Группа аватаров с эффектом перекрытия.
 */
const AvatarGroup: FC<AvatarGroupProps> = (props) => {
  // Деструктуризация пропсов с значениями по умолчанию
  const {
    avatars = [],
    overflowCount = 0,
    size = 40,
    overlap = 0.3,
    shape = 'circle',
    overflowOnClick,
  } = props;

  // Рассчитываем величину перекрытия в пикселях
  const overlapPx = size * overlap;

  // Рассчитываем отступ между аватарами:
  // - Отрицательный margin для эффекта перекрытия
  // + AVATARS_TRANSPARENT_GAP для небольшого визуального разделения
  const marginRight = -overlapPx + AVATARS_TRANSPARENT_GAP;

  // Получаем радиус скругления в зависимости от размера и формы
  const borderRadius = getAvatarBorderRadiusBySizeAndShape(size, shape);

  // Генерируем уникальный ID для clipPath, чтобы избежать конфликтов
  const clipPathIdRef = useRef(nanoid());
  const clipPathId = clipPathIdRef.current.toString();

  // Классы для стилизации группы
  const groupClassNames = classNames(s.avatarGroup);

  // Генерируем SVG-путь для обрезки аватаров с учетом:
  // - Размера аватара
  // - Величины перекрытия
  // - Формы (радиуса скругления)
  const svgPath = createRoundedCutoutRectanglePath(
    size,
    size,
    size - overlapPx, // X-координата начала выреза
    0, // Y-координата начала выреза
    size,
    size,
    borderRadius,
  );

  // Не рендерим компонент если нет аватаров
  if (avatars.length === 0) {
    return null;
  }

  return (
    <div className={groupClassNames}>
      {avatars.map((avatarProps, index, array) => {
        const isLast = index + 1 >= array.length;

        return (
          <div
            key={generateHash(avatarProps) + index}
            style={{
              // Для последнего видимого аватара без overflowCount не применяем обрезку
              clipPath: isLast && !overflowCount ? undefined : `url(#${clipPathId})`,
              marginRight: marginRight,
            }}
          >
            <Avatar size={size} shape={shape} {...avatarProps} />
          </div>
        );
      })}

      {/* Блок с счетчиком скрытых аватаров */}
      {overflowCount > 0 && (
        <div style={{ marginRight: marginRight }}>
          <Avatar
            size={size}
            shape={shape}
            onClick={overflowOnClick}
            icon={() => getOverflowCountText(overflowCount)}
            colorScheme={'gray'}
          />
        </div>
      )}

      {/* SVG-маска для обрезки аватаров */}
      <svg width={'0'} height={'0'}>
        <clipPath id={`${clipPathId}`}>
          <path clipPathUnits={'objectBoundingBox'} d={svgPath} clipRule={'evenodd'} />
        </clipPath>
      </svg>
    </div>
  );
};

export { AvatarGroup };
