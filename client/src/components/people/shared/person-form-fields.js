import React from 'react'
import { Field } from 'redux-form';


export default function PersonFormFields() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <label htmlFor="first-name">First Name </label>
        </div>
        <div className="col-md-9">
          <Field
            id="first-name"
            name="firstName"
            component='input'
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="last-name">Last Name </label>
        </div>
        <div className="col-md-9">
          <Field
            id="last-name"
            name="lastName"
            component='input'
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="buyer">Person Type </label>
        </div>
        <div className="col-md-3 text-center">
          <label htmlFor="buyer">Buyer </label>
        </div>

        <div className="col-md-3 text-center">
          <label htmlFor="seller">Seller </label>
        </div>

        <div className="col-md-3 text-center">
          <label htmlFor="agent">Agent </label>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 offset-3 text-center">
          <Field name="isBuyer" id="buyer" component='input' type="checkbox"/>
        </div>

        <div className="col-md-3  text-center">
          <Field name="isSeller" id="seller" component='input' type="checkbox"/>
        </div>

        <div className="col-md-3 text-center">
          <Field name="isAgent" id="agent" component='input' type="checkbox"/>
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="notes">Notes </label>
        </div>
        <div className="col-md-9">
          <Field
            id="notes"
            name="notes"
            component='textarea'
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="primary-email">Primary Email </label>
        </div>

         <div className="col-md-9">
          <Field
            id="primary-email"
            name="primaryEmail"
            component='input'
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="secondary-email">Secondary Email </label>
        </div>

         <div className="col-md-9">
          <Field
            id="secondary-email"
            name="secondaryEmail"
            component='input'
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="phone-one">Phone One </label>
        </div>
        <div className="col-md-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <Field
                id="phone-one-label"
                name="phoneOneLabel"
                component="select"
                className="form-control input-group-text phone-select"
              >
                <option value="mobile">Mobile</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </Field>
            </div>
            <Field
              id="phone-one"
              name="phoneOne"
              component='input'
              type="text"
              className="form-control"
            />
          </div>
        </div>

        <div className="col-md-2 offset-1">
          <label htmlFor="phone-two">Phone Two </label>
        </div>
        <div className="col-md-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <Field
                  id="phone-two-label"
                  name="phoneTwoLabel"
                  component="select"
                  className="form-control input-group-text phone-select"
                >
                  <option value="mobile">Mobile</option>
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                  <option value="other">Other</option>
              </Field>
            </div>
            <Field
              id="phone-two"
              name="phoneTwo"
              component='input'
              type="text"
              className="form-control"
            />
          </div>
        </div>

      </div>
      <br/>

    </div>
  )
}
