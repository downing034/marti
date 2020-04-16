import { connect } from 'react-redux';
import AddressIndexComponent from './index';

// ducks
import { loadAddresses } from '../../ducks/addresses';

// selectors
import { addressesLoaded, addresses } from '../../selectors/addresses';

export const mapStateToProps = state => ({
  addressesLoaded: addressesLoaded(state),
  addresses: addresses(state)
});

export const mapDispatchToProps = { loadAddresses };

export default connect(mapStateToProps, mapDispatchToProps)(AddressIndexComponent);
