import { globalStyle } from '@vanilla-extract/css';

import { darkCssVariables, lightCssVariables } from './index';

globalStyle(':root', {
  vars: lightCssVariables,
});

globalStyle('[data-theme="light"]', {
  vars: lightCssVariables,
});

globalStyle('[data-theme="dark"]', {
  vars: darkCssVariables,
});
