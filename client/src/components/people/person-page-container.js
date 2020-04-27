import { connect } from 'react-redux';
import PersonPageComponent from './person-page';

// selectors
import {
  findPerson,
  people,
  selectedPerson,
  selectedPersonLoaded
} from '../../selectors/people';

// ducks
import { softDeletePerson, completePerson, getPerson } from '../../ducks/people';

export const mapStateToProps = (state, ownProps) => {
  const personId = parseInt(ownProps.match.params.personId)
  const person = findPerson(people(state), personId) || {}
  return {
    personId,
    person: selectedPerson(state),
    selectedPersonLoaded: selectedPersonLoaded(state)
  };
};

export const mapDispatchToProps = {
  softDeletePerson,
  completePerson,
  getPerson
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonPageComponent);
