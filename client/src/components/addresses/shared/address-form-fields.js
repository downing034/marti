import React from 'react'
import { Field } from 'redux-form';
import { map, keys } from 'lodash';

import { GROUPED_LOCATIONS } from '../../../constants/state-list';
import { COUNTRY_LOCATIONS } from '../../../constants/country-list';

function getOptions(locationGroup) {
  return map(keys(locationGroup), (key) => {
    return (<option key={key} value={`${key}`}>{locationGroup[key]}</option>);
  });
}

export default function AddressFormFields() {
  return (
    <div>
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
              {getOptions(GROUPED_LOCATIONS.usStates)}
            </optgroup>
            <optgroup label="Territories">
              {getOptions(GROUPED_LOCATIONS.usTerritories)}
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
            <option value="US">United States</option>
            <optgroup>
              {getOptions(COUNTRY_LOCATIONS)}
            </optgroup>
          </Field>
        </div>
      </div>
      <br/>
    </div>
  )
}
