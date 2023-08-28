import clsx from 'clsx';
import { useMemo } from 'react';

import { type MenuItemProps } from './menu-item.tsx';
import * as styles from './styles.css.ts';

interface useMenuItemProps {
  children: MenuItemProps['children'];
  type: MenuItemProps['type'];
  className: MenuItemProps['className'];
  preFix: MenuItemProps['preFix'];
  endFix: MenuItemProps['endFix'];
}

export const useMenuItem = ({
  children: propsChildren,
  type = 'default',
  className: propsClassName,
  preFix,
  endFix,
}: useMenuItemProps) => {
  const className = useMemo(
    () =>
      clsx(
        styles.menuItem,
        {
          danger: type === 'danger',
          warning: type === 'warning',
        },
        propsClassName
      ),
    [propsClassName, type]
  );

  const children = useMemo(
    () => (
      <>
        {preFix}
        <span className={styles.menuSpan}>{propsChildren}</span>
        {endFix}
      </>
    ),
    [endFix, preFix, propsChildren]
  );

  return {
    children,
    className,
  };
};
