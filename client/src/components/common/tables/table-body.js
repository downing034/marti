import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody({ children }) {
  return (
    <tbody scope="col">{children}</tbody>
  )
}

TableBody.displayName = 'TableBody';

TableBody.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}
