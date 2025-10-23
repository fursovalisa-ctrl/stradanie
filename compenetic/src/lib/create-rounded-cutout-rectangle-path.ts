/**
 * Создает SVG path для прямоугольника с вырезанным закругленным прямоугольником внутри
 * @returns Строка с данными пути для SVG
 */
function createRoundedCutoutRectanglePath(
  outerWidth: number,
  outerHeight: number,
  innerX: number,
  innerY: number,
  innerWidth: number,
  innerHeight: number,
  radius: number,
): string {
  // Автоматически ограничиваем радиус половиной меньшей стороны прямоугольника
  const maxPossibleRadius = Math.min(innerWidth, innerHeight) / 2;
  const effectiveRadius = Math.min(radius, maxPossibleRadius);

  // Внешний прямоугольник (по часовой стрелке)
  const outerRect = ['M0,0', `H${outerWidth}`, `V${outerHeight}`, `H0`, 'V0', 'Z'].join(' ');

  // Внутренний закругленный прямоугольник (против часовой стрелки)
  const innerRect = [
    `M${innerX + effectiveRadius},${innerY}`,
    `L${innerX + innerWidth - effectiveRadius},${innerY}`,

    // Верхний правый угол
    `A${effectiveRadius},${effectiveRadius} 0 0 1 ${innerX + innerWidth},${innerY + effectiveRadius}`,

    `L${innerX + innerWidth},${innerY + innerHeight - effectiveRadius}`,

    // Нижний правый угол
    `A${effectiveRadius},${effectiveRadius} 0 0 1 ${innerX + innerWidth - effectiveRadius},${innerY + innerHeight}`,

    `L${innerX + effectiveRadius},${innerY + innerHeight}`,

    // Нижний левый угол
    `A${effectiveRadius},${effectiveRadius} 0 0 1 ${innerX},${innerY + innerHeight - effectiveRadius}`,

    `L${innerX},${innerY + effectiveRadius}`,

    // Верхний левый угол
    `A${effectiveRadius},${effectiveRadius} 0 0 1 ${innerX + effectiveRadius},${innerY}`,

    'Z',
  ].join(' ');

  return `${outerRect} ${innerRect}`;
}

/**
 * @example
 const pathData = createRoundedCutoutRectanglePath(
   200,    // outerWidth
   100,    // outerHeight
   50,     // innerX
   25,     // innerY
   100,    // innerWidth
   50,     // innerHeight
   10,     // radius
 );
*/

export { createRoundedCutoutRectanglePath };
