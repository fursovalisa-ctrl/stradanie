# Конфигурация генератора

## Файл конфигурации

Настройки генератора хранятся в файле `.skillgridrc.json`:

```json
{
  "componentsDir": "src/components",
  "style": "scss",
  "withStories": true,
  "withIndex": true,
  "withHook": false,
  "withI18n": true,
  "indexFile": "src/index.ts",
  "appFile": "src/App.tsx",
  "storybookUrl": "http://localhost:6006"
}
```

## Параметры

### componentsDir
- **Тип**: `string`
- **По умолчанию**: `"components"`
- **Описание**: Директория для генерации компонентов

### style
- **Тип**: `string`
- **По умолчанию**: `"css"`
- **Описание**: Расширение файлов стилей (css/scss)

### withStories
- **Тип**: `boolean`
- **По умолчанию**: `true`
- **Описание**: Генерировать Storybook истории

### withIndex
- **Тип**: `boolean`
- **По умолчанию**: `true`
- **Описание**: Генерировать индексные файлы

### withHook
- **Тип**: `boolean`
- **По умолчанию**: `false`
- **Описание**: Генерировать файл с хуком

### withI18n
- **Тип**: `boolean`
- **По умолчанию**: `true`
- **Описание**: Генерировать файл локализации

### indexFile
- **Тип**: `string`
- **По умолчанию**: `"src/index.ts"`
- **Описание**: Путь к главному индексному файлу

### appFile
- **Тип**: `string`
- **По умолчанию**: `"src/App.tsx"`
- **Описание**: Путь к главному файлу приложения

### storybookUrl
- **Тип**: `string`
- **По умолчанию**: `"http://localhost:6006"`
- **Описание**: URL для предпросмотра в Storybook

## Шаблоны

Используется синтаксис Handlebars:

```handlebars
import { type FC } from 'react';
import type { {{name}}Props } from './{{name}}.type';
import styles from './{{name}}.module.scss';

export const {{name}}: FC<{{name}}Props> = ({
  children
}) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
}; 