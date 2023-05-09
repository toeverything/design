export const camelToKebab = (s: string) => {
  if (typeof s !== 'string') return '';
  return s
    .replace(/-/g, '_')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase()
    .replace(/(\D+)(\d+)$/g, '$1-$2')
    .replace(/\s|_/g, '-');
};

type Kebab<
  T extends string,
  A extends string = ''
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A;

export type AffineTheme = typeof lightTheme & {
  editorMode: 'page' | 'edgeless';
};

export type AffineCssVariables = {
  [Key in `--affine-${Kebab<keyof AffineTheme>}`]: string;
};

const basicFontFamily =
  'apple-system, BlinkMacSystemFont,Helvetica Neue, Tahoma, PingFang SC, Microsoft Yahei, Arial,Hiragino Sans GB, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol, Noto Color Emoji';

export const baseTheme = {
  // font
  fontFamily: `Avenir Next, Poppins, ${basicFontFamily}`,
  fontNumberFamily: `Roboto Mono, ${basicFontFamily}`,
  fontCodeFamily: `Space Mono, Consolas, Menlo, Monaco, Courier, monospace, ${basicFontFamily}`,
  fontTitle: '36px',
  fontH1: '28px',
  fontH2: '26px',
  fontH3: '24px',
  fontH4: '22px',
  fontH5: '20px',
  fontH6: '18px',
  fontBase: '16px',
  fontSm: '14px',
  fontXs: '12px',

  lineHeight: 'calc(1em + 8px)',

  zIndexModal: '1000',
  zIndexPopover: '1000',

  paragraphSpace: '8px',
  popoverRadius: '12px',

  zoom: '1',
  scale: 'calc(1 / var(--affine-zoom))',
  paletteLineYellow: 'rgb(255, 232, 56)',
  paletteLineOrange: 'rgb(255, 175, 56)',
  paletteLineTangerine: 'rgb(255, 99, 31)',
  paletteLineRed: 'rgb(252, 63, 85)',
  paletteLineMagenta: 'rgb(255, 56, 179)',
  paletteLinePurple: 'rgb(182, 56, 255)',
  paletteLineNavy: 'rgb(59, 37, 204)',
  paletteLineBlue: 'rgb(79, 144, 255)',
  paletteLineGreen: 'rgb(16, 203, 134)',
  paletteLineWhite: 'rgb(255, 255, 255)',
  paletteLineBlack: 'rgb(0, 0, 0)',
  paletteLineGrey: 'rgb(153, 153, 153)',
  paletteShapeYellow: 'rgb(255, 241, 136)',
  paletteShapeOrange: 'rgb(255, 207, 136)',
  paletteShapeTangerine: 'rgb(255, 161, 121)',
  paletteShapeRed: 'rgb(253, 140, 153)',
  paletteShapeMagenta: 'rgb(255, 136, 209)',
  paletteShapePurple: 'rgb(211, 136, 255)',
  paletteShapeNavy: 'rgb(137, 124, 224)',
  paletteShapeBlue: 'rgb(149, 188, 255)',
  paletteShapeGreen: 'rgb(112, 224, 182)',
  paletteShapeWhite: 'rgb(255, 255, 255)',
  paletteShapeBlack: 'rgb(0, 0, 0)',
  paletteShapeGrey: 'rgb(194, 194, 194)',
};

// Refs: https://github.com/toeverything/AFFiNE/issues/1796
export const lightTheme = {
  ...baseTheme,

  themeMode: 'light',

  brandColor: 'rgb(84, 56, 255)',
  tertiaryColor: 'rgb(243, 240, 255)',
  primaryColor: 'rgb(84, 56, 255)',
  secondaryColor: 'rgb(125, 145, 255)',
  backgroundSuccessColor: 'rgba(231, 250, 243, 1)',
  backgroundErrorColor: 'rgba(253, 236, 235, 1)',
  backgroundProcessingColor: 'rgba(233, 241, 255, 1)',
  backgroundWarningColor: 'rgba(255, 239, 233, 1)',
  backgroundPrimaryColor: 'rgb(255, 255, 255)',
  backgroundOverlayPanelColor: 'rgb(251, 251, 252)',
  backgroundSecondaryColor: 'rgb(251, 250, 252)',
  backgroundTertiaryColor: 'rgb(245, 243, 247)',
  backgroundCodeBlock: 'rgb(250, 251, 253)',
  backgroundModalColor: 'rgba(0, 0, 0, 0.4)',
  dragOverlayBg: 'rgba(255, 255, 255, 0.95)',
  textPrimaryColor: 'rgb(66, 65, 73)',
  textSecondaryColor: 'rgb(142, 141, 145)',
  textDisableColor: 'rgb(169, 169, 173)',
  textEmphasisColor: 'rgb(84, 56, 255)',
  hoverColor: 'rgba(0, 0, 0, 0.04)',
  linkColor: 'rgba(88, 114, 251, 1)',
  quoteColor: 'rgb(100, 95, 130)',
  iconColor: 'rgb(119, 117, 125)',
  iconSecondary: 'rgba(119, 117, 125, 0.6)',
  borderColor: 'rgb(227, 226, 228)',
  dividerColor: 'rgb(227, 226, 228)',
  placeholderColor: 'rgb(192, 191, 193)',
  edgelessGridColor: 'rgb(230, 230, 230)',
  successColor: 'rgb(16, 203, 134)',
  warningColor: 'rgb(255, 99, 31)',
  errorColor: 'rgb(235, 67, 53)',
  processingColor: 'rgb(39, 118, 255)',
  black10: 'rgba(0, 0, 0, 0.1)',
  black30: 'rgba(0, 0, 0, 0.3)',
  black50: 'rgba(0, 0, 0, 0.5)',
  black60: 'rgba(0, 0, 0, 0.6)',
  black80: 'rgba(0, 0, 0, 0.8)',
  black90: 'rgba(0, 0, 0, 0.9)',
  black: 'rgb(0, 0, 0)',
  white10: 'rgba(255, 255, 255, 0.1)',
  white30: 'rgba(255, 255, 255, 0.3)',
  white50: 'rgba(255, 255, 255, 0.5)',
  white60: 'rgba(255, 255, 255, 0.6)',
  white80: 'rgba(255, 255, 255, 0.8)',
  white90: 'rgba(255, 255, 255, 0.9)',
  white: 'rgb(255, 255, 255)',
  tagWhite: 'rgba(245, 245, 245, 1)',
  tagGray: 'rgba(227, 226, 224, 1)',
  tagRed: 'rgba(255, 225, 225, 1)',
  tagOrange: 'rgba(255, 233, 201, 1)',
  tagYellow: 'rgba(255, 243, 215, 1)',
  tagGreen: 'rgba(222, 244, 231, 1)',
  tagTeal: 'rgba(222, 244, 243, 1)',
  tagBlue: 'rgba(225, 238, 255, 1)',
  tagPurple: 'rgba(243, 240, 255, 1)',
  tagPink: 'rgba(251, 231, 255, 1)',
  tooltip: 'rgba(66, 65, 73, 1)',
  menuShadow:
    '0px 0px 12px rgba(66, 65, 73, 0.14), inset 0px 0px 0px 0.5px rgba(227, 227, 228, 1)',
  shadow1: '0px 0px 4px 0px rgba(66, 65, 73, 0.14)',
  shadow2: '0px 0px 12px 0px rgba(66, 65, 73, 0.18)',
  shadow3: '0px 0px 20px 0px rgba(66, 65, 73, 0.22)',
  popoverShadow:
    '0px 0px 30px rgba(75, 75, 75, 0.2), 0px 0px 4px rgba(75, 75, 75, 0.3), inset 0px 0px 0px rgba(227, 226, 228, 1)',
  floatButtonShadow:
    '0px 10px 12px -3px rgba(66, 65, 73, 0.1), 0px 4px 6px -2px rgba(66, 65, 73, 0.05)',
};

export const darkTheme = {
  ...baseTheme,

  themeMode: 'dark',

  brandColor: 'rgba(156, 140, 255, 1)',
  primaryColor: 'rgba(106, 86, 229, 1)',
  secondaryColor: 'rgb(144, 150, 245)',
  tertiaryColor: 'rgb(30, 30, 30)',
  hoverColor: 'rgba(255, 255, 255, 0.1)',
  iconColor: 'rgb(168, 168, 160)',
  iconSecondary: 'rgba(168,168,160,0.6)',
  borderColor: 'rgba(46, 46, 46, 1)',
  dividerColor: 'rgb(114, 114, 114)',
  placeholderColor: 'rgb(62, 62, 63)',
  quoteColor: 'rgb(147, 144, 163)',
  linkColor: 'rgb(185, 191, 227)',
  edgelessGridColor: 'rgb(49, 49, 49)',
  successColor: 'rgb(77, 213, 181)',
  warningColor: 'rgb(255, 123, 77)',
  errorColor: 'rgb(212, 140, 130)',
  processingColor: 'rgb(195, 215, 255)',
  textEmphasisColor: 'rgba(156, 140, 255, 1)',
  textPrimaryColor: 'rgb(234, 234, 234)',
  textSecondaryColor: 'rgb(156, 156, 160)',
  textDisableColor: 'rgb(119, 117, 125)',
  black10: 'rgba(255, 255, 255, 0.1)',
  black30: 'rgba(255, 255, 255, 0.3)',
  black50: 'rgba(255, 255, 255, 0.5)',
  black60: 'rgba(255, 255, 255, 0.6)',
  black80: 'rgba(255, 255, 255, 0.8)',
  black90: 'rgba(255, 255, 255, 0.9)',
  black: 'rgb(255, 255, 255)',
  white10: 'rgba(0, 0, 0, 0.1)',
  white30: 'rgba(0, 0, 0, 0.3)',
  white50: 'rgba(0, 0, 0, 0.5)',
  white60: 'rgba(0, 0, 0, 0.6)',
  white80: 'rgba(0, 0, 0, 0.8)',
  white90: 'rgba(0, 0, 0, 0.9)',
  white: 'rgb(0, 0, 0)',
  backgroundCodeBlock: 'rgb(41, 44, 51)',
  backgroundTertiaryColor: 'rgb(30, 30, 30)',
  backgroundProcessingColor: 'rgba(24, 27, 32, 1)',
  backgroundErrorColor: 'rgba(21, 14, 13, 1)',
  backgroundWarningColor: 'rgba(26, 10, 3, 1)',
  backgroundSuccessColor: 'rgba(8, 21, 18, 1)',
  backgroundPrimaryColor: 'rgb(20, 20, 20)',
  backgroundSecondaryColor: 'rgb(32, 32, 32)',
  backgroundModalColor: 'rgba(0, 0, 0, 0.5)',
  backgroundOverlayPanelColor: 'rgb(30, 30, 30)',
  dragOverlayBg: 'rgba(0, 0, 0, 0.4)',
  tagBlue: 'rgba(8, 67, 136, 1)',
  tagGreen: 'rgba(44, 108, 63, 1)',
  tagTeal: 'rgba(26, 115, 110, 1)',
  tagWhite: 'rgba(67, 67, 67, 1)',
  tagPurple: 'rgba(47, 30, 113, 1)',
  tagRed: 'rgba(111, 50, 50, 1)',
  tagPink: 'rgba(155, 106, 106, 1)',
  tagYellow: 'rgba(150, 132, 49, 1)',
  tagOrange: 'rgba(185, 129, 46, 1)',
  tagGray: 'rgba(41, 41, 41, 1)',
  tooltip: 'rgba(234, 234, 234, 1)',
  menuShadow:
    '0px 0px 12px rgba(0, 0, 0, 1), inset 0px 0px 0px 0.5px rgba(46, 46, 46, 1)',
  shadow1: '0px 0px 4px 2px rgba(15, 15, 15, 1)',
  shadow2: '0px 0px 12px 4px rgba(15, 15, 15, 0.8)',
  shadow3: '0px 0px 22px 8px rgba(15, 15, 15, 0.9)',
  popoverShadow:
    '0px 0px 30px rgba(12, 12, 12, 0.8), 0px 0px 8px rgba(12, 12, 12, 1), inset 0px 0px 0px rgba(46, 46, 46, 1)',
  floatButtonShadow:
    ' 0px 10px 12px -3px rgba(15, 15, 15, 0.88), 0px 4px 6px -2px rgba(0, 0, 0, 0.88)',
} satisfies Omit<AffineTheme, 'editorMode'>;

export const lightCssVariables = Object.entries(lightTheme).reduce(
  (variables, [key, value]) => {
    variables[`--affine-${camelToKebab(key)}` as keyof AffineCssVariables] =
      value;
    return variables;
  },
  {} as AffineCssVariables
);

export const darkCssVariables = Object.entries(darkTheme).reduce(
  (variables, [key, value]) => {
    variables[`--affine-${camelToKebab(key)}` as keyof AffineCssVariables] =
      value;
    return variables;
  },
  {} as AffineCssVariables
);
