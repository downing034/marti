import { connect } from 'react-redux';
import ReportsComponent from './index';

// selectors
import { completedAddresses } from '../../selectors/addresses';
import { completedPeople } from '../../selectors/people';

// ducks
import {
  getAddresses,
  reactivateAddress
} from '../../ducks/addresses';

import {
  getPeople,
  reactivatePerson
} from '../../ducks/people';

export const mapStateToProps = (state) => {
  return {
    completedAddresses: completedAddresses(state),
    completedPeople: completedPeople(state)
  }
};

export const mapDispatchToProps = {
  getAddresses,
  reactivateAddress,
  getPeople,
  reactivatePerson
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsComponent);
