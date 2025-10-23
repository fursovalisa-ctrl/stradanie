# Компоненты

::: tip Что это?
Директория содержит все React-компоненты проекта SkillGrid. Каждый компонент представляет собой независимый модуль с собственной логикой, стилями и дополнительными файлами.
:::

## Основные разделы

- [Структура компонента](./structure.md) - Организация файлов и директорий
- [Правила и соглашения](./rules.md) - Стандарты разработки и именования
- [Примеры](./examples.md) - Примеры реализации компонентов

## Лучшие практики

### Композиция
- Компоненты должны быть независимыми
- Минимальная связность между компонентами
- Переиспользование через композицию

### Производительность
- Мемоизация где необходимо (useMemo, useCallback)
- Оптимизация ререндеров
- Ленивая загрузка тяжелых компонентов

### Доступность (A11Y)
- ARIA-атрибуты
- Семантическая разметка
- Поддержка клавиатурной навигации
- Контрастные цвета

### Типизация
- Строгая типизация пропсов
- Документация через JSDoc
- Явное указание возвращаемых типов

## Создание нового компонента

::: tip Использование генератора
Используйте генератор компонентов для быстрого создания новых компонентов:

```bash
yarn skillgrid g component ComponentName
```
:::

### Опции генератора
- `--i18n` / `--no-i18n` - Локализация
- `--hook` / `--no-hook` - Хук
- `--stories` / `--no-stories` - Storybook истории
- `--index` / `--no-index` - Индексный файл

## Примеры

### Простой компонент

```tsx
// Button.tsx
import { type FC } from 'react';
import type { ButtonProps } from './Button.type';
import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
```

### Компонент с хуком

```tsx
// DataGrid.tsx
import { type FC } from 'react';
import type { DataGridProps } from './DataGrid.type';
import { useDataGrid } from './DataGrid.hook';
import styles from './DataGrid.module.scss';

export const DataGrid: FC<DataGridProps> = (props) => {
  const { data, loading, error } = useDataGrid(props);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className={styles.grid}>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
``` 