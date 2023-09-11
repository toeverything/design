import { DialogTrigger } from '@radix-ui/react-dialog';

import type { ButtonProps } from '../button';
import { Button } from '../button';
import { Modal, type ModalProps } from './modal.tsx';
import * as styles from './styles.css.ts';

export interface ConfirmModalProps extends ModalProps {
  confirmButtonOptions?: ButtonProps;
  onConfirm?: () => void;
  cancelText?: string;
}

export const ConfirmModal = ({
  children,
  confirmButtonOptions,
  // FIXME: we need i18n
  cancelText = 'Cancel',
  onConfirm,
  ...props
}: ConfirmModalProps) => {
  return (
    <Modal {...props}>
      {children}
      <div className={styles.modalFooter}>
        <DialogTrigger asChild>
          <Button>{cancelText}</Button>
        </DialogTrigger>
        <Button onClick={onConfirm} {...confirmButtonOptions}></Button>
      </div>
    </Modal>
  );
};
