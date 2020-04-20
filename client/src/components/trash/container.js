import { connect } from 'react-redux';
import TrashComponent from './index';

// selectors
import { deletedAddresses } from '../../selectors/addresses';

// ducks
import {
  getAddresses,
  deleteAddress,
  restoreAddress
} from '../../ducks/addresses';

export const mapStateToProps = (state) => {
  return { deletedAddresses: deletedAddresses(state) }
};

export const mapDispatchToProps = { getAddresses, restoreAddress, deleteAddress }

export default connect(mapStateToProps, mapDispatchToProps)(TrashComponent);
