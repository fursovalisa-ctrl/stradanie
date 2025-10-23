# Генератор компонентов

::: tip Что это?
CLI инструмент для автоматического создания компонентов с соблюдением всех правил и структуры проекта.
:::

## Возможности

- Создание компонентов по шаблону
- Генерация всех необходимых файлов
- Интеграция с системой локализации
- Добавление тестов и документации
- Настройка через конфигурацию

## Использование

```bash
# Базовое использование
yarn skillgrid generate component Button
# или короче
yarn skillgrid g c Button

# С дополнительными опциями
yarn skillgrid g c DataGrid --hook --no-i18n
```

## Структура файлов

Генератор создает следующую структуру:

```
ComponentName/
├── ComponentName.tsx          # React компонент
├── ComponentName.type.ts      # TypeScript типы
├── ComponentName.module.scss  # Стили (CSS Modules)
├── ComponentName.test.tsx     # Тесты
├── ComponentName.i18n.ts      # Локализация (опционально)
├── ComponentName.hook.ts      # Хук (опционально)
├── ComponentName.stories.tsx  # Storybook истории (опционально)
└── index.ts                  # Публичный API (опционально)
```

## Опции по умолчанию

- ✅ Локализация (i18n) - включена
- ❌ Хук (hook) - отключен
- ✅ Storybook истории - включены
- ✅ Индексный файл - включен

## Подробнее

- [Конфигурация](/generator/configuration) - Настройка генератора
- [Использование](/generator/usage) - Подробная инструкция
- [Модули](/generator/modules) - Описание модулей 