import type { ButtonProps } from '../button';
import { type ModalProps } from './modal.tsx';
export interface ConfirmModalProps extends ModalProps {
    confirmButtonOptions?: ButtonProps;
    onConfirm?: () => void;
    cancelText?: string;
}
export declare const ConfirmModal: ({ children, confirmButtonOptions, cancelText, onConfirm, ...props }: ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
