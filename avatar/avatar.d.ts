import { type AvatarFallbackProps, type AvatarImageProps, type AvatarProps as RadixAvatarProps } from '@radix-ui/react-avatar';
import type { CSSProperties, FC } from 'react';
import { type ReactElement } from 'react';
export type AvatarProps = {
    size?: number;
    url?: string;
    name?: string;
    className?: string;
    style?: CSSProperties;
    colorfulFallback?: boolean;
    hoverIcon?: ReactElement;
    fallbackProps?: Omit<AvatarFallbackProps, 'style' | 'className'>;
    imageProps?: Omit<AvatarImageProps, 'src'>;
    avatarProps?: RadixAvatarProps;
};
export declare const Avatar: FC<AvatarProps>;
