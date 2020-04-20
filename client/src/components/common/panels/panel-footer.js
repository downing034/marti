import React from 'react';
import PropTypes from 'prop-types';

export default function PanelFooter({ footerText }) {
  return ( <div className="card-footer container-fluid">{footerText}</div> )
}

PanelFooter.displayName = 'PanelFooter';

PanelFooter.propTypes = { footerText: PropTypes.string }
