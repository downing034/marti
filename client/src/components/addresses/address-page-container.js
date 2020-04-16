import { connect } from 'react-redux';
import AddressPageComponent from './address-page';

// ducks
import { getAddress, submitAddressForm } from '../../ducks/addresses';

// selectors
import { findAddress, addresses } from '../../selectors/addresses';

export const mapStateToProps = (state, ownProps) => {
  const addressId = parseInt(ownProps.match.params.addressId)
  return {
    address: findAddress(addresses(state), addressId)
  };
};

export const mapDispatchToProps = { submitAddressForm, getAddress };

export default connect(mapStateToProps, mapDispatchToProps)(AddressPageComponent);
