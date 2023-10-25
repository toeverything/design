import type { ButtonProps } from '../button';
import { type ModalProps } from './modal.tsx';
export interface ConfirmModalProps extends ModalProps {
    confirmButtonOptions?: ButtonProps;
    onConfirm?: () => void;
    cancelText?: string;
    cancelButtonOptions?: ButtonProps;
}
export declare const ConfirmModal: ({ children, confirmButtonOptions, cancelText, cancelButtonOptions, onConfirm, width, ...props }: ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
