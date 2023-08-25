import type { HTMLAttributes, PropsWithChildren } from 'react';
import { type ReactElement } from 'react';
import type { ButtonType } from './button';
export type IconButtonSize = 'default' | 'large' | 'small' | 'extraSmall';
export type IconButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, 'type'> & PropsWithChildren<{
    type?: ButtonType;
    disabled?: boolean;
    size?: IconButtonSize;
    loading?: boolean;
    withoutPadding?: boolean;
    active?: boolean;
    withoutHoverStyle?: boolean;
    icon?: ReactElement;
}>;
export declare const IconButton: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLButtonElement>, "type"> & {
    type?: ButtonType | undefined;
    disabled?: boolean | undefined;
    size?: IconButtonSize | undefined;
    loading?: boolean | undefined;
    withoutPadding?: boolean | undefined;
    active?: boolean | undefined;
    withoutHoverStyle?: boolean | undefined;
    icon?: ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default IconButton;
