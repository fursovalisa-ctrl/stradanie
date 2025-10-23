import { useCallback } from 'react';
import styles from '../InputBase.module.css';

/**
 * Хук для обработки resize через grip
 * @param showGrip - показывать ли grip
 * @param disabled - отключен ли компонент
 * @param loading - состояние загрузки
 * @param resize - режим изменения размера
 * @returns обработчик mousedown для grip
 */
export const useGripResize = (
  showGrip: boolean | undefined,
  disabled: boolean | undefined,
  loading: boolean | undefined,
  resize: string | undefined,
) => {
  const handleGripMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!showGrip || disabled || loading || !(resize === 'fixed' || !resize)) return;

      e.preventDefault();
      e.stopPropagation();

      const wrapper = e.currentTarget.closest(`.${styles.wrapper}`);
      if (!wrapper) return;

      const startY = e.clientY;
      const startHeight = wrapper.clientHeight;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const deltaY = moveEvent.clientY - startY;

        const minHeight = Math.min(100, startHeight);
        const newHeight = Math.max(minHeight, startHeight + deltaY);

        (wrapper as HTMLElement).style.height = `${newHeight}px`;
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [showGrip, disabled, loading, resize],
  );

  return { handleGripMouseDown };
};
