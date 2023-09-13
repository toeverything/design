import { CloseIcon } from '@blocksuite/icons';
import {
  type AvatarFallbackProps,
  type AvatarImageProps,
  type AvatarProps as RadixAvatarProps,
  Fallback as AvatarFallback,
  Image as AvatarImage,
  Root as AvatarRoot,
} from '@radix-ui/react-avatar';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import type { CSSProperties, HTMLAttributes, MouseEvent } from 'react';
import { forwardRef, type ReactElement, useMemo } from 'react';

import { IconButton } from '../button';
import { ColorfulFallback } from './colorful-fallback';
import * as style from './style.css';
import { sizeVar } from './style.css';

export type AvatarProps = {
  size?: number;
  url?: string | null;
  name?: string;
  className?: string;
  style?: CSSProperties;
  colorfulFallback?: boolean;
  hoverIcon?: ReactElement;
  onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;

  fallbackProps?: Omit<AvatarFallbackProps, 'style' | 'className'>;
  imageProps?: Omit<AvatarImageProps, 'src'>;
  avatarProps?: RadixAvatarProps;
  hoverWrapperProps?: HTMLAttributes<HTMLDivElement>;
} & HTMLAttributes<HTMLSpanElement>;

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      size = 20,
      style: propsStyles = {},
      url,
      name,
      className,
      colorfulFallback = false,
      hoverIcon,
      fallbackProps,
      imageProps,
      avatarProps,
      onRemove,
      hoverWrapperProps = {},
      ...props
    },
    ref
  ) => {
    const firstCharOfName = useMemo(() => {
      return name?.slice(0, 1) || 'A';
    }, [name]);

    return (
      <AvatarRoot
        style={{
          ...assignInlineVars({
            [sizeVar]: size ? `${size}px` : '20px',
          }),
          ...propsStyles,
        }}
        className={clsx(style.avatarRoot, className)}
        {...avatarProps}
        {...props}
        ref={ref}
      >
        <AvatarImage
          className={style.avatarImage}
          src={url || ''}
          alt={name}
          {...imageProps}
        />

        <AvatarFallback
          className={style.avatarFallback}
          delayMs={600}
          {...fallbackProps}
        >
          {colorfulFallback ? (
            <ColorfulFallback char={firstCharOfName} />
          ) : (
            firstCharOfName
          )}
        </AvatarFallback>

        {hoverIcon ? (
          <div className={style.hoverWrapper} {...hoverWrapperProps}>
            {hoverIcon}
          </div>
        ) : null}
        {onRemove ? (
          <IconButton
            size="extraSmall"
            type="default"
            className={style.removeButton}
            onClick={onRemove}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </AvatarRoot>
    );
  }
);

Avatar.displayName = 'Avatar';
