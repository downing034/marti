import { connect } from 'react-redux';
import RootComponent from './root';

// ducks
import { getAddresses } from '../ducks/addresses';
import { getPeople } from '../ducks/people';

// selectors
import { addressesLoaded } from '../selectors/addresses';
import { peopleLoaded } from '../selectors/people';

export const mapStateToProps = state => ({
  addressesLoaded: addressesLoaded(state),
  peopleLoaded: peopleLoaded(state)
});

export const mapDispatchToProps = { getAddresses, getPeople };

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
