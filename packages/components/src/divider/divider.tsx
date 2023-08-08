import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import * as styles from './style.css';
export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerProps = PropsWithChildren &
  Omit<HTMLAttributes<HTMLDivElement>, 'type'> & {
    orientation?: DividerOrientation;
  };

const defaultProps = {
  orientation: 'horizontal'
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const {
      orientation,
      className,
      ...otherProps
    } = {
      ...defaultProps,
      ...props,
    };

    return (
      <div
        ref={ref}
        className={clsx(
          styles.divider,
          {
            [styles.verticalDivider]: orientation === 'vertical',
          },
          className
        )}
        {...otherProps}
      />
    );
  }
);

Divider.displayName = 'Divider';
export default Divider;