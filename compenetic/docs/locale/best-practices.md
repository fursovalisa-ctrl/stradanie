# Лучшие практики

## Организация ключей

- Используйте вложенную структуру
- Группируйте по компонентам
- Используйте осмысленные ключи
- Избегайте дублирования

```typescript
// ✅ Хорошо
{
  Button: {
    submit: 'Submit',
    cancel: 'Cancel'
  }
}

// ❌ Плохо
{
  buttonSubmit: 'Submit',
  buttonCancel: 'Cancel'
}
```

## Типизация

- Определяйте типы для всех переводов
- Используйте интерфейсы для структуры
- Проверяйте типы при сборке
- Избегайте any

```typescript
// ✅ Хорошо
interface ButtonLocale {
  submit: string;
  cancel: string;
}

// ❌ Плохо
type ButtonLocale = Record<string, string>;
```

## Переменные

- Используйте именованные переменные
- Документируйте параметры
- Избегайте сложных выражений
- Форматируйте числа и даты

```typescript
// ✅ Хорошо
{
  welcome: 'Hello, {{name}}!',
  items: '{{count}} items'
}

// ❌ Плохо
{
  welcome: 'Hello, %s!',
  items: '%d items'
}
```

## Тестирование

- Проверяйте все языки
- Тестируйте форматирование
- Проверяйте отсутствующие ключи
- Используйте снэпшот-тесты

```typescript
describe('Localization', () => {
  it('should have all keys in all languages', () => {
    expect(Object.keys(en)).toEqual(Object.keys(ru));
  });
});
```

## Обновление

- Следите за актуальностью переводов
- Удаляйте неиспользуемые ключи
- Обновляйте типы при изменениях
- Ведите changelog 