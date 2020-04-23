import React from 'react';
import PropTypes from 'prop-types';

export default function PanelHeader({ headerText, editButton, handleEditClick, classes }) {
  return (
    <div className={`card-header container-fluid ${classes}`}>{headerText}
      {editButton && <button className="btn btn-primary btn-sm float-right" onClick={handleEditClick}>Edit</button>}
    </div>
  )
}

PanelHeader.displayName = 'PanelHeader';

PanelHeader.propTypes = { headerText: PropTypes.string.isRequired }
