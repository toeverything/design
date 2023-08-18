import { globalStyle, style } from '@vanilla-extract/css';

export const button = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'manipulation',
  outline: '0',
  border: '1px solid',
  padding: '0 18px',
  borderRadius: '8px',
  fontSize: 'var(--affine-font-xs)',
  fontWeight: 500,
  transition: 'all .3s',
  ['WebkitAppRegion' as string]: 'no-drag',
  cursor: 'pointer',

  // changeable
  height: '28px',
  background: 'var(--affine-white)',
  borderColor: 'var(--affine-border-color)',
  color: 'var(--affine-text-primary-color)',

  selectors: {
    '&.text-bold': {
      fontWeight: 600,
    },
    '&:not(.without-hover):hover': {
      background: 'var(--affine-hover-color)',
    },
    '&.disabled': {
      opacity: '.4',
      cursor: 'default',
      color: 'var(--affine-disable-color)',
      pointerEvents: 'none',
    },
    '&.loading': {
      cursor: 'default',
      color: 'var(--affine-disable-color)',
      pointerEvents: 'none',
    },
    '&.disabled:not(.without-hover):hover, &.loading:not(.without-hover):hover':
      {
        background: 'inherit',
      },

    '&.block': { display: 'flex', width: '100%' },

    '&.circle': {
      borderRadius: '50%',
    },
    '&.round': {
      borderRadius: '14px',
    },
    // size
    '&.large': {
      height: '32px',
      fontSize: 'var(--affine-font-base)',
      fontWeight: 600,
    },
    '&.round.large': {
      borderRadius: '16px',
    },
    '&.extraLarge': {
      height: '40px',
      fontSize: 'var(--affine-font-base)',
      fontWeight: 700,
    },
    '&.round.extraLarge': {
      borderRadius: '20px',
    },

    // type
    '&.plain': {
      color: 'var(--affine-text-primary-color)',
      borderColor: 'transparent',
      background: 'transparent',
    },

    '&.primary': {
      color: 'var(--affine-pure-white)',
      background: 'var(--affine-primary-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: 'var(--affine-button-inner-shadow)',
    },
    '&.primary:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-primary-color)',
    },
    '&.primary.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.primary.disabled:not(.without-hover):hover': {
      background: 'var(--affine-primary-color)',
    },

    '&.error': {
      color: 'var(--affine-pure-white)',
      background: 'var(--affine-error-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: 'var(--affine-button-inner-shadow)',
    },
    '&.error:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-error-color)',
    },
    '&.error.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.error.disabled:not(.without-hover):hover': {
      background: 'var(--affine-error-color)',
    },

    '&.warning': {
      color: 'var(--affine-pure-white)',
      background: 'var(--affine-warning-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: 'var(--affine-button-inner-shadow)',
    },
    '&.warning:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-warning-color)',
    },
    '&.warning.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.warning.disabled:not(.without-hover):hover': {
      background: 'var(--affine-warning-color)',
    },

    '&.success': {
      color: 'var(--affine-pure-white)',
      background: 'var(--affine-success-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: 'var(--affine-button-inner-shadow)',
    },
    '&.success:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-success-color)',
    },
    '&.success.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.success.disabled:not(.without-hover):hover': {
      background: 'var(--affine-success-color)',
    },

    '&.processing': {
      color: 'var(--affine-pure-white)',
      background: 'var(--affine-processing-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: 'var(--affine-button-inner-shadow)',
    },
    '&.processing:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-processing-color)',
    },
    '&.processing.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.processing.disabled:not(.without-hover):hover': {
      background: 'var(--affine-processing-color)',
    },
  },
});

globalStyle(`${button} > span`, {
  // flex: 1,
  lineHeight: 1,
  padding: '0 4px',
});

export const buttonIcon = style({
  flexShrink: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--affine-icon-color)',
  fontSize: '16px',
  width: '16px',
  height: '16px',
  selectors: {
    '&.start': {
      marginRight: '4px',
    },
    '&.end': {
      marginLeft: '4px',
    },
    '&.large': {
      fontSize: '20px',
      width: '20px',
      height: '20px',
    },
    '&.extraLarge': {
      fontSize: '20px',
      width: '20px',
      height: '20px',
    },
    '&.color-white': {
      color: 'var(--affine-pure-white)',
    },
  },
});

export const iconButton = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'manipulation',
  outline: '0',
  border: '1px solid',
  borderRadius: '4px',
  transition: 'all .3s',
  ['WebkitAppRegion' as string]: 'no-drag',
  cursor: 'pointer',

  // changeable
  width: '24px',
  height: '24px',
  fontSize: '20px',
  color: 'var(--affine-text-primary-color)',
  borderColor: 'var(--affine-border-color)',
  selectors: {
    '&.without-padding': {
      margin: '-2px',
    },
    '&.active': {
      color: 'var(--affine-primary-color)',
    },

    '&:not(.without-hover):hover': {
      background: 'var(--affine-hover-color)',
    },
    '&.disabled': {
      opacity: '.4',
      cursor: 'default',
      color: 'var(--affine-disable-color)',
      pointerEvents: 'none',
    },
    '&.loading': {
      cursor: 'default',
      color: 'var(--affine-disable-color)',
      pointerEvents: 'none',
    },
    '&.disabled:not(.without-hover):hover, &.loading:not(.without-hover):hover':
      {
        background: 'inherit',
      },

    // size
    '&.large': {
      width: '32px',
      height: '32px',
      fontSize: '24px',
    },
    '&.large.without-padding': {
      margin: '-4px',
    },
    '&.small': { width: '20px', height: '20px', fontSize: '16px' },
    '&.extra-small': { width: '16px', height: '16px', fontSize: '12px' },

    // type
    '&.plain': {
      color: 'var(--affine-icon-color)',
      borderColor: 'transparent',
      background: 'transparent',
    },
    '&.plain.active': {
      color: 'var(--affine-primary-color)',
    },

    '&.primary': {
      color: 'var(--affine-white)',
      background: 'var(--affine-primary-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0.25) inset',
    },
    '&.primary:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-primary-color)',
    },
    '&.primary.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.primary.disabled:not(.without-hover):hover': {
      background: 'var(--affine-primary-color)',
    },

    '&.error': {
      color: 'var(--affine-white)',
      background: 'var(--affine-error-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0.25) inset',
    },
    '&.error:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-error-color)',
    },
    '&.error.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.error.disabled:not(.without-hover):hover': {
      background: 'var(--affine-error-color)',
    },

    '&.warning': {
      color: 'var(--affine-white)',
      background: 'var(--affine-warning-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0.25) inset',
    },
    '&.warning:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-warning-color)',
    },
    '&.warning.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.warning.disabled:not(.without-hover):hover': {
      background: 'var(--affine-warning-color)',
    },

    '&.success': {
      color: 'var(--affine-white)',
      background: 'var(--affine-success-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0.25) inset',
    },
    '&.success:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-success-color)',
    },
    '&.success.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.success.disabled:not(.without-hover):hover': {
      background: 'var(--affine-success-color)',
    },

    '&.processing': {
      color: 'var(--affine-white)',
      background: 'var(--affine-processing-color)',
      borderColor: 'var(--affine-black-10)',
      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0.25) inset',
    },
    '&.processing:not(.without-hover):hover': {
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), var(--affine-processing-color)',
    },
    '&.processing.disabled': {
      opacity: '.4',
      cursor: 'default',
    },
    '&.processing.disabled:not(.without-hover):hover': {
      background: 'var(--affine-processing-color)',
    },
  },
});
