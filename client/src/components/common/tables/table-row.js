import React from 'react';
import PropTypes from 'prop-types';

export default function TableRow({ children }) {
  return (
    <tr>{children}</tr>
  )
}

TableRow.displayName = 'TableRow';

TableRow.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}
