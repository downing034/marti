import React from 'react';
import { reduxForm } from 'redux-form';
import PersonFormFields from '../shared/person-form-fields';
import BottomButtons from '../../common/form/bottom-buttons';

class NewPersonForm extends React.Component {
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
    reset()
    handleFormAction()
  }

  render() {
    const { handleSubmit, submitting, dirty } = this.props;
    return (
      <form className="form-group" id="new-person" onSubmit={handleSubmit(this.onSubmit)} noValidate>

        <PersonFormFields />
        <BottomButtons
          id="new-person-buttons"
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
  form: 'new-person',
  enableReinitialize: true // load the form with default values every time
})(NewPersonForm);
