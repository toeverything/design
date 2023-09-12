import { createVar, style } from '@vanilla-extract/css';

export const widthVar = createVar('widthVar');
export const heightVar = createVar('heightVar');
export const minHeightVar = createVar('minHeightVar');

export const modalOverlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'var(--affine-background-modal-color)',
  zIndex: 'var(--affine-z-index-modal)',
});

export const modalContent = style({
  vars: {
    [widthVar]: '',
    [heightVar]: '',
    [minHeightVar]: '',
  },
  width: widthVar,
  height: heightVar,
  minHeight: minHeightVar,
  fontSize: 'var(--affine-font-base)',
  fontWeight: '400',
  lineHeight: '1.6',
  padding: '20px 24px',
  backgroundColor: 'var(--affine-background-overlay-panel-color)',
  boxShadow: 'var(--affine-popover-shadow)',
  borderRadius: '12px',
  maxHeight: 'calc(100vh - 32px)',

  position: 'fixed',
  zIndex: 'var(--affine-z-index-modal)',
  top: ' 50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const closeButton = style({
  position: 'absolute',
  top: '22px',
  right: '20px',
});

export const modalHeader = style({
  fontSize: 'var(--affine-font-h-6)',
  fontWeight: '600',
  lineHeight: '1.45',
  marginBottom: '12px',
});
export const modalDescription = style({
  margin: '20px auto',
});

export const modalFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingTop: '20px',
  marginTop: '20px',
  gap: '20px',
});

export const confirmModalContent = style({
  margin: '20px auto',
});
