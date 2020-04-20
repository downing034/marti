import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite, faKey } from '@fortawesome/free-solid-svg-icons'

export default function Loader({size, color}) {
  return (
    <FontAwesomeIcon
      icon={faKey}
      size={size}
      color={color}
      title="Loading"
      spin={true}
    />
  )
}

Loader.displayName = 'Loader';

Loader.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}
