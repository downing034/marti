import { connect } from 'react-redux';
import AddressPageComponent from './address-page';

// selectors
import { findAddress, addresses } from '../../selectors/addresses';

// ducks
import { softDeleteAddress, completeAddress } from '../../ducks/addresses';

export const mapStateToProps = (state, ownProps) => {
  const addressId = parseInt(ownProps.match.params.addressId)
  return { address: findAddress(addresses(state), addressId) || {} };
};

export const mapDispatchToProps = { softDeleteAddress, completeAddress }

export default connect(mapStateToProps, mapDispatchToProps)(AddressPageComponent);
