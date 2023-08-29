import clsx from 'clsx';
import { useMemo } from 'react';
import { DoneIcon } from '@blocksuite/icons';

import { type MenuItemProps } from './menu-item.tsx';
import * as styles from './styles.css.ts';
import { MenuIcon } from './menu-icon.tsx';

interface useMenuItemProps {
  children: MenuItemProps['children'];
  type: MenuItemProps['type'];
  className: MenuItemProps['className'];
  preFix: MenuItemProps['preFix'];
  endFix: MenuItemProps['endFix'];
  checked?: MenuItemProps['checked'];
  selected?: MenuItemProps['selected'];
}

export const useMenuItem = ({
  children: propsChildren,
  type = 'default',
  className: propsClassName,
  preFix,
  endFix,
  checked,
  selected,
}: useMenuItemProps) => {
  const className = useMemo(
    () =>
      clsx(
        styles.menuItem,
        {
          danger: type === 'danger',
          warning: type === 'warning',
          checked,
          selected,
        },
        propsClassName
      ),
    [checked, propsClassName, type]
  );

  const children = useMemo(
    () => (
      <>
        {preFix}
        <span className={styles.menuSpan}>{propsChildren}</span>
        {endFix}

        {checked || selected ? (
          <MenuIcon
            position="end"
            className={clsx({
              selected,
              checked,
            })}
          >
            <DoneIcon />
          </MenuIcon>
        ) : null}
      </>
    ),
    [endFix, preFix, propsChildren]
  );

  return {
    children,
    className,
  };
};
