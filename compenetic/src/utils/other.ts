/**
 * @example <caption>логает в консоль, если кнопка не задизейблена</caption>
 * <button onClick={handler(() => console.log('Clicked!'), !isDisabled}>Click</button>
 * @param handler Хедлер для ивента
 * @param condition Булевое условие, при котором хедлер должен вызваться
 * @returns Возвращает либо хедлер, либо undefined
 */
export function handler<T>(handler: T, condition: boolean) {
  if (condition) return handler;
}
