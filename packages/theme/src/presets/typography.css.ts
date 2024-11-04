import { style } from '@vanilla-extract/css';

const typo = (
  fontSize?: number,
  lineHeight?: number,
  letterSpacing?: number,
  fontWeight?: number,
  fontStyle?: string
) =>
  style({
    fontSize: fontSize ?? 'inherit',
    fontWeight : fontWeight ?? 'inherit',
    lineHeight: lineHeight ? `${lineHeight}px` : 'inherit',
    letterSpacing: letterSpacing ? `${letterSpacing}px` : 'inherit',
    fontStyle: fontStyle || 'normal',
  });

const largeTitle = [34, 41, 0.4] as const;
export const largeTitleRegular = typo(...largeTitle, 400);
export const largeTitleEmphasized = typo(...largeTitle, 700);

const title1 = [28, 34, 0.38] as const;
export const title1Regular = typo(...title1, 400);
export const title1Emphasized = typo(...title1, 700);

const title2 = [22, 28, -0.26] as const;
export const title2Regular = typo(...title2, 400);
export const title2Emphasized = typo(...title2, 700);

const title3 = [20, 25, -0.45] as const;
export const title3Regular = typo(...title3, 400);
export const title3Emphasized = typo(...title3, 600);

const headline = [17, 22, -0.43, 600] as const;
export const headlineRegular = typo(...headline);
export const headlineItalic = typo(...headline, 'italic');

const body = [17, 22, -0.43] as const;
export const bodyRegular = typo(...body, 400);
export const bodyEmphasized = typo(...body, 600);
export const bodyItalic = typo(...body, 400, 'italic');
export const bodyEmphasizedItalic = typo(...body, 600, 'italic');

const callout = [16, 21, -0.31] as const;
export const calloutRegular = typo(...callout, 400);
export const calloutEmphasized = typo(...callout, 600);
export const calloutItalic = typo(...callout, 400, 'italic');
export const calloutEmphasizedItalic = typo(...callout, 600, 'italic');

const subHeadline = [15, 20, -0.23] as const;
export const subHeadlineRegular = typo(...subHeadline, 400);
export const subHeadlineEmphasized = typo(...subHeadline, 600);
export const subHeadlineItalic = typo(...subHeadline, 400, 'italic');
export const subHeadlineEmphasizedItalic = typo(...subHeadline, 600, 'italic');

const footnote = [13, 18, -0.08] as const;
export const footnoteRegular = typo(...footnote, 400);
export const footnoteEmphasized = typo(...footnote, 600);
export const footnoteItalic = typo(...footnote, 400, 'italic');
export const footnoteEmphasizedItalic = typo(...footnote, 600, 'italic');

const caption1 = [12, 16, undefined] as const;
export const caption1Regular = typo(...caption1, 400);
export const caption1Emphasized = typo(...caption1, 500);
export const caption1Italic = typo(...caption1, 400, 'italic');
export const caption1EmphasizedItalic = typo(...caption1, 500, 'italic');

const caption2 = [11, 13, 0.06] as const;
export const caption2Regular = typo(...caption2, 400);
export const caption2Emphasized = typo(...caption2, 600);
export const caption2Italic = typo(...caption2, 400, 'italic');
export const caption2EmphasizedItalic = typo(...caption2, 600, 'italic');
