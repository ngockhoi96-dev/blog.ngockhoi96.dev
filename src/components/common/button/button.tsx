/* eslint-disable react/prop-types */
import cx from 'clsx';
import { ElementRef, ForwardedRef, forwardRef, useId } from 'react';

import { sizes } from '@/configs/constants';

import { buttonVariants } from './button.config';
import styles from './button.module.css';
import { ButtonIconStyleProps, ButtonProps } from './button.type';

function Button(
  {
    id,
    type = 'button',
    variant = buttonVariants.CONTAINED,
    size = sizes.MEDIUM,
    icon,
    loading,
    rounded = false,
    uppercase = false,
    disabled = false,
    className,
    children,
    ...restProps
  }: ButtonProps,
  ref: ForwardedRef<ElementRef<'button'>>,
) {
  const internalID = useId();

  const isDisabled = disabled || loading?.enabled;

  const ButtonLabel = () => (
    <span
      data-variant={variant}
      data-size={size}
      data-uppercase={uppercase || undefined}
      data-testid="button-label"
      className={styles.title}
    >
      {loading?.text || children}
    </span>
  );

  const ButtonIcon = ({
    position = 'left',
  }: {
    position?: ButtonIconStyleProps['position'];
  }) => {
    if (loading?.enabled) {
      return (
        loading.position === position && (
          <div
            data-variant={variant}
            data-size={size}
            data-position={position}
            data-testid={`button-loading-icon-${position}`}
            className={styles.icon}
          >
            {loading.icon || <span className={styles.spinner} />}
          </div>
        )
      );
    }

    return (
      icon?.position === position && (
        <span
          data-variant={variant}
          data-size={size}
          data-position={position}
          data-hidden={icon?.hidden}
          data-testid={`button-icon-${position}`}
          className={cx(styles.icon, {
            [styles[`${icon?.animation}`]]: icon?.animation,
          })}
        >
          {icon?.children}
        </span>
      )
    );
  };

  return (
    <button
      ref={ref}
      id={id || `button-${internalID}`}
      type={type}
      data-variant={variant}
      data-size={size}
      data-rounded={rounded || undefined}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      className={cx(styles.root, className)}
      {...restProps}
    >
      <ButtonIcon position="left" />
      <ButtonLabel />
      <ButtonIcon position="right" />
    </button>
  );
}

export default forwardRef(Button);
