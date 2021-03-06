import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody({ children }) {
  return (
    <tbody>{children}</tbody>
  )
}

TableBody.displayName = 'TableBody';

TableBody.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}
