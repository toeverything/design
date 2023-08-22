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
import type { CSSProperties, FC } from 'react';
import { type ReactElement, useMemo } from 'react';

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

  fallbackProps?: Omit<AvatarFallbackProps, 'style' | 'className'>;
  imageProps?: Omit<AvatarImageProps, 'src'>;
  avatarProps?: RadixAvatarProps;
};

export const Avatar: FC<AvatarProps> = ({
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
}) => {
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
      className={clsx(style.avatarRoot, className, {
        'with-hover': hoverIcon,
      })}
      {...avatarProps}
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

      {hoverIcon ? <div className="hover-wrapper">{hoverIcon}</div> : null}
    </AvatarRoot>
  );
};
