import { ArrowRightSmallIcon } from '@blocksuite/icons';
import type {
  DropdownMenuSubProps,
  MenuPortalProps,
  MenuSubContentProps,
} from '@radix-ui/react-dropdown-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { forwardRef, type HTMLAttributes, useMemo } from 'react';

import { MenuIcon } from './menu-icon.tsx';
import type { MenuItemProps } from './menu-item.tsx';
import * as styles from './styles.css.ts';
import { useMenuItem } from './use-menu-item.tsx';

export interface MenuSubProps {
  children: ReactNode;
  items: ReactNode;
  triggerOptions?: Omit<MenuItemProps, 'onSelect' | 'children'> &
    MenuItemProps &
    HTMLAttributes<HTMLDivElement>;
  portalOptions?: Omit<MenuPortalProps, 'children'>;
  subOptions?: Omit<DropdownMenuSubProps, 'children'>;
  subContentOptions?: Omit<MenuSubContentProps, 'children'>;
}

export const MenuSub = forwardRef<HTMLDivElement, MenuSubProps>(
  (
    {
      children: propsChildren,
      items,
      portalOptions,
      subOptions,
      triggerOptions: {
        className: propsClassName,
        preFix,
        endFix,
        type,
        ...otherTriggerOptions
      } = {},
      subContentOptions: {
        className: subContentClassName = '',
        ...otherSubContentOptions
      } = {},
    },
    ref
  ) => {
    const { className, children } = useMenuItem({
      children: propsChildren,
      className: propsClassName,
      type,
      preFix,
      endFix,
    });

    return (
      <DropdownMenu.Sub {...subOptions}>
        <DropdownMenu.SubTrigger
          ref={ref}
          className={className}
          {...otherTriggerOptions}
        >
          {children}
          <MenuIcon position="end">
            <ArrowRightSmallIcon />
          </MenuIcon>
        </DropdownMenu.SubTrigger>
        <DropdownMenu.Portal {...portalOptions}>
          <DropdownMenu.SubContent
            sideOffset={10}
            className={useMemo(
              () => clsx(styles.menuContent, subContentClassName),
              [subContentClassName]
            )}
            {...otherSubContentOptions}
          >
            {items}
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>
    );
  }
);

MenuSub.displayName = 'MenuSub';
