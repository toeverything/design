import type { MenuItemProps as MenuItemPropsPrimitive } from '@radix-ui/react-dropdown-menu';
import { type HTMLAttributes } from 'react';
export interface MenuItemProps extends Omit<MenuItemPropsPrimitive, 'asChild' | 'textValue'> {
    type?: 'default' | 'warning' | 'danger';
    preFix?: React.ReactNode;
    endFix?: React.ReactNode;
    checked?: boolean;
    selected?: boolean;
}
export declare const MenuItem: import("react").ForwardRefExoticComponent<MenuItemProps & HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
