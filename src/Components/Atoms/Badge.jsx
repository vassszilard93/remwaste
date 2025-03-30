import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ type = 'default', children }) => {
  const baseStyle = 'text-xs px-3 h-6 inline-flex items-center justify-center rounded-full';

  const typeStyles = {
    road: 'bg-blue-100 text-blue-900',
    heavy: 'bg-orange-100 text-orange-800',
    default: 'bg-gray-200 text-gray-800',
  };

  return (
    <span className={`${baseStyle} ${typeStyles[type]}`}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  type: PropTypes.oneOf(['road', 'heavy', 'default']),
  children: PropTypes.node.isRequired,
};

export default Badge;
