import React from 'react';
import Panel from '../../common/panels/panel';
import PanelHeader from '../../common/panels/panel-header';
import PanelBody from '../../common/panels/panel-body';
import AddressEditFormContainer from './address-edit-form-container';
import AddressInformationViewOnly from './address-information-view-only';

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
    const addressBlock = editing ? this.renderAddressForm(address.id) : this.renderViewOnlyAddress(address)

    return (
      <div className="row panel-spacing">
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

  handleEditClick() { this.setState({ editing: true }) }

  handleFormAction() { this.setState({ editing: false }) }

  renderAddressForm(addressId) {
    return ( <AddressEditFormContainer addressId={addressId}  handleFormAction={this.handleFormAction}/> )
  }

  renderViewOnlyAddress(address) {
    return ( <AddressInformationViewOnly address={address} /> )
  }
}
