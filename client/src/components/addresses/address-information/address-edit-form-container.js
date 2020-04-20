import { connect } from 'react-redux';
import AddressEditFormComponent from './address-edit-form';

// ducks
import { submitAddressForm } from '../../../ducks/addresses';

// selectors
import { findAddress, addresses } from '../../../selectors/addresses';

export const mapStateToProps = (state, ownProps) => {
  const addressId = parseInt(ownProps.addressId)
  const address = findAddress(addresses(state), addressId)

  const initialValues = address ? { ...address } : {}
  return {
    initialValues: initialValues,
    address,
    handleFormAction: ownProps.handleFormAction
  };
};

export const mapDispatchToProps = { submitAddressForm };

export default connect(mapStateToProps, mapDispatchToProps)(AddressEditFormComponent);
