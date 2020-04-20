import { connect } from 'react-redux';
import NewAddressFormComponent from './new-address-form';

// ducks
import { submitAddressForm } from '../../../ducks/addresses';

export const mapStateToProps = (state, ownProps) => {
  const initialValues = { state: 'MN', country: 'US' }
  return { initialValues, handleFormAction: ownProps.handleFormAction };
};

export const mapDispatchToProps = { submitAddressForm };

export default connect(mapStateToProps, mapDispatchToProps)(NewAddressFormComponent);
