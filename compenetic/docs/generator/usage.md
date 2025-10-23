# Использование генератора

## Создание компонента

### Базовое использование

```bash
yarn skillgrid generate component Button
# или короче
yarn skillgrid g c Button
```

Создаст компонент с базовой структурой:
- `Button.tsx` - Основной файл компонента
- `Button.type.ts` - TypeScript типы
- `Button.module.scss` - Стили
- `Button.test.tsx` - Тесты
- `index.ts` - Публичный API

### С локализацией

```bash
yarn skillgrid generate component Message --i18n
```

Дополнительно создаст:
- `Message.i18n.ts`
- Добавит записи в файлы локализации

### С хуком

```bash
yarn skillgrid generate component DataGrid --hook
```

Дополнительно создаст:
- `DataGrid.hook.ts`
- Добавит использование хука в компонент

### Полный набор

```bash
yarn skillgrid generate component Modal --i18n --hook --stories
```

Создаст все возможные файлы:
- `Modal.tsx`
- `Modal.type.ts`
- `Modal.module.scss`
- `Modal.test.tsx`
- `Modal.i18n.ts`
- `Modal.hook.ts`
- `Modal.stories.tsx`
- `index.ts`

## Опции командной строки

- `--i18n` / `--no-i18n` - Включить/отключить генерацию файла локализации (по умолчанию: включено)
- `--hook` / `--no-hook` - Включить/отключить генерацию хука (по умолчанию: отключено)
- `--stories` / `--no-stories` - Включить/отключить генерацию Storybook историй (по умолчанию: включено)
- `--index` / `--no-index` - Включить/отключить генерацию индексного файла (по умолчанию: включено)

## Генерируемые файлы

### Основные файлы
- `ComponentName.tsx` - React компонент
- `ComponentName.type.ts` - TypeScript типы и интерфейсы
- `ComponentName.module.scss` - Стили (CSS Modules)
- `ComponentName.test.tsx` - Тесты компонента

### Опциональные файлы
- `ComponentName.i18n.ts` - Файл локализации (если `--i18n`)
- `ComponentName.hook.ts` - Пользовательский хук (если `--hook`)
- `ComponentName.stories.tsx` - Storybook истории (если `--stories`)
- `index.ts` - Публичный API компонента (если `--index`) 