import type { DropdownMenuProps, MenuContentProps, MenuPortalProps } from '@radix-ui/react-dropdown-menu';
import type { ReactNode } from 'react';
export interface MenuProps {
    children: ReactNode;
    items: ReactNode[];
    portalOptions?: Omit<MenuPortalProps, 'children'>;
    rootOptions?: Omit<DropdownMenuProps, 'children'>;
    contentOptions?: Omit<MenuContentProps, 'children'>;
}
export declare const Menu: ({ children, items, portalOptions, rootOptions, contentOptions: { className, ...otherContentOptions }, }: MenuProps) => import("react/jsx-runtime").JSX.Element;
