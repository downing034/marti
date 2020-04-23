import { connect } from 'react-redux';
import PersonPageComponent from './person-page';

// selectors
import { findPerson, people } from '../../selectors/people';

// ducks
import { softDeletePerson, completePerson } from '../../ducks/people';

export const mapStateToProps = (state, ownProps) => {
  const personId = parseInt(ownProps.match.params.personId)
  const person = findPerson(people(state), personId) || {}
  return { person };
};

export const mapDispatchToProps = { softDeletePerson, completePerson }

export default connect(mapStateToProps, mapDispatchToProps)(PersonPageComponent);
