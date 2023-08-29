import { style } from '@vanilla-extract/css';

export const menuContent = style({
  minWidth: '180px',
  color: 'var(--affine-text-primary-color)',
  borderRadius: '8px',
  padding: '8px',
  fontSize: 'var(--affine-font-sm)',
  backgroundColor: 'var(--affine-white)',
  boxShadow: 'var(--affine-menu-shadow)',
  userSelect: 'none',
});

export const menuItem = style({
  height: '30px',
  maxWidth: '296px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px 12px',
  borderRadius: '4px',
  lineHeight: '22px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  selectors: {
    '&:not(:last-of-type)': {
      marginBottom: '4px',
    },

    '&[data-disabled]': {
      color: 'var(--affine-text-disable-color)',
      pointerEvents: 'none',
      cursor: 'not-allowed',
    },

    '&:hover': {
      backgroundColor: 'var(--affine-hover-color)',
    },
    '&.danger:hover': {
      color: 'var(--affine-error-color)',
      backgroundColor: 'var(--affine-background-error-color)',
    },

    '&.warning:hover': {
      color: 'var(--affine-warning-color)',
      backgroundColor: 'var(--affine-background-warning-color)',
    },

    '&.selected, &.checked': {
      backgroundColor: 'var(--affine-hover-color)',
      color: 'var(--affine-primary-color)',
    },
  },
});

export const menuSpan = style({
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
export const menuItemIcon = style({
  display: 'flex',
  flexShrink: 0,
  fontSize: 'var(--affine-font-h-5)',
  color: 'var(--affine-icon-color)',
  selectors: {
    '&.start': { marginRight: '8px' },
    '&.end': { marginLeft: '8px' },
    '&.selected, &.checked': {
      color: 'var(--affine-primary-color)',
    },
  },
});

export const menuSeparator = style({
  height: '1px',
  backgroundColor: 'var(--affine-divider-color)',
  marginTop: '12px',
  marginBottom: '8px',
});
