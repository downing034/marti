import { connect } from 'react-redux';
import AddressIndexComponent from './index';

// ducks
import { getAddresses } from '../../ducks/addresses';

// selectors
import { addresses } from '../../selectors/addresses';

export const mapStateToProps = state => ({ addresses: addresses(state) });

export const mapDispatchToProps = { getAddresses };

export default connect(mapStateToProps, mapDispatchToProps)(AddressIndexComponent);
