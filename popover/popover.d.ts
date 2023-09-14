import type { PopoverContentProps, PopoverPortalProps, PopoverProps as PopoverPrimitiveProps } from '@radix-ui/react-popover';
import { type ReactNode } from 'react';
export interface PopoverProps extends PopoverPrimitiveProps {
    content?: ReactNode;
    portalOptions?: PopoverPortalProps;
    contentOptions?: PopoverContentProps;
}
export declare const Popover: import("react").ForwardRefExoticComponent<PopoverProps & import("react").RefAttributes<HTMLDivElement>>;
