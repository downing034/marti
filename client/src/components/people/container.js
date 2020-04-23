import { connect } from 'react-redux';
import PersonIndexComponent from './index';

// ducks
import { getPeople } from '../../ducks/people';

// selectors
import { activePeople } from '../../selectors/people';

export const mapStateToProps = state => ({ activePeople: activePeople(state) });

export const mapDispatchToProps = { getPeople };

export default connect(mapStateToProps, mapDispatchToProps)(PersonIndexComponent);
