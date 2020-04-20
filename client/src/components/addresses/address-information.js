import React from 'react';
import Panel from '../common/panels/panel';
import PanelHeader from '../common/panels/panel-header';
import PanelBody from '../common/panels/panel-body';
import AddressFormContainer from './address-form-container';
import { formatCountry } from '../../utils/view-utils';

export default class AddressInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleFormAction = this.handleFormAction.bind(this)
    this.renderAddressForm = this.renderAddressForm.bind(this)
    this.renderViewOnlyAddress = this.renderViewOnlyAddress.bind(this)
  }

  render() {
    const { address } = this.props;
    const { editing } = this.state;
    const addressBlock = editing ? this.renderAddressForm(address.id) : this.renderViewOnlyAddress()

    return (
      <div className="row">
        <Panel>
          <PanelHeader
            headerText="Address Information"
            editButton={!editing}
            handleEditClick={this.handleEditClick}
          />
          <PanelBody>
            {addressBlock}
          </PanelBody>
        </Panel>
      </div>
    )
  }

  handleEditClick() {
    this.setState({ editing: true })
  }

  handleFormAction() {
    this.setState({ editing: false })
  }

  renderAddressForm(addressId) {
    return ( <AddressFormContainer addressId={addressId}  handleFormAction={this.handleFormAction}/> )
  }

  renderViewOnlyAddress() {
    const { address } = this.props;

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
              value={address.state}
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
}
