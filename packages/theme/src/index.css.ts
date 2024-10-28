import { globalStyle } from '@vanilla-extract/css';

import {
  combinedDarkCssVariables,
  combinedLightCssVariables,
  printCssVariables,
} from './index';

globalStyle(':root', {
  vars: combinedLightCssVariables,
});

globalStyle('[data-theme="light"]', {
  vars: combinedLightCssVariables,
});

globalStyle('[data-theme="dark"]', {
  vars: combinedDarkCssVariables,
});

globalStyle(':root', {
  '@media': {
    print: {
      vars: printCssVariables,
    },
  },
});
