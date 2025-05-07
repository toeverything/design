import { grabbingCursor, grabCursor } from './cursors';
import { darkCssVariablesV2, lightCssVariablesV2 } from './v2';

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

const toCSSCursor = (cursor: string, fallbacks: string[]) => {
  return `url(${cursor}), ${fallbacks.join(', ')}`;
};
export const themeToVar = (themeName: keyof AffineTheme) =>
  `--affine-${camelToKebab(themeName)}` as keyof AffineCssVariables;
const objectEntries = <T extends Record<string, any>>(
  obj: T
): [keyof T, T[keyof T]][] => Object.entries(obj) as any;

type Kebab<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A;

export type AffineTheme = typeof lightTheme & {
  editorMode: 'page' | 'edgeless';
};

export type AffineCssVariables = {
  [Key in `--affine-${Kebab<keyof AffineTheme>}`]: string;
};

const basicFontFamily = `apple-system, BlinkMacSystemFont, 'Helvetica Neue', Tahoma, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol', 'Noto Color Emoji'`;
const basicPrintFontFamily = `'Helvetica Neue', Tahoma, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol', 'Noto Color Emoji'`;

/**
 * Static theme that should not affected by `data-theme`
 */
export const baseTheme = {
  // font
  fontFamily: `'Inter', 'Source Sans 3', Poppins, ${basicFontFamily}`,
  fontSerifFamily: `'Source Serif 4', 'Noto Serif' , serif, 'Cambria', ${basicFontFamily}`,
  fontMonoFamily: `'Source Code Pro', 'IBM Plex Mono', 'Roboto Mono','Noto Sans Mono', 'Noto Sans CJK',  ${basicFontFamily}`,
  fontSansFamily: `'Inter', 'Source Sans 3', Poppins, ${basicFontFamily}`,

  fontNumberFamily: `'Roboto Mono', 'Noto Sans Mono', ${basicFontFamily}`,
  fontCodeFamily: `'IBM Plex Mono', 'Space Mono', Consolas, Menlo, Monaco, Courier, monospace, ${basicFontFamily}`,
  fontTitle: '36px',
  fontH1: '28px',
  fontH2: '26px',
  fontH3: '24px',
  fontH4: '22px',
  fontH5: '20px',
  fontH6: '18px',
  fontBase: '15px',
  fontSm: '14px',
  fontXs: '12px',

  lineHeight: 'calc(1em + 8px)',

  zIndexModal: '1000',
  zIndexPopover: '1000',

  paragraphSpace: '8px',
  popoverRadius: '12px',

  editorWidth: '944px',
  editorSidePadding: '96px',
  zoom: '1',
  scale: 'calc(1 / var(--affine-zoom))',
  paletteLineYellow: 'rgb(255, 211, 56)',
  paletteLineOrange: 'rgb(255, 175, 56)',
  paletteLineTangerine: 'rgb(250, 124, 69)',
  paletteLineRed: 'rgb(237, 63, 63)',
  paletteLineMagenta: 'rgb(230, 96, 164)',
  paletteLinePurple: 'rgb(110, 82, 223)',
  paletteLineNavy: 'rgb(59, 37, 204)',
  paletteLineBlue: 'rgb(79, 144, 255)',
  paletteLineTeal: 'rgb(122, 226, 213)',
  paletteLineGreen: 'rgb(124, 194, 112)',
  paletteLineWhite: 'rgb(255, 255, 255)',
  paletteLineBlack: 'rgb(35, 35, 35)',
  paletteLineGrey: 'rgb(191, 192, 191)',
  paletteShapeYellow: 'rgb(255, 223, 107)',
  paletteShapeOrange: 'rgb(255, 196, 107)',
  paletteShapeTangerine: 'rgb(251, 161, 121)',
  paletteShapeRed: 'rgb(241, 111, 111)',
  paletteShapeMagenta: 'rgb(237, 140, 189)',
  paletteShapePurple: 'rgb(147, 126, 231)',
  paletteShapeNavy: 'rgb(122, 149, 246)',
  paletteShapeBlue: 'rgb(184, 227, 255)',
  paletteShapeGreen: 'rgb(157, 209, 148)',
  paletteShapeWhite: 'rgb(255, 255, 255)',
  paletteShapeBlack: 'rgb(35, 35, 35)',
  paletteShapeGrey: 'rgb(216, 217, 216)',
  multiPlayersPurple: 'rgba(123,97,255,1)',
  multiPlayersMagenta: 'rgba(245, 49, 179, 1)',
  multiPlayersRed: 'rgba(243,87,52,1)',
  multiPlayersOrange: 'rgba(255, 138, 0, 1)',
  multiPlayersGreen: 'rgba(27, 196, 125, 1)',
  paletteShapeTeal: 'rgb(184, 242, 231)',
  multiPlayersBlue: 'rgba(24, 160, 251, 1)',
  multiPlayersBrown: 'rgba(154, 101, 51, 1)',
  multiPlayersGrey: 'rgba(170, 170, 170, 1)',
  blue: 'rgba(30, 150, 235, 1)',
  pureBlack: 'rgba(0, 0, 0, 1)',
  pureBlack10: 'rgba(0, 0, 0, 0.1)',
  pureBlack20: 'rgba(0, 0, 0, 0.2)',
  pureBlack80: 'rgba(0, 0, 0, 0.8)',
  pureWhite: 'rgba(255, 255, 255, 1)',
  pureWhite10: 'rgba(255, 255, 255, 0.1)',
  toggleCircleBackgroundColor: 'rgba(255, 255, 255, 1)',
  toggleDisableBackgroundColor: 'rgba(119, 117, 125, 1)',
  toggleCircleShadow:
    '0px 1px 2px 0px rgba(0, 0, 0, 0.25), inset -2px -3px 2px 0px rgba(0, 0, 0, 0.05)',
  buttonInnerShadow: 'unset',
  multiCursorsShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.28)',
  multiPlayersShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.16)',

  // cursors
  grabbingCursor: toCSSCursor(grabbingCursor, ['grabbing']),
  grabCursor: toCSSCursor(grabCursor, ['grab']),
};

// Refs: https://github.com/toeverything/AFFiNE/issues/1796
const pureLightTheme = {
  themeMode: 'light',

  brandColor: '#1E96EB',
  tertiaryColor: 'rgba(239, 250, 255, 1)',
  primaryColor: '#1E96EB',
  primaryColor04: 'rgba(30, 150, 235, 0.04)',
  secondaryColor: 'rgb(125, 145, 255)',

  blue50: 'rgba(239, 250, 255, 1)',
  blue100: 'rgba(219, 244, 254, 1)',
  blue200: 'rgba(191, 236, 254, 1)',
  blue300: 'rgba(147, 226, 253, 1)',
  blue400: 'rgba(96, 207, 250, 1)',
  blue500: 'rgba(58, 181, 247, 1)',
  blue600: 'rgba(30, 150, 235, 1)',
  blue700: 'rgba(28, 129, 217, 1)',
  blue800: 'rgba(30, 103, 175, 1)',
  blue900: 'rgba(30, 87, 138, 1)',
  blue950: 'rgba(23, 54, 84, 1)',

  backgroundSuccessColor: 'rgba(231, 250, 243, 1)',
  backgroundErrorColor: 'rgba(253, 236, 235, 1)',
  backgroundProcessingColor: 'rgba(233, 241, 255, 1)',
  backgroundWarningColor: 'rgba(255, 237, 219, 1)',
  backgroundPrimaryColor: 'rgb(255, 255, 255)',
  backgroundOverlayPanelColor: 'rgb(251, 251, 252)',
  backgroundSecondaryColor: 'rgba(244, 244, 245, 1)',
  backgroundTertiaryColor: 'rgb(238, 238, 238)',
  backgroundCodeBlock: 'rgba(247, 248, 250, 1)',
  backgroundModalColor: 'rgba(0, 0, 0, 0.75)',
  textPrimaryColor: 'rgb(18, 18, 18)',
  textSecondaryColor: 'rgb(142, 141, 145)',
  textDisableColor: 'rgb(169, 169, 173)',
  textEmphasisColor: '#1E96EB',
  hoverColor: 'rgba(0, 0, 0, 0.04)',
  hoverColorFilled: 'rgb(245, 245, 245)',
  linkColor: '#1E67AF',
  quoteColor: 'rgba(194, 193, 197, 1)',
  listColor: 'rgba(133, 131, 140, 1)',
  iconColor: 'rgb(119, 117, 125)',
  iconSecondary: 'rgba(119, 117, 125, 0.6)',
  borderColor: 'rgb(227, 226, 228)',
  dividerColor: 'rgb(227, 226, 228)',
  placeholderColor: 'rgb(192, 191, 193)',
  edgelessGridColor: 'rgb(230, 230, 230)',
  successColor: 'rgb(16, 203, 134)',
  warningColor: 'rgb(235, 67, 53)',
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
  tagMagenta: 'rgba(249, 232, 255, 1)',
  tooltip: 'rgba(0, 0, 0, 1)',

  buttonShadow:
    '0px 0px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  overlayPanelShadow:
    '0px 1px 6px rgba(0,0,0,0.16), 0px 8px 14px rgba(0,0,0,0.08)',
  activeShadow: '0px 0px 0px 2px rgba(30, 150, 235, 0.30)',
  embedShadow: '0px 0px 0px 2px rgba(0, 0, 0, 0.08)',
  menuShadow: '0px 10px 18px rgba(0,0,0,0.14), 0px -1px 12px rgba(0,0,0,0.08)',
  toolbarShadow: '0px 6px 16px #00000024',
  shadow1: '0px 0px 4px 0px rgba(66, 65, 73, 0.14)',
  shadow2: '0px 0px 12px 0px rgba(66, 65, 73, 0.18)',
  shadow3: '0px 0px 20px 0px rgba(66, 65, 73, 0.22)',
  overlayShadow:
    '0px 1px 6px 0px rgba(0, 0, 0, 0.16), 0px 8px 14px 0px rgba(0, 0, 0, 0.08)',
  popoverShadow:
    '0px 0px 30px rgba(75, 75, 75, 0.2), 0px 0px 4px rgba(75, 75, 75, 0.3), inset 0px 0px 0px rgba(227, 226, 228, 1)',
  floatButtonShadow:
    '0px 0px 10px rgba(0, 0, 0, 0.05), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.1)',
  floatButtonShadow1:
    '0px 4px 6px -3px rgba(66, 65, 73, 0.10), 0px 10px 12px -2px rgba(66, 65, 73, 0.10)',
  floatButtonShadow2:
    '0px 4px 4px -2px rgba(66, 65, 73, 0.10), 0px 6px 8px 1px rgba(66, 65, 73, 0.05)',
  kanbanShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.05)',
  cmdShadow: '0px 10px 80px 0px rgba(0, 0, 0, 0.20)',
  largeButtonEffect: '0px 12px 21px 4px rgba(30, 150, 235, 0.15)',
  noteShadowBox:
    '0px 0px 4px 0px rgba(0, 0, 0, 0.14), 0px 2px 12px 0px rgba(0, 0, 0, 0.14)',
  noteShadowSticker:
    '0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 26px 18px -20px rgba(0, 0, 0, 0.10)',
  noteShadowPaper:
    '0px 2px 4px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 10px #FFF, 0px 3px 6px 12px rgba(0, 0, 0, 0.14)',
  noteShadowFloat:
    '0px 0px 32px 0px rgba(0, 0, 0, 0.09), 0px 0px 3px 0px rgba(0, 0, 0, 0.10)',
  noteShadowFilm: '10px 10px 0px 6px #000, 0px 0px 0px 6px #000',
  aiEmptyShadow: '0px 4px 4px rgba(66, 65, 73, 0.10), 0px 6px 8px rgba(66, 65, 73, 0.05)',
  buttonGrayColor: 'rgba(245, 245, 245, 1)',
  cardBackgroundBlue: 'linear-gradient(180deg, #F0F3FD 0%, #FCFCFD 100%)',
  cardBackgroundGreen: 'linear-gradient(180deg, #F3F9FD 0%, #FCFCFD 100%)',
  cardBackgroundGrey: 'linear-gradient(180deg, #F1F1F1 0%, #FCFCFD 100%)',
  windowsCloseButton: '#C42B1C',

  // -------------------- text highlight (background) --------------------
  /** @deprecated */
  textHighlightPink: 'rgba(255, 206, 206, 1)',
  textHighlightRed: 'rgba(254, 213, 213, 1)',
  textHighlightOrange: 'rgba(254, 223, 187, 1)',
  textHighlightYellow: 'rgba(254, 243, 161, 1)',
  textHighlightGreen: 'rgba(225, 250, 177, 1)',
  textHighlightTeal: 'rgba(173, 248, 233, 1)',
  textHighlightBlue: 'rgba(204, 226, 254, 1)',
  textHighlightPurple: 'rgba(237, 221, 255, 1)',
  textHighlightGrey: 'rgba(234, 236, 239, 1)',

  // -------------------- text highlight (foreground) --------------------
  textHighlightForegroundRed: 'rgba(198, 34, 34, 1)',
  textHighlightForegroundOrange: 'rgba(211, 79, 11, 1)',
  textHighlightForegroundYellow: 'rgba(182, 124, 4, 1)',
  textHighlightForegroundGreen: 'rgba(20, 147, 67, 1)',
  textHighlightForegroundTeal: 'rgba(7, 130, 160, 1)',
  textHighlightForegroundBlue: 'rgba(33, 89, 211, 1)',
  textHighlightForegroundPurple: 'rgba(132, 46, 211, 1)',
  textHighlightForegroundGrey: 'rgba(122, 122, 122, 1)',

  // --------------------- note background color ------------------------
  noteBackgroundYellow: 'rgba(253, 230, 138, 1)',
  noteBackgroundOrange: 'rgba(255, 196, 143, 1)',
  noteBackgroundRed: 'rgba(250, 182, 182, 1)',
  noteBackgroundMagenta: 'rgba(255, 218, 237, 1)',
  noteBackgroundPurple: 'rgba(221, 214, 254, 1)',
  noteBackgroundBlue: 'rgba(205, 235, 255, 1)',
  noteBackgroundTeal: 'rgba(199, 248, 242, 1)',
  noteBackgroundGreen: 'rgba(201, 248, 193, 1)',
  noteBackgroundBlack: 'rgba(0, 0, 0, 1)',
  noteBackgroundGrey: 'rgba(230, 230, 230, 1)',
  noteBackgroundWhite: 'rgba(255, 255, 255, 1)',
};
export const lightTheme = { ...baseTheme, ...pureLightTheme };

const pureDarkTheme = {
  themeMode: 'dark',

  brandColor: '#1E96EB',
  primaryColor: '#1C9EE4',
  primaryColor04: 'rgba(52, 116, 173, 0.1)',
  secondaryColor: 'rgb(144, 150, 245)',
  tertiaryColor: 'rgb(30, 30, 30)',

  blue950: 'rgba(32, 45, 55, 1)',
  blue50: 'rgba(181, 208, 242, 1)',
  blue100: 'rgba(171, 204, 237, 1)',
  blue200: 'rgba(149, 194, 234, 1)',
  blue300: 'rgba(115, 182, 226, 1)',
  blue400: 'rgba(79, 162, 216, 1)',
  blue500: 'rgba(53, 140, 208, 1)',
  blue600: 'rgba(52, 116, 173, 1)',
  blue700: 'rgba(55, 106, 154, 1)',
  blue800: 'rgba(51, 88, 122, 1)',
  blue900: 'rgba(47, 75, 96, 1)',

  hoverColor: 'rgba(255, 255, 255, 0.1)',
  hoverColorFilled: 'rgb(42, 42, 42)',
  iconColor: 'rgb(168, 168, 160)',
  iconSecondary: 'rgba(168,168,160,0.6)',
  borderColor: 'rgba(46, 46, 46, 1)',
  dividerColor: 'rgb(114, 114, 114)',
  placeholderColor: 'rgb(62, 62, 63)',
  quoteColor: 'rgba(142, 141, 145, 1)',
  listColor: 'rgba(156, 155, 160, 1)',
  linkColor: '#78BEFF',
  edgelessGridColor: 'rgba(49, 49, 49, 0.35)',
  successColor: 'rgb(13, 162, 107)',
  warningColor: 'rgb(188, 54, 42)',
  errorColor: 'rgb(188, 54, 42)',
  processingColor: 'rgb(31, 94, 204)',
  textEmphasisColor: '#1E96EB',
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
  backgroundCodeBlock: 'rgba(31, 32, 34, 1)',
  backgroundTertiaryColor: 'rgb(48, 48, 48)',
  backgroundProcessingColor: 'rgba(22, 32, 48, 1)',
  backgroundErrorColor: 'rgba(46, 26, 24, 1)',
  backgroundWarningColor: 'rgba(48, 35, 19, 1)',
  backgroundSuccessColor: 'rgba(20, 42, 34, 1)',
  backgroundPrimaryColor: 'rgb(20, 20, 20)',
  backgroundSecondaryColor: 'rgba(37, 37, 37, 1)',
  backgroundModalColor: 'rgba(0, 0, 0, 0.5)',
  backgroundOverlayPanelColor: 'rgb(30, 30, 30)',
  tagBlue: 'rgba(8, 67, 136, 1)',
  tagGreen: 'rgba(44, 108, 63, 1)',
  tagTeal: 'rgba(26, 115, 110, 1)',
  tagWhite: 'rgba(67, 67, 67, 1)',
  tagPurple: 'rgba(47, 30, 113, 1)',
  tagRed: 'rgba(111, 50, 50, 1)',
  tagPink: 'rgba(155, 106, 106, 1)',
  tagMagenta: 'rgba(105, 47, 111, 1)',
  tagYellow: 'rgba(150, 132, 49, 1)',
  tagOrange: 'rgba(185, 129, 46, 1)',
  tagGray: 'rgba(41, 41, 41, 1)',
  tooltip: 'rgba(234, 234, 234, 1)',

  buttonShadow:
    '0px 0px 1px 0px rgba(0, 0, 0, 0.20), 0px 1px 5px 0px rgba(0, 0, 0, 0.20)',
  overlayPanelShadow:
    '0px 1px 6px rgba(0,0,0,0.2), 0px 8px 14px rgba(0,0,0,0.3)',
  activeShadow: '0px 0px 0px 2px rgba(28, 158, 228, 0.30)',
  embedShadow: '0px 0px 0px 2px rgba(255, 255, 255, 0.14)',
  menuShadow: '0px 10px 18px rgba(0,0,0,0.14), 0px -1px 12px rgba(0,0,0,0.08)',
  toolbarShadow: '0px 6px 18px #00000052',
  shadow1: '0px 0px 4px 0px rgba(0, 0, 0, 0.24)',
  shadow2: '0px 0px 12px 0px rgba(0, 0, 0, 0.28)',
  shadow3: '0px 0px 20px 0px rgba(0, 0, 0, 0.32)',
  overlayShadow:
    '0px 1px 6px 0px rgba(0, 0, 0, 0.72), 0px 8px 14px 0px rgba(0, 0, 0, 0.32)',
  popoverShadow:
    '0px 0px 30px 0px rgba(0, 0, 0, 0.1), 0px 0px 8px 0px rgba(0, 0, 0, 0.18), 0px 0px 0px 0.5px rgba(48, 48, 48, 1) inset',
  floatButtonShadow:
    '0px 0px 10px rgba(0, 0, 0, 0.05), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.1)',
  floatButtonShadow1:
    '0px 4px 6px -3px rgba(0, 0, 0, 0.1), 0px 10px 12px -2px rgba(0, 0, 0, 0.1)',
  floatButtonShadow2:
    '0px 4px 4px -2px rgba(15, 15, 15, 0.1), 0px 6px 8px 1px rgba(15, 15, 15, 0.05)',
  kanbanShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.60)',
  cmdShadow: '0px 16px 80px 0px rgba(0, 0, 0, 0.80)',
  largeButtonEffect: '0px 12px 20px 4px rgba(28, 158, 228, 0.18)',
  noteShadowBox:
    '0px 0px 2px 0px rgba(255, 255, 255, 0.44), 0px 2px 12px 0px rgba(0, 0, 0, 0.30)',
  noteShadowSticker:
    '0px 24px 26px -10px rgba(0, 0, 0, 0.22), 0px 26px 18px -18px rgba(0, 0, 0, 0.52)',
  noteShadowPaper:
    '0px 2px 4px 0px rgba(0, 0, 0, 0.30), 0px 0px 10px #7A7A7A, 0px 6px 12px rgba(0, 0, 0, 0.40)',
  noteShadowFloat:
    '0px 0px 32px 0px rgba(0, 0, 0, 0.30), 0px 0px 2px 0px rgba(255, 255, 255, 0.44)',
  noteShadowFilm: '10px 10px 0px 6px #7A7A7A, 0px 0px 0px 6px #7A7A7A',
  aiEmptyShadow: '0px 4px 4px rgba(66, 65, 73, 0.10), 0px 6px 8px rgba(66, 65, 73, 0.05)',

  buttonGrayColor: 'rgba(85, 85, 85, 1)',
  cardBackgroundBlue: 'linear-gradient(180deg, #14171F 0%, #202020 100%)',
  cardBackgroundGreen: 'linear-gradient(180deg, #192023 0%, #202020 100%)',
  cardBackgroundGrey: 'linear-gradient(180deg, #313131 0%, #202020 100%)',
  windowsCloseButton: '#C42B1C',

  // -------------------- text highlight (background) --------------------
  /** @deprecated */
  textHighlightPink: 'rgba(127, 93, 93, 1)',
  textHighlightRed: 'rgba(108, 39, 39, 1)',
  textHighlightOrange: 'rgba(112, 58, 21, 1)',
  textHighlightYellow: 'rgba(106, 84, 15, 1)',
  textHighlightGreen: 'rgba(26, 91, 50, 1)',
  textHighlightTeal: 'rgba(14, 85, 97, 1)',
  textHighlightBlue: 'rgba(56, 75, 122, 1)',
  textHighlightPurple: 'rgba(80, 46, 111, 1)',
  textHighlightGrey: 'rgba(64, 67, 74, 1)',

  // -------------------- text highlight (foreground) --------------------
  textHighlightForegroundRed: 'rgba(249, 141, 141, 1)',
  textHighlightForegroundOrange: 'rgba(252, 168, 99, 1)',
  textHighlightForegroundYellow: 'rgba(251, 214, 68, 1)',
  textHighlightForegroundGreen: 'rgba(110, 229, 153, 1)',
  textHighlightForegroundTeal: 'rgba(87, 221, 204, 1)',
  textHighlightForegroundBlue: 'rgba(128, 183, 251, 1)',
  textHighlightForegroundPurple: 'rgba(205, 157, 253, 1)',
  textHighlightForegroundGrey: 'rgba(86, 86, 86, 1)',

  // --------------------- note background color ------------------------
  noteBackgroundYellow: 'rgba(111, 65, 0, 1)',
  noteBackgroundOrange: 'rgba(132, 59, 6, 1)',
  noteBackgroundRed: 'rgba(118, 23, 23, 1)',
  noteBackgroundMagenta: 'rgba(148, 21, 85, 1)',
  noteBackgroundPurple: 'rgba(49, 46, 129, 1)',
  noteBackgroundBlue: 'rgba(3, 95, 159, 1)',
  noteBackgroundTeal: 'rgba(28, 107, 99, 1)',
  noteBackgroundGreen: 'rgba(59, 83, 21, 1)',
  noteBackgroundBlack: 'rgba(255, 255, 255, 1)',
  noteBackgroundGrey: 'rgba(86, 86, 86, 1)',
  noteBackgroundWhite: 'rgba(0, 0, 0, 1)',
} satisfies typeof pureLightTheme;
export const darkTheme = { ...baseTheme, ...pureDarkTheme };

export const printTheme = {
  fontFamily: `'Inter', 'Source Sans 3', Poppins, ${basicPrintFontFamily}`,
  fontSerifFamily: `'Source Serif 4', 'Noto Serif' , serif, 'Cambria', ${basicPrintFontFamily}`,
  fontMonoFamily: `'Source Code Pro', 'IBM Plex Mono', 'Roboto Mono','Noto Sans Mono', 'Noto Sans CJK',  ${basicPrintFontFamily}`,
  fontSansFamily: `'Inter', 'Source Sans 3', Poppins, ${basicPrintFontFamily}`,

  fontNumberFamily: `'Roboto Mono', 'Noto Sans Mono', ${basicPrintFontFamily}`,
  fontCodeFamily: `'IBM Plex Mono', 'Space Mono', Consolas, Menlo, Monaco, Courier, monospace, ${basicPrintFontFamily}`,
};

const createVariables = (theme: Partial<AffineTheme>) => {
  return objectEntries(theme).reduce((variables, [key, value]) => {
    return { ...variables, [themeToVar(key)]: value };
  }, {} as AffineCssVariables);
};

export const lightCssVariables = createVariables(lightTheme);
export const darkCssVariables = createVariables(darkTheme);
export const printCssVariables = createVariables(printTheme);

export const combinedLightCssVariables = {
  ...lightCssVariables,
  ...lightCssVariablesV2,
};

export const combinedDarkCssVariables = {
  ...darkCssVariables,
  ...darkCssVariablesV2,
};

export const scopedLightCssVariables = {
  ...createVariables(pureLightTheme),
  ...lightCssVariablesV2,
};
export const scopedDarkCssVariables = {
  ...createVariables(pureDarkTheme),
  ...darkCssVariablesV2,
};

/**
 * Get AFFiNE css variable name type safely
 * @param key in camel or kebab format
 * @param fallback
 * @returns
 */
export function cssVar(
  key: keyof AffineCssVariables | keyof AffineTheme,
  fallback?: string
) {
  const varName = key.startsWith('--')
    ? key
    : themeToVar(key as keyof AffineTheme);
  return `var(${varName}${fallback ? `, ${fallback}` : ''})`;
}
