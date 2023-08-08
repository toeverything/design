import type { HTMLAttributes, PropsWithChildren } from 'react';
export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerProps = PropsWithChildren & Omit<HTMLAttributes<HTMLDivElement>, 'type'> & {
    orientation?: DividerOrientation;
};
export declare const Divider: import("react").ForwardRefExoticComponent<{
    children?: import("react").ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "type"> & {
    orientation?: DividerOrientation | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export default Divider;
