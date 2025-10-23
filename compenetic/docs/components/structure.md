# Структура компонентов

## Базовая структура

Каждый компонент в SkillGrid следует единой структуре директорий:

```
ComponentName/
├── ComponentName.tsx          # Основной файл компонента
├── ComponentName.type.ts      # Типы и интерфейсы
├── ComponentName.module.scss  # Стили (CSS Modules)
├── ComponentName.test.tsx     # Тесты
├── ComponentName.i18n.ts      # Локализация
├── ComponentName.hook.ts      # Хук компонента
├── ComponentName.stories.tsx  # Storybook истории
└── index.ts                  # Публичный API
```

## Описание файлов

### ComponentName.tsx
Основной файл компонента, содержащий React-компонент и его логику.

### ComponentName.type.ts
Файл с TypeScript типами и интерфейсами для компонента.

### ComponentName.module.scss
Стили компонента с использованием CSS Modules.

### ComponentName.test.tsx
Тесты компонента с использованием Vitest.

### ComponentName.i18n.ts
Файл локализации с текстами на разных языках.

### ComponentName.hook.ts
Хук с бизнес-логикой компонента (опционально).

### ComponentName.stories.tsx
Storybook истории для документации компонента.

### index.ts
Публичный API компонента для экспорта. 