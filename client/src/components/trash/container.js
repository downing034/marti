import { connect } from 'react-redux';
import TrashComponent from './index';

// selectors
import { deletedAddresses } from '../../selectors/addresses';
import { deletedPeople } from '../../selectors/people';

// ducks
import {
  getAddresses,
  deleteAddress,
  restoreAddress
} from '../../ducks/addresses';

import {
  getPeople,
  deletePerson,
  restorePerson
} from '../../ducks/people';

export const mapStateToProps = (state) => {
  return {
    deletedAddresses: deletedAddresses(state),
    deletedPeople: deletedPeople(state)
  }
};

export const mapDispatchToProps = {
  getAddresses,
  restoreAddress,
  deleteAddress,
  getPeople,
  restorePerson,
  deletePerson
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashComponent);
