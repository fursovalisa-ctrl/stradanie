# Структура локализации

## Файловая структура

```
src/
├── locale/
│   ├── type.ts         # Типы локализации
│   ├── en_US.ts        # Английский язык
│   └── ru_RU.ts        # Русский язык
└── components/
    └── ComponentName/
        └── ComponentName.i18n.ts  # Локализация компонента
```

## Типы

```typescript
// type.ts
import type { ButtonLocale } from '../components/Button/Button.type';

export type ComponentLocale<T> = {
  [K in keyof T]: T[K];
};

export type Locale = ComponentLocale<{
  Button: ButtonLocale;
}>;
```

## Локализация компонента

```typescript
// Button.i18n.ts
export const en = {
  submit: 'Submit',
  cancel: 'Cancel'
};

export const ru = {
  submit: 'Отправить',
  cancel: 'Отмена'
};
```

## Сборка локализации

```typescript
// en_US.ts
import type { Locale } from './type';
import { en as buttonEn } from '../components/Button/Button.i18n';

const locale: Locale = {
  Button: buttonEn
};

export default locale; 