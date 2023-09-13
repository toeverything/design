import type { DialogContentProps, DialogOverlayProps, DialogPortalProps, DialogProps } from '@radix-ui/react-dialog';
import { type CSSProperties } from 'react';
import { type IconButtonProps } from '../button';
export interface ModalProps extends DialogProps {
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    minHeight?: CSSProperties['minHeight'];
    title?: string;
    description?: string;
    withoutCloseButton?: boolean;
    portalOptions?: DialogPortalProps;
    contentOptions?: DialogContentProps;
    overlayOptions?: DialogOverlayProps;
    closeButtonOptions?: IconButtonProps;
}
export declare const Modal: import("react").ForwardRefExoticComponent<ModalProps & import("react").RefAttributes<HTMLDivElement>>;
