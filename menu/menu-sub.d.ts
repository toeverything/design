import type { DropdownMenuSubProps, MenuPortalProps, MenuSubContentProps } from '@radix-ui/react-dropdown-menu';
import type { ReactNode } from 'react';
import { type HTMLAttributes } from 'react';
import type { MenuItemProps } from './menu-item.tsx';
export interface MenuSubProps {
    children: ReactNode;
    items: ReactNode;
    triggerOptions?: Omit<MenuItemProps, 'onSelect' | 'children'> & MenuItemProps & HTMLAttributes<HTMLDivElement>;
    portalOptions?: Omit<MenuPortalProps, 'children'>;
    subOptions?: Omit<DropdownMenuSubProps, 'children'>;
    subContentOptions?: Omit<MenuSubContentProps, 'children'>;
}
export declare const MenuSub: import("react").ForwardRefExoticComponent<MenuSubProps & import("react").RefAttributes<HTMLDivElement>>;
