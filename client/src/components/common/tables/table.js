import React from 'react';
import PropTypes from 'prop-types';

export default function Table({ children }) {
  return (
    <table className="table table-hover">{children}</table>
  )
}

Table.displayName = 'Table';

Table.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}
