import React from 'react';
import PropTypes from 'prop-types';

export default function ColumnHeader({ header }) {
  const classes = header.classes
  return (
    <th scope="col" className={classes ? classes: ''}>{header.name}</th>
  )
}

ColumnHeader.displayName = 'ColumnHeader';

ColumnHeader.propTypes = {
  header: PropTypes.object.isRequired
};
