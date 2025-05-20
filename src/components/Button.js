import PropTypes from 'prop-types';
import React from 'react';
import SpinnerLoader from './SpinnerLoader';

const variants = {
  contained: {
    primary: 'bg-[#A20030] text-white hover:bg-rose-700',
    secondary: 'bg-[#A20030] text-white hover:bg-rose-700 border border-white',
  },
  outlined: {
    primary:
      'border border-[#A20030] text-[#A20030] hover:bg-rose-700 hover:text-white',
    secondary:
      'border border-[#A20030] text-[#A20030] bg-white hover:bg-rose-700 hover:text-white',
  },
};

const sizes = {
  sm: 'px-4 py-1.5 text-xs leading-[16.2px]',
  md: 'px-6 py-3 text-sm leading-[18.9px]',
  lg: 'px-8 py-3 text-xl leading-[27px]',
};

const btnStyles = {
  rounded: 'rounded-full',
  normal: 'rounded-xl',
};

const loaderColor = {
  primary: 'border-t-[#A20030]',
  secondary: 'border-t-white',
};

const Button = React.forwardRef((props, ref) => {
  const {
    variant = 'contained',
    size = 'md',
    label = '',
    btnstyle = 'normal',
    btnclass = '',
    isLoading = false,
    color = 'primary',
    disabled = false,
    className,
    labelClass = 'flex-grow',
    loadingText = 'Loading...',
    type = 'button',
    ...restProps
  } = props;

  const variantClasses =
    variants[variant] && variants[variant][color]
      ? variants[variant][color]
      : '';
  const sizeClasses = sizes[size];
  const styleClasses = btnStyles[btnstyle];

  const defaultClasses = `cursor-pointer text-center font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none flex items-center justify-center gap-x-3 transition duration-500 ease-in-out`;

  const mergedClasses = `${defaultClasses} ${variantClasses} ${sizeClasses} ${styleClasses} ${className} ${btnclass} `;

  return (
    <button
      className={mergedClasses}
      disabled={disabled || isLoading}
      ref={ref}
      type={type}
      {...restProps}
    >
      {isLoading ? (
        <SpinnerLoader borderTBg={loaderColor[color]} />
      ) : (
        <span className={labelClass}>{label}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  variant: PropTypes.oneOf(['', 'contained', 'outlined', 'textOnly']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  btnstyle: PropTypes.oneOf(['rounded', 'normal']),
  btnclass: PropTypes.string,
  isLoading: PropTypes.bool,
  color: PropTypes.oneOf(['', 'primary', 'secondary', 'danger']),
  disabled: PropTypes.bool,
  leftIconComponent: PropTypes.element,
  rightIconComponent: PropTypes.element,
  className: PropTypes.string,
  labelClass: PropTypes.string,
  loadingText: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
