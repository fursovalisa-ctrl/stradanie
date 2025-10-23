# Использование локализации

## В компонентах

```tsx
import { useTranslation } from 'react-i18next';
import type { ButtonProps } from './Button.type';

export const Button: FC<ButtonProps> = (props) => {
  const { t } = useTranslation();
  
  return (
    <button {...props}>
      {t('Button.submit')}
    </button>
  );
};
```

## Смена языка

```tsx
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en_US">English</option>
      <option value="ru_RU">Русский</option>
    </select>
  );
};
```

## Типобезопасность

```typescript
// Button.type.ts
export interface ButtonLocale {
  submit: string;
  cancel: string;
}

// Автоматическая проверка типов при использовании
const { t } = useTranslation();
t('Button.submit'); // ✅ OK
t('Button.unknown'); // ❌ Error
```

## Форматирование

```tsx
// В файле локализации
export const en = {
  welcome: 'Hello, {{name}}!',
  items: 'Items: {{count}}'
};

// В компоненте
const { t } = useTranslation();
t('welcome', { name: 'User' }); // "Hello, User!"
t('items', { count: 5 }); // "Items: 5"
``` 