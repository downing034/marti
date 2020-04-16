import React from 'react';
import Panel from '../common/panels/panel';
import PanelHeader from '../common/panels/panel-header';
import PanelBody from '../common/panels/panel-body';

export default class AddressPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      addressEditable: false
    }
  }

  render() {
    const { address } = this.props;
    return (
      <div className="container">
        <div className="row">

          <Panel>
            <PanelHeader headerText="Address Information" />
            <PanelBody>
              <h5>{address.address}</h5>
              <h5>{address.city}</h5>
              <h5>{address.state}</h5>
              <h5>{address.zipCode}</h5>
              <h5>{address.country}</h5>
            </PanelBody>
          </Panel>
        </div>
      </div>
    )
  }

  renderAddressSection() {}
};

AddressPage.displayName = 'AddressPage';

// AddressPage.propTypes = {

// }
