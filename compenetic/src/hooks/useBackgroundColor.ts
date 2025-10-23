import { useEffect, useRef, useState } from 'react';

/**
 * Проверяет, является ли цвет прозрачным.
 * @param {string} color - Цвет в формате строки (например, 'rgba(0, 0, 0, 0)', 'transparent').
 * @returns {boolean} Возвращает true, если цвет прозрачный, иначе false.
 */
const isTransparent = (color: string): boolean => {
  return (
    color === 'rgba(0, 0, 0, 0)' ||
    color === 'transparent' ||
    (color.startsWith('rgba') && color.endsWith(', 0)'))
  );
};

/**
 * Находит первый непрозрачный фоновый цвет в иерархии DOM элементов.
 * @param {Element | null} element - Элемент, с которого начинается поиск.
 * @returns {string | null} Возвращает цвет фона или null, если непрозрачный фон не найден.
 */
const getSolidBackgroundColor = (element: Element | null): string | null => {
  if (!element) return null;

  let currentElement: Element | null = element;

  while (currentElement) {
    const style = window.getComputedStyle(currentElement);
    const bgColor = style.backgroundColor;

    if (!isTransparent(bgColor)) return bgColor;

    currentElement = currentElement.parentElement;
  }

  return null;
};

/**
 * Хук для определения фонового цвета элемента.
 * @returns {Object} Объект с ref (для привязки к элементу) и bgColor (цвет фона или null).
 * @property {React.RefObject<HTMLDivElement>} ref - Ref для привязки к целевому элементу.
 * @property {string | null} bgColor - Цвет фона элемента или null, если фон прозрачный.
 *  @example:
 * const Component = () => {
 *   const { ref, bgColor } = useBackgroundColor();
 *
 *   return (
 *     <div ref={ref}>
 *       <p>Фон этого элемента: {bgColor || 'прозрачный'}</p>
 *   </div>
 * );
 * };
 */
export const useBackgroundColor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [bgColor, setBgColor] = useState<string | null>(null);

  useEffect(() => {
    if (ref.current) {
      const color = getSolidBackgroundColor(ref.current);
      setBgColor(color);
    }
  }, []);

  return { ref, bgColor };
};
