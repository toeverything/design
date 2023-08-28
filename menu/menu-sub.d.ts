import type { DropdownMenuSubProps, MenuPortalProps, MenuSubContentProps } from '@radix-ui/react-dropdown-menu';
import type { ReactNode } from 'react';
import type { MenuItemProps } from './menu-item.tsx';
export interface MenuSubProps {
    children: ReactNode;
    items: ReactNode[];
    triggerOptions?: Omit<MenuItemProps, 'onSelect' | 'children'>;
    portalOptions?: Omit<MenuPortalProps, 'children'>;
    subOptions?: Omit<DropdownMenuSubProps, 'children'>;
    subContentOptions?: Omit<MenuSubContentProps, 'children'>;
}
export declare const MenuSub: ({ children: propsChildren, items, portalOptions, subOptions, triggerOptions: { className: propsClassName, preFix, endFix, type }, subContentOptions: { className: subContentClassName, ...otherSubContentOptions }, }: MenuSubProps) => import("react/jsx-runtime").JSX.Element;
