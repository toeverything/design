import { globalStyle } from '@vanilla-extract/css';

import {
  darkCssVariables,
  lightCssVariables,
  printCssVariables,
} from './index';
import { darkCssVariablesV2, lightCssVariablesV2 } from './v2';

const combinedLightCssVariables = {
  ...lightCssVariables,
  ...lightCssVariablesV2,
};
const combinedDarkCssVariables = {
  ...darkCssVariables,
  ...darkCssVariablesV2,
};

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
