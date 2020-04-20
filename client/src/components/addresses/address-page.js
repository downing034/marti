import React from 'react';
import PropTypes from 'prop-types';
import AddressInformation from './address-information/address-information';
import AddressPeople from './address-people/address-people';
import '../../styles/buttons.css'

export default class AddressPage extends React.Component {
  handleAddressDelete(addressId) {
    const { history, softDeleteAddress } = this.props;
    return softDeleteAddress(addressId).then(() => {
      history.push('/addresses')
    })
  }

  handleAddressComplete(addressId) {
    const { history, completeAddress } = this.props;
    return completeAddress(addressId).then(() => {
      history.push('/addresses')
    })
  }

  render() {
    const { address } = this.props;
    return (
      <div className="container">
        <AddressInformation address={address} />
        <AddressPeople />

        <button
          className="btn btn-warning float-left complete-button"
          onClick={() => { if (window.confirm('Are you sure you want to complete this address.')) this.handleAddressComplete(address.id) } }
        >Complete Address</button>
        <button
          className="btn btn-danger float-right delete-button"
          onClick={() => { if (window.confirm('Deleting this address will move it to the Trash bin. To completely remove it from the system, delete it here and from the trash bin.')) this.handleAddressDelete(address.id) } }
        >Delete Address</button>
      </div>
    )
  }
};

AddressPage.displayName = 'AddressPage';

AddressPage.propTypes = {
  address: PropTypes.object.isRequired
};
