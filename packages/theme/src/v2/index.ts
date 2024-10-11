import { objectKeys } from '../utils/object-keys';
import { darkThemeV2, lightThemeV2 } from './variables';

export { darkThemeV2, lightThemeV2 };
export type AffineThemeV2 = typeof lightThemeV2;
export type AffineThemeKeyV2 = keyof AffineThemeV2;

function themeToVar(theme: AffineThemeKeyV2) {
  const parts = theme.split('/');
  return `--affine-v2-${parts.join('-')}`;
}

function createVariables(theme: AffineThemeV2) {
  const vars: Record<string, string> = {};
  objectKeys(theme).forEach(key => {
    vars[themeToVar(key)] = theme[key];
  });
  return vars;
}

export const lightCssVariablesV2 = createVariables(lightThemeV2);
export const darkCssVariablesV2 = createVariables(darkThemeV2);

/**
 * Get AFFiNE css variable name type safely (v2)
 * @param key as copied from Figma design. __e.g. `text/primary`__
 * 
 * ```ts
 * import { cssVarV2 } from '@toeverything/theme/v2';
 * 
 * cssVarV2('text/primary');
 * cssVarV2('button/siderbarPrimary/background')
 * ```
 */
export function cssVarV2(key: AffineThemeKeyV2, fallback?: string) {
  return `var(${themeToVar(key)}${fallback ? `, ${fallback}` : ''})`;
}
