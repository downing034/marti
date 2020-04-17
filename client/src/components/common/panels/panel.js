import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/panels.css';

export default function Panel({ children }) {
  return (
    <div className="card card-default full-width">
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
