import type { PropsWithChildren, ReactNode } from 'react';
import { type HTMLAttributes } from 'react';
export interface MenuIconProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
    icon?: ReactNode;
    position?: 'start' | 'end';
}
export declare const MenuIcon: import("react").ForwardRefExoticComponent<MenuIconProps & import("react").RefAttributes<HTMLDivElement>>;
