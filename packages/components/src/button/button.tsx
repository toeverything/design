import clsx from 'clsx';
import {
  type FC,
  forwardRef,
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactElement,
  useMemo,
} from 'react';

import { Loading } from '../loading';
import { button, buttonIcon } from './style.css';
export type ButtonType =
  | 'default'
  | 'primary'
  | 'plain'
  | 'error'
  | 'warning'
  | 'success'
  | 'processing';
export type ButtonSize = 'default' | 'large' | 'extraLarge';
export type ButtonProps = PropsWithChildren &
  Omit<HTMLAttributes<HTMLButtonElement | HTMLDivElement>, 'type'> & {
    type?: ButtonType;
    disabled?: boolean;
    icon?: ReactElement;
    iconPosition?: 'start' | 'end';
    shape?: 'default' | 'round' | 'circle';
    block?: boolean;
    size?: ButtonSize;
    loading?: boolean;
    withoutHoverStyle?: boolean;
  };
const defaultProps = {
  type: 'default',
  disabled: false,
  shape: 'default',
  size: 'default',
  iconPosition: 'start',
  loading: false,
  withoutHoverStyle: false,
};

const ButtonIcon: FC<ButtonProps> = props => {
  const {
    size,
    icon,
    iconPosition = 'start',
    children,
    type,
    loading,
    ...otherProps
  } = {
    ...defaultProps,
    ...props,
  };
  const onlyIcon = icon && !children;
  return (
    <div
      {...otherProps}
      className={clsx(buttonIcon, {
        'color-white': type !== 'default' && type !== 'plain',
        large: size === 'large',
        extraLarge: size === 'extraLarge',
        end: iconPosition === 'end' && !onlyIcon,
        start: iconPosition === 'start' && !onlyIcon,
        loading,
      })}
    >
      {icon}
    </div>
  );
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      type,
      disabled,
      shape,
      size,
      icon: propsIcon,
      iconPosition,
      block,
      loading,
      withoutHoverStyle,
      className,
      ...otherProps
    } = {
      ...defaultProps,
      ...props,
    };

    const icon = useMemo(() => {
      if (loading) {
        return <Loading />;
      }
      return propsIcon;
    }, [propsIcon, loading]);

    return (
      <button
        {...otherProps}
        ref={ref}
        className={clsx(
          button,
          {
            primary: type === 'primary',
            plain: type === 'plain',
            error: type === 'error',
            warning: type === 'warning',
            success: type === 'success',
            processing: type === 'processing',
            large: size === 'large',
            extraLarge: size === 'extraLarge',
            disabled,
            circle: shape === 'circle',
            round: shape === 'round',
            block,
            loading,
            'without-hover': withoutHoverStyle,
          },
          className
        )}
        disabled={disabled}
        data-disabled={disabled}
      >
        {icon && iconPosition === 'start' ? (
          <ButtonIcon {...props} icon={icon} />
        ) : null}
        <span>{children}</span>
        {icon && iconPosition === 'end' ? (
          <ButtonIcon {...props} icon={icon} />
        ) : null}
      </button>
    );
  }
);
Button.displayName = 'Button';
export default Button;
