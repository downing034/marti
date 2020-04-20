import React from 'react';
import { formatState, formatCountry } from '../../../utils/view-utils';

export default function AddressInformationViewOnly({ address }) {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-md-3">
          <label htmlFor="address">Address </label>
        </div>

         <div className="col-md-9">
          <input
            id="address"
            type="text"
            className="form-control"
            disabled
            value={address.address}
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="city">City </label>
        </div>

         <div className="col-md-9">
          <input
            id="city"
            type="text"
            className="form-control"
            disabled
            value={address.city}
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="state">State </label>
        </div>

         <div className="col-md-9">
          <input
            id="state"
            type="text"
            className="form-control"
            disabled
            value={formatState(address.state)}
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="zipCode">Zip Code </label>
        </div>

         <div className="col-md-9">
          <input
            id="zipCode"
            type="text"
            className="form-control"
            disabled
            value={address.zipCode}
          />
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="country">Country </label>
        </div>

         <div className="col-md-9">
          <input
            id="country"
            type="text"
            className="form-control"
            disabled
            value={formatCountry(address.country)}
          />
        </div>
      </div>
      <br/>
    </div>
  )
}
