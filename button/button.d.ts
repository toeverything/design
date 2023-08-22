import { type HTMLAttributes, type PropsWithChildren, type ReactElement } from 'react';
export type ButtonType = 'default' | 'primary' | 'plain' | 'error' | 'warning' | 'success' | 'processing';
export type ButtonSize = 'default' | 'large' | 'extraLarge';
export type ButtonProps = PropsWithChildren & Omit<HTMLAttributes<HTMLButtonElement | HTMLDivElement>, 'type'> & {
    type?: ButtonType;
    disabled?: boolean;
    icon?: ReactElement;
    iconPosition?: 'start' | 'end';
    shape?: 'default' | 'round' | 'circle';
    block?: boolean;
    size?: ButtonSize;
    loading?: boolean;
    withoutHoverStyle?: boolean;
};
export declare const Button: import("react").ForwardRefExoticComponent<{
    children?: import("react").ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement | HTMLButtonElement>, "type"> & {
    type?: ButtonType | undefined;
    disabled?: boolean | undefined;
    icon?: ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    iconPosition?: "end" | "start" | undefined;
    shape?: "round" | "default" | "circle" | undefined;
    block?: boolean | undefined;
    size?: ButtonSize | undefined;
    loading?: boolean | undefined;
    withoutHoverStyle?: boolean | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
