import type { HTMLAttributes, PropsWithChildren } from 'react';
import { type ReactElement } from 'react';
import type { ButtonType } from './button';
export type IconButtonSize = 'default' | 'large' | 'small' | 'extraSmall';
export type IconButtonProps = PropsWithChildren & Omit<HTMLAttributes<HTMLButtonElement>, 'type'> & {
    type?: ButtonType;
    disabled?: boolean;
    size?: IconButtonSize;
    loading?: boolean;
    withoutPadding?: boolean;
    active?: boolean;
    withoutHoverStyle?: boolean;
    icon?: ReactElement;
};
export declare const IconButton: import("react").ForwardRefExoticComponent<{
    children?: import("react").ReactNode;
} & Omit<HTMLAttributes<HTMLButtonElement>, "type"> & {
    type?: ButtonType | undefined;
    disabled?: boolean | undefined;
    size?: IconButtonSize | undefined;
    loading?: boolean | undefined;
    withoutPadding?: boolean | undefined;
    active?: boolean | undefined;
    withoutHoverStyle?: boolean | undefined;
    icon?: ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default IconButton;
