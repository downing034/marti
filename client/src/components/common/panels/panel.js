import React from 'react';
import PropTypes from 'prop-types';

export default function Panel({ children }) {
  return (
    <div className="card card-default">
      {children}
    </div>
  )
}

Panel.displayName = 'Panel';

Panel.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}
