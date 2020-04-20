import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import '../../../styles/buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function BottomButtons(props) {
  const { submitting, onCancel, onSubmit, id, isDirty } = props;

  const buttonClass = isDirty ? 'btn-success' : 'btn-secondary'
  return (
    <div id={id} className="bottom-buttons float-right">
      <button className={`btn ${buttonClass} submit-button`} type="submit" disabled={submitting || !isDirty} onClick={onSubmit}>
        {!submitting && <FontAwesomeIcon
          icon={faCheck}
          size="1x"
          color="#FFFFFF"
          title="Loading"
        />}
        {submitting && <Loader
          size="1x"
          classes="pull-left"
          color=""
          />
        }
        {' Save'}
      </button>

      <button className="btn btn-danger" disabled={submitting} onClick={onCancel}>Cancel</button>
    </div>
  );
}

BottomButtons.displayName = 'BottomButtons';

BottomButtons.propTypes = {
  submitting: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  id: PropTypes.string,
  isDirty: PropTypes.bool
}
