import { useEffect } from 'react';
import styles from '../InputBase.module.css';

/**
 * Хук для автоматического изменения размера textarea
 * @param value - значение textarea
 * @param resize - режим изменения размера
 * @param textareaRef - ref для textarea элемента
 */
export const useTextareaResize = (
  value: string,
  resize: string | undefined,
  textareaRef: React.RefObject<HTMLTextAreaElement>,
) => {
  /**
   * Функция для автоматического изменения размера textarea
   */
  const resizeTextArea = () => {
    if (!textareaRef.current || resize !== 'hug') return;

    const scrollTop = textareaRef.current.scrollTop;

    textareaRef.current.style.setProperty('height', 'auto', 'important');

    if (!value) return;

    const newHeight = textareaRef.current.scrollHeight + 'px';
    textareaRef.current.style.setProperty('height', newHeight, 'important');

    textareaRef.current.scrollTop = scrollTop;

    const wrapper = textareaRef.current.closest(`.${styles.wrapper}`);
    if (wrapper) {
      wrapper.setAttribute('data-resize', 'hug');
      wrapper.setAttribute('data-show-grip', 'false');
    }
  };

  /**
   * Эффект для изменения размера при изменении значения или resize
   */
  useEffect(resizeTextArea, [value, resize]);

  /**
   * Эффект для инициализации при монтировании
   */
  useEffect(() => {
    if (resize === 'hug' && textareaRef.current) {
      resizeTextArea();
    }
  }, []);

  return { resizeTextArea };
};
