import React from 'react';
import Panel from '../../common/panels/panel';
import PanelHeader from '../../common/panels/panel-header';
import PanelBody from '../../common/panels/panel-body';

import PersonCardContainer from './person-card-container';

export default class AddressPeople extends React.Component {
  // constructor(props) {
  //   super(props)

  // }

  render() {
    const { address } = this.props;



    return (
      <div className="row">
        <Panel>
          <PanelHeader
            headerText="Address Contacts"
          />
          <PanelBody>
            <div className="row">
              <PersonCardContainer personId="1" />
              <PersonCardContainer personId="2" />
              <PersonCardContainer personId="3" />
              <PersonCardContainer personId="4" />
            </div>
          </PanelBody>
        </Panel>
      </div>
    )
  }
}

AddressPeople.displayName = 'AddressPeople';

