import type { PropsWithChildren } from 'react';
import { type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';
export interface MenuTriggerProps extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {
    width?: CSSProperties['width'];
    disabled?: boolean;
    noBorder?: boolean;
    status?: 'error' | 'success' | 'warning' | 'default';
    size?: 'default' | 'large' | 'extraLarge';
    preFix?: ReactNode;
    endFix?: ReactNode;
    block?: boolean;
}
export declare const MenuTrigger: import("react").ForwardRefExoticComponent<MenuTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
