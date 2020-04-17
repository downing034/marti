import React from 'react';
import PropTypes from 'prop-types';
import AddressInformation from './address-information';

export default class AddressPage extends React.Component {
  render() {
    const { address } = this.props;
    return (
      <div className="container">
        <AddressInformation address={address} />
      </div>
    )
  }
};

AddressPage.displayName = 'AddressPage';

AddressPage.propTypes = {
  address: PropTypes.object.isRequired
};
