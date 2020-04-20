import React from 'react';
import { reduxForm } from 'redux-form';
import AddressFormFields from '../shared/address-form-fields';

import BottomButtons from '../../common/form/bottom-buttons';


class AddressInformationForm extends React.Component {
  constructor(props) {
    super(props)
    this.onReset = this.onReset.bind(this)
  }

  onSubmit = values => {
    const { submitAddressForm, dirty, handleFormAction } = this.props;
    if (dirty) {
      return submitAddressForm(values).then(() => {
        handleFormAction();
      });
    }
  }

  onReset() {
    const { handleFormAction, reset } = this.props;
    handleFormAction()
    reset()
  }

  render() {
    const { handleSubmit, submitting, dirty } = this.props;
    return (
      <form className="form-group" id="address-information" onSubmit={handleSubmit(this.onSubmit)} noValidate>

        <AddressFormFields />
        <BottomButtons
          id="edit-address-buttons"
          submitting={submitting}
          isDirty={dirty}
          onCancel={this.onReset}
          onSubmit={this.handleSubmit}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'address-information'
})(AddressInformationForm);
