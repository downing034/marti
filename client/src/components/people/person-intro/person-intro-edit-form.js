import React from 'react';
import { reduxForm } from 'redux-form';
import PersonIntroFormFields from '../shared/person-intro-form-fields';

import BottomButtons from '../../common/form/bottom-buttons';


class PersonInformationForm extends React.Component {
  constructor(props) {
    super(props)
    this.onReset = this.onReset.bind(this)
  }

  onSubmit = values => {
    const { submitPersonForm, dirty, handleFormAction } = this.props;
    if (dirty) {
      return submitPersonForm(values).then(() => {
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
      <form className="form-group" id="person-intro" onSubmit={handleSubmit(this.onSubmit)} noValidate>

        <PersonIntroFormFields />
        <BottomButtons
          id="edit-person-buttons"
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
  form: 'person-intro'
})(PersonInformationForm);
