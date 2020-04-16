import React from 'react';
import PropTypes from 'prop-types';

export default function PanelHeader({ headerText }) {
  return ( <div className="card-header">{headerText}</div> )
}

PanelHeader.displayName = 'PanelHeader';

PanelHeader.propTypes = { headerText: PropTypes.string.isRequired }
