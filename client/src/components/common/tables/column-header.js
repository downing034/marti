import React from 'react';
import PropTypes from 'prop-types';

export default function ColumnHeader({ header }) {
  return (
    <th scope="col">{header}</th>
  )
}

ColumnHeader.displayName = 'ColumnHeader';

ColumnHeader.propTypes = {
  header: PropTypes.string.isRequired
};
