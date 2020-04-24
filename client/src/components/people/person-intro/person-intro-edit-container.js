import { connect } from 'react-redux';
import PersonIntroEditFormComponent from './person-intro-edit-form';

// ducks
import { submitPersonForm } from '../../../ducks/people';

// selectors
import { findPerson, people } from '../../../selectors/people';

export const mapStateToProps = (state, ownProps) => {
  const personId = parseInt(ownProps.personId)
  const person = findPerson(people(state), personId)

  const initialValues = person ? { ...person } : {}
  return {
    initialValues,
    person,
    handleFormAction: ownProps.handleFormAction
  };
};

export const mapDispatchToProps = { submitPersonForm };

export default connect(mapStateToProps, mapDispatchToProps)(PersonIntroEditFormComponent);
