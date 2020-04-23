import React from 'react';

export default function PersonInformationViewOnly({ person }) {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-md-3">
          <label htmlFor="first-name">First Name </label>
        </div>

         <div className="col-md-9">
          <input
            id="first-name"
            type="text"
            className="form-control"
            disabled
            value={person.firstName}
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="last-name">Last Name </label>
        </div>

         <div className="col-md-9">
          <input
            id="last-name"
            type="text"
            className="form-control"
            disabled
            value={person.lastName}
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
          <input
            name="isBuyer"
            id="buyer"
            type="checkbox"
            defaultChecked={person.isBuyer}
            disabled
          />
        </div>

        <div className="col-md-3  text-center">
          <input
            name="isSeller"
            id="seller"
            type="checkbox"
            defaultChecked={person.isSeller}
            disabled
          />
        </div>

        <div className="col-md-3 text-center">
          <input
            name="isAgent"
            id="agent"
            type="checkbox"
            defaultChecked={person.isAgent}
            disabled
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="notes">Notes </label>
        </div>

         <div className="col-md-9">
          <input
            id="notes"
            type="textarea"
            className="form-control"
            disabled
            value={person.notes}
          />
        </div>
      </div>
      <br/>
      <hr/>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="primary-email">Primary Email </label>
        </div>

         <div className="col-md-9">
          <input
            id="primary-email"
            type="text"
            className="form-control"
            disabled
            value={person.primaryEmail}
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="secondary-email">Secondary Email </label>
        </div>

         <div className="col-md-9">
          <input
            id="secondary-email"
            type="text"
            className="form-control"
            disabled
            value={person.secondaryEmail}
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
              <span class="input-group-text" id="phone-one-label">{person.phoneOneLabel}</span>
            </div>
            <input
              id="phone-one"
              type="text"
              className="form-control"
              disabled
              value={person.phoneOne}
            />
          </div>
        </div>

        <div className="col-md-2 offset-1">
          <label htmlFor="phone-two">Phone Two </label>
        </div>
        <div className="col-md-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="phone-two-label">{person.phoneTwoLabel}</span>
            </div>
            <input
              id="phone-two"
              type="text"
              className="form-control"
              disabled
              value={person.phoneTwo}
            />
          </div>
        </div>

      </div>
      <br/>
    </div>
  )
}
