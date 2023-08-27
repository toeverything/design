import type { TooltipContentProps, TooltipPortalProps, TooltipProps as RootProps } from '@radix-ui/react-tooltip';
import type { ReactElement, ReactNode } from 'react';
export interface TooltipProps {
    children: ReactElement;
    content: ReactNode;
    side?: TooltipContentProps['side'];
    align?: TooltipContentProps['align'];
    rootOptions?: Omit<RootProps, 'children'>;
    portalOptions?: TooltipPortalProps;
    options?: Omit<TooltipContentProps, 'side' | 'align'>;
}
export declare const Tooltip: ({ children, content, side, align, options, rootOptions, portalOptions, }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
