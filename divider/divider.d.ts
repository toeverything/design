import type { HTMLAttributes, PropsWithChildren } from 'react';
export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerProps = PropsWithChildren & Omit<HTMLAttributes<HTMLDivElement>, 'type'> & {
    orientation?: DividerOrientation;
    size?: 'thinner' | 'default';
    dividerColor?: string;
};
export declare const Divider: import("react").ForwardRefExoticComponent<{
    children?: import("react").ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "type"> & {
    orientation?: DividerOrientation | undefined;
    size?: "default" | "thinner" | undefined;
    dividerColor?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export default Divider;
