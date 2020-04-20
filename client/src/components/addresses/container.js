import { connect } from 'react-redux';
import AddressIndexComponent from './index';

// ducks
import { getAddresses } from '../../ducks/addresses';

// selectors
import { activeAddresses } from '../../selectors/addresses';

export const mapStateToProps = state => ({ activeAddresses: activeAddresses(state) });

export const mapDispatchToProps = { getAddresses };

export default connect(mapStateToProps, mapDispatchToProps)(AddressIndexComponent);
