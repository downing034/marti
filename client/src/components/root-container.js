import { connect } from 'react-redux';
import RootComponent from './root';

// ducks
import { getAddresses } from '../ducks/addresses';

// selectors
import { addressesLoaded } from '../selectors/addresses';

export const mapStateToProps = state => ({
  addressesLoaded: addressesLoaded(state)
});

export const mapDispatchToProps = { getAddresses };

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
