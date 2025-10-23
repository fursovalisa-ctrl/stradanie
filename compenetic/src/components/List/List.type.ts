/**
 * Базовые пропсы для списка (используются и для `<ul>`, и для `<ol>`).
 */
interface BaseListProps {
  /** Дополнительный CSS-класс для списка */
  className?: string;
  /** Дочерние элементы списка (`<List.Item>` или `<li>`) */
  children: React.ReactNode;
  /** Размер списка, влияет на отступы и размер шрифта */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Атрибут для тестирования */
  'data-testid'?: string;
}

/**
 * Пропсы для маркированного списка (`<ul>`).
 * Атрибут `start` запрещён.
 */
interface UnorderedListProps extends BaseListProps {
  /** Тип списка — маркированный (по умолчанию) */
  variant?: 'unordered';
  /** Невозможен для `<ul>` */
  start?: never;
}

/**
 * Пропсы для нумерованного списка (`<ol>`).
 */
interface OrderedListProps extends BaseListProps {
  /** Тип списка — нумерованный */
  variant: 'ordered';
  /** Начальный номер для `<ol>` */
  start?: number;
}

export type ListProps = UnorderedListProps | OrderedListProps;
