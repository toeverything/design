import { darkCssVariables, lightCssVariables } from '@toeverything/theme';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  color: 'var(--affine-text-primary-color)',
  fontFamily: 'var(--affine-font-family)',
  fontSize: 'var(--affine-font-base)',
  lineHeight: 'var(--affine-font-height)',
  backgroundColor: 'var(--affine-background-primary-color)',
});

globalStyle('html', {
  vars: lightCssVariables,
});

globalStyle('html[data-theme="dark"]', {
  vars: darkCssVariables,
});

globalStyle('.docs-story', {
  backgroundColor: 'var(--affine-background-primary-color)',
});
