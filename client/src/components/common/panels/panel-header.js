import React from 'react';
import PropTypes from 'prop-types';

export default function PanelHeader({ headerText, editButton, handleEditClick }) {
  return (
    <div className="card-header container-fluid">{headerText}
      {editButton && <button className="btn btn-primary btn-sm float-right" onClick={handleEditClick}>Edit</button>}
    </div>
  )
}

PanelHeader.displayName = 'PanelHeader';

PanelHeader.propTypes = { headerText: PropTypes.string.isRequired }
