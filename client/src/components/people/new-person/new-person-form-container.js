import { connect } from 'react-redux';
import NewPersonFormComponent from './new-person-form';

// ducks
import { submitPersonForm } from '../../../ducks/people';

export const mapStateToProps = (state, ownProps) => {
  const initialValues = {
    isAgent: false,
    isBuyer: false,
    isSeller: false,
    addresses: []
  }
  return { initialValues, handleFormAction: ownProps.handleFormAction };
};

export const mapDispatchToProps = { submitPersonForm };

export default connect(mapStateToProps, mapDispatchToProps)(NewPersonFormComponent);
