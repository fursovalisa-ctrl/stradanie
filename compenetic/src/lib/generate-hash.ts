/**
 * Функция для эффективного хеширования строк и объектов
 * @param input - Входные данные (строка или объект)
 * @returns Хеш в виде 32-битного целого числа без знака
 */
export function generateHash(input: string | object): number {
  // Преобразуем объект в строку JSON, если необходимо
  const str = typeof input === 'string' ? input : JSON.stringify(input);

  let hash = 5381; // Начальное значение (используется в алгоритме DJB2)

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    // hash * 33 + char
    hash = (hash << 5) + hash + char;
  }

  // Преобразуем в 32-битное беззнаковое целое
  return hash >>> 0;
}
