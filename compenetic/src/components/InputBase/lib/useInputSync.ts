import { useEffect, useRef } from 'react';

/**
 * Хук для синхронизации состояния HTML элемента с внешним состоянием
 * @param value - внешнее значение
 * @param component - тип компонента ('input' | 'textarea')
 * @returns refs для input и textarea элементов
 */
export const useInputSync = (value: string, component: 'input' | 'textarea') => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Синхронизация с внешним состоянием
   */
  useEffect(() => {
    const element = component === 'textarea' ? textareaRef.current : inputRef.current;
    if (element && element.value !== value) {
      element.value = value || '';
    }
  }, [value, component]);

  return {
    textareaRef,
    inputRef,
    currentRef: component === 'textarea' ? textareaRef : inputRef,
  };
};
