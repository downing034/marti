import React from 'react';
import { map, keys } from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { GROUPED_LOCATIONS } from '../../constants/state-list';
import { COUNTRY_LOCATIONS } from '../../constants/country-list';

// import PreferencesFormFields from './preferences-form-fields';
// import BottomButtons from '../bottom-buttons';


class AddressInformationForm extends React.Component {

  onSubmit = values => {
    const { submitAddressForm, dirty } = this.props;
    if (dirty) {
      return submitAddressForm(values);
    }
  }

  getOptions(locationGroup) {
    return map(keys(locationGroup), (key) => {
      return (<option key={key} value={`${key}`}>{locationGroup[key]}</option>);
    });
  }

  render() {
    const { handleSubmit, submitting, reset } = this.props;
    console.log(this.props)
    return (
      <form className="form-group" id="address-information" onSubmit={handleSubmit(this.onSubmit)} noValidate>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="address">Address </label>
          </div>
          <div className="col-md-9">
            <Field
              id="address"
              name="address"
              component='input'
              type="text"
              className="form-control"
              placeholder="ex. 546 E Washington Ave, Apt.5"
            />
          </div>
        </div>
        <br/>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="city">City </label>
          </div>
          <div className="col-md-9">
            <Field
              id="city"
              name="city"
              component='input'
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <br/>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="state">State </label>
          </div>
          <div className="col-md-9">
            <Field
              id="state"
              name="state"
              component="select"
              className="form-control"
            >
              <option />
              <option value="MN">Minnesota</option>
              <optgroup label="States">
                {this.getOptions(GROUPED_LOCATIONS.usStates)}
              </optgroup>
              <optgroup label="Territories">
                {this.getOptions(GROUPED_LOCATIONS.usTerritories)}
              </optgroup>
            </Field>
          </div>
        </div>
        <br/>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="zipCode">Zip Code </label>
          </div>
          <div className="col-md-9">
            <Field
              id="zipCode"
              name="zipCode"
              component='input'
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <br/>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="country">Country </label>
          </div>
          <div className="col-md-9">
            <Field
              id="country"
              name="country"
              component="select"
              className="form-control"
            >
              <option />
              <option value="United States">United States</option>
              <optgroup>
                {this.getOptions(COUNTRY_LOCATIONS)}
              </optgroup>
            </Field>
          </div>
        </div>
        <br/>





        { /*<BottomButtons id="preferences-buttons" submitting={submitting} onCancel={reset} onSubmit={this.handleSubmit} >*/}
      </form>
    );
  }
}

export default reduxForm({
  form: 'address-information'//,
  // enableReinitialize: true // to load initialValues
})(AddressInformationForm);
