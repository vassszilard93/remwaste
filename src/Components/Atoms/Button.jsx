import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  className = '',
  type = 'button',
}) => {
  const base =
    'px-4 py-3 text-sm rounded-lg shadow transition font-medium disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-blue-800 text-white hover:bg-blue-900',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outline']),
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
