import { type HTMLAttributes, type PropsWithChildren, type ReactElement } from 'react';
export type ButtonType = 'default' | 'primary' | 'plain' | 'error' | 'warning' | 'success' | 'processing';
export type ButtonSize = 'default' | 'large' | 'extraLarge';
type BaseButtonProps = {
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
export type ButtonProps = PropsWithChildren<BaseButtonProps> & Omit<HTMLAttributes<HTMLButtonElement>, 'type'> & {
    componentProps?: {
        startIcon?: Omit<IconButtonProps, 'icon' | 'iconPosition'>;
        endIcon?: Omit<IconButtonProps, 'icon' | 'iconPosition'>;
    };
};
export type IconButtonProps = PropsWithChildren<BaseButtonProps> & Omit<HTMLAttributes<HTMLDivElement>, 'type'>;
export declare const Button: import("react").ForwardRefExoticComponent<BaseButtonProps & {
    children?: import("react").ReactNode;
} & Omit<HTMLAttributes<HTMLButtonElement>, "type"> & {
    componentProps?: {
        startIcon?: Omit<IconButtonProps, "icon" | "iconPosition"> | undefined;
        endIcon?: Omit<IconButtonProps, "icon" | "iconPosition"> | undefined;
    } | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
