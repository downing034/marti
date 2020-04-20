import { connect } from 'react-redux';
import ReportsComponent from './index';

// selectors
import { completedAddresses } from '../../selectors/addresses';

// ducks
import {
  getAddresses,
  reactivateAddress
} from '../../ducks/addresses';

export const mapStateToProps = (state) => {
  return { completedAddresses: completedAddresses(state) }
};

export const mapDispatchToProps = { getAddresses, reactivateAddress }

export default connect(mapStateToProps, mapDispatchToProps)(ReportsComponent);
