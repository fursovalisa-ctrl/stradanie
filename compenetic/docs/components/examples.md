# Примеры компонентов

## Простой компонент

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

## Компонент с хуком

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

## Компонент с локализацией

```tsx
// Message.tsx
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { MessageProps } from './Message.type';
import styles from './Message.module.scss';

export const Message: FC<MessageProps> = ({ type }) => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.message}>
      {t(`message.${type}`)}
    </div>
  );
}; 