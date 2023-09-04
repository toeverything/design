import type { MenuItemProps as MenuItemPropsPrimitive } from '@radix-ui/react-dropdown-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { forwardRef, type HTMLAttributes } from 'react';

import { useMenuItem } from './use-menu-item.tsx';

export interface MenuItemProps
  extends Omit<MenuItemPropsPrimitive, 'asChild' | 'textValue'> {
  type?: 'default' | 'warning' | 'danger';
  preFix?: React.ReactNode;
  endFix?: React.ReactNode;
  checked?: boolean;
  selected?: boolean;
}

export const MenuItem = forwardRef<
  HTMLDivElement,
  MenuItemProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      children: propsChildren,
      type = 'default',
      className: propsClassName,
      preFix,
      endFix,
      checked,
      selected,
      ...otherProps
    },
    ref
  ) => {
    const { className, children } = useMenuItem({
      children: propsChildren,
      className: propsClassName,
      type,
      preFix,
      endFix,
      checked,
      selected,
    });

    return (
      <DropdownMenu.Item ref={ref} className={className} {...otherProps}>
        {children}
      </DropdownMenu.Item>
    );
  }
);
MenuItem.displayName = 'MenuItem';
