import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import '../../../styles/buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function BottomButtons(props) {
  const { submitting, onCancel, onSubmit, id } = props;
  return (
    <div id={id} className="bottom-buttons float-right">
      <button className="btn btn-success submit-button" type="submit" disabled={submitting} onClick={onSubmit}>
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
