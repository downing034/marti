import React from 'react';
import PropTypes from 'prop-types';
import AddressInformation from './address-information';
import '../../styles/buttons.css'

export default class AddressPage extends React.Component {
  handleAddressDelete(addressId) {
    const { history, deleteAddress } = this.props;

    return deleteAddress(addressId).then(() => {
      history.push('/addresses')
    })
  }

  render() {
    const { address } = this.props;
    return (
      <div className="container">
        <AddressInformation address={address} />

        <button
          className="btn btn-danger float-right delete-button"
          onClick={() => { if (window.confirm('Are you sure you wish to delete this address?')) this.handleAddressDelete(address.id) } }
        >Delete Address</button>
      </div>
    )
  }


};

AddressPage.displayName = 'AddressPage';

AddressPage.propTypes = {
  address: PropTypes.object.isRequired
};
