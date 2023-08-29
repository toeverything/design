import type { MenuItemProps as MenuItemPropsPrimitive } from '@radix-ui/react-dropdown-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { useMenuItem } from './use-menu-item.tsx';

export interface MenuItemProps
  extends Omit<MenuItemPropsPrimitive, 'asChild' | 'textValue'> {
  type?: 'default' | 'warning' | 'danger';
  preFix?: React.ReactNode;
  endFix?: React.ReactNode;
  checked?: boolean;
  selected?: boolean;
}

export const MenuItem = ({
  children: propsChildren,
  type = 'default',
  className: propsClassName,
  preFix,
  endFix,
  checked,
  selected,
  ...otherProps
}: MenuItemProps) => {
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
    <DropdownMenu.Item className={className} {...otherProps}>
      {children}
    </DropdownMenu.Item>
  );
};
