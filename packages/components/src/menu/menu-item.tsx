import type { MenuItemProps as MenuItemPropsPrimitive } from '@radix-ui/react-dropdown-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { useMenuItem } from './use-menu-item.tsx';

export interface MenuItemProps
  extends Omit<MenuItemPropsPrimitive, 'asChild' | 'textValue'> {
  type?: 'default' | 'warning' | 'danger';
  preFix?: React.ReactNode;
  endFix?: React.ReactNode;
}

export const MenuItem = ({
  children: propsChildren,
  type = 'default',
  className: propsClassName,
  preFix,
  endFix,
  ...otherProps
}: MenuItemProps) => {
  const { className, children } = useMenuItem({
    children: propsChildren,
    className: propsClassName,
    type,
    preFix,
    endFix,
  });

  return (
    <DropdownMenu.Item className={className} {...otherProps}>
      {children}
    </DropdownMenu.Item>
  );
};
