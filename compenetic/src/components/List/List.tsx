import React, { forwardRef } from 'react';
import styles from './List.module.css';
import cx from 'classnames';
import { ListItem } from './ListItem/ListItem';
import { ListProps } from './List.type';

// export const List = Object.assign(
//   forwardRef<HTMLUListElement | HTMLOListElement, ListProps>((props, ref) => {
//     const {
//       variant = 'unordered',
//       className,
//       children,
//       size = 'md',
//       'data-testid': dataTestId = 'list',
//       ...rest
//     } = props;

//     const Tag = variant === 'ordered' ? 'ol' : 'ul';

//     return (
//       <Tag
//         data-testid={dataTestId}
//         ref={ref as React.Ref<HTMLUListElement & HTMLOListElement>}
//         className={cx(styles.root, styles[variant], styles[size], className)}
//         {...(variant === 'ordered' && rest)}
//       >
//         {children}
//       </Tag>
//     );
//   }),
//   { Item: ListItem },
// );

export const List: React.FC<ListProps> = (props, ref) => {
    const {
      variant = 'unordered',
      size = 'md',
      'data-testid': dataTestId = 'list',
      ...rest
    } = props;

    const Tag = variant === 'ordered' ? 'ol' : 'ul';
    

    return (
      <Tag
        data-testid={dataTestId}
        ref={ref as React.Ref<HTMLUListElement & HTMLOListElement>}
        className={cx(styles.root, styles[variant], styles[size], props.className)}
        {...(variant === 'ordered' && rest)}
      >
        {props.children}
      </Tag>
    );
  }