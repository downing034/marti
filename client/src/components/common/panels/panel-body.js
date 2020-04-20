import React from 'react';
import PropTypes from 'prop-types';

export default function PanelBody({ children }) {
  return (<div className="card-body">{children}</div>)
}

PanelBody.displayName = 'PanelBody';

PanelBody.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}
