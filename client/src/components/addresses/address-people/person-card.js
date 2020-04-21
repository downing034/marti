import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faUserTag,
  faUserTie
} from '@fortawesome/free-solid-svg-icons'
import ComingSoon from '../../../images/coming-soon.jpeg';

import Panel from '../../common/panels/panel';
import PanelHeader from '../../common/panels/panel-header';
import PanelBody from '../../common/panels/panel-body';

import { fullName, setPersonType } from '../../../utils/view-utils';

import '../../../styles/person.css';

export default class PersonCard extends React.Component {

  render() {
    const { person, contactInfo } = this.props;
    const personType = setPersonType(person)

    const panelColor = this.setPanelColor(personType)

    return (
      <div className={`col-md-6 panel-spacing-bottom`}>
        <Panel classes={`person-card-${panelColor}`}>
          <div className={`card-header container-fluid text-center person-name ${panelColor}`}>
            {this.renderPersonTypeIcon(personType)}
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
                {!!contactInfo && !!contactInfo.primaryEmail ? contactInfo.primaryEmail : 'No email entered'}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 offset-1">
                Secondary Email:
              </div>

              <div className="col-md-5">
                {!!contactInfo && !!contactInfo.secondaryEmail ? contactInfo.secondaryEmail : 'No email entered'}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 offset-1">
                {`Phone One (${contactInfo.phone_one_label})`}:
              </div>

              <div className="col-md-5">
                {!!contactInfo && !!contactInfo.phone_one ? contactInfo.phone_one : 'No phone entered'}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 offset-1">
                {`Phone Two (${contactInfo.phone_two_label})`}:
              </div>

              <div className="col-md-5">
                {!!contactInfo && !!contactInfo.phone_two ? contactInfo.phone_two : 'No phone entered'}
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
    switch (personType) {
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

  renderPersonTypeIcon(personType) {
    switch (personType) {
      case 'Buyer':
        return (
          <FontAwesomeIcon
            icon={faShoppingCart}
            size="1x"
            color="#FFFFFF"
            title="Buyer"
          />
        )
      case 'Seller':
        return (
          <FontAwesomeIcon
            icon={faUserTag}
            size="1x"
            color="#FFFFFF"
            title="Seller"
          />
        )
      case 'Agent':
        return (
          <FontAwesomeIcon
            icon={faUserTie}
            size="1x"
            color="#FFFFFF"
            title="Agent"
          />
        )
      default:
        return null
    }
  }
}

PersonCard.displayName = 'PersonCard';

PersonCard.propTypes = {
  person: PropTypes.object
}
