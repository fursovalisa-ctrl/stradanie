export interface ListItemProps {
  /** Дополнительный CSS-класс для списка */
  className?: string;
  /** Дочерние элементы */
  children: React.ReactNode;
  /** Атрибут для тестирования */
  'data-testid'?: string;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const { children, className, 'data-testid': dataTestId = 'list-item' } = props;

  return (
    <li data-testid={dataTestId} className={className}>
      {children}
    </li>
  );
};
