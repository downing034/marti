import { connect } from 'react-redux';
import PersonEditFormComponent from './person-edit-form';

// ducks
import { submitPersonForm } from '../../../ducks/people';

// selectors
import { findPerson, people } from '../../../selectors/people';

export const mapStateToProps = (state, ownProps) => {
  const personId = parseInt(ownProps.personId)
  const person = findPerson(people(state), personId)

  const initialValues = person ? { ...person } : {}
  return {
    initialValues: initialValues,
    person,
    handleFormAction: ownProps.handleFormAction
  };
};

export const mapDispatchToProps = { submitPersonForm };

export default connect(mapStateToProps, mapDispatchToProps)(PersonEditFormComponent);
