import React from 'react';
import PropTypes from 'prop-types';
import { renderPersonTypeIcon } from '../../../utils/view-utils';

import ComingSoon from '../../../images/coming-soon.jpeg';

import Panel from '../../common/panels/panel';
import PanelHeader from '../../common/panels/panel-header';
import PanelBody from '../../common/panels/panel-body';

import {
  fullName,
  setPersonType,
  renderAgentIcon,
  renderBuyerIcon,
  renderSellerIcon
} from '../../../utils/view-utils';

import '../../../styles/person.css';

export default class PersonCard extends React.Component {

  render() {
    const { person } = this.props;
    const buyer = person.isBuyer;
    const seller = person.isSeller;
    const agent = person.isAgent;

    const personType = setPersonType(person)

    const panelColor = this.setPanelColor(personType)

    return (
      <div className={`col-md-6 panel-spacing-bottom`}>
        <Panel classes={`person-card-${panelColor}`}>
          <div className={`card-header container-fluid text-center person-name ${panelColor}`}>
            { buyer ? renderBuyerIcon("#FFFFFF") : '' }
            { seller ? renderSellerIcon("#FFFFFF") : '' }
            { agent ? renderAgentIcon("#FFFFFF") : '' }
            {fullName(person)}
          </div>

          <PanelBody>
            <div className="row">
              <img id="profile-photo" src={ComingSoon} alt="coming soon" />
            </div>
            <div className="row panel-spacing-top">
              <div className="col-md-5 offset-1">
                Primary Email:
              </div>

              <div className="col-md-5">
                {person.primaryEmail ? person.primaryEmail : 'No email entered'}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 offset-1">
                Secondary Email:
              </div>

              <div className="col-md-5">
                {person.secondaryEmail ? person.secondaryEmail : 'No email entered'}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 offset-1">
                {`Phone One (${person.phone_one_label})`}:
              </div>

              <div className="col-md-5">
                {person.phone_one ? person.phone_one : 'No phone entered'}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 offset-1">
                {`Phone Two (${person.phone_two_label})`}:
              </div>

              <div className="col-md-5">
                {person.phone_two ? person.phone_two : 'No phone entered'}
              </div>
            </div>

            <div className="row text-center">
              <div className="col-md-10 offset-1">
                {this.renderPersonNotes(person)}
              </div>
            </div>
          </PanelBody>
        </Panel>
      </div>
    )
  }

  renderPersonNotes(person) {
    if (person.notes) {
      return ( person.notes )
    } else {
      return (<br />)
    }
  }

  setPanelColor(personType) {
    if (personType.length > 1) {
      return 'black';
    } else {
      switch (personType[0]) {
        case 'Buyer':
          return 'orange'
        case 'Seller':
          return 'blue'
        case 'Agent':
          return 'purple'
        default:
          return ''
      }
    }

  }
}

PersonCard.displayName = 'PersonCard';

PersonCard.propTypes = {
  person: PropTypes.object
}
