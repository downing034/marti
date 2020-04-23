import React from 'react';
import Panel from '../../common/panels/panel';
import PanelHeader from '../../common/panels/panel-header';
import PanelBody from '../../common/panels/panel-body';
import PersonEditFormContainer from './person-edit-form-container';
import PersonInformationViewOnly from './person-information-view-only';

export default class PersonInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editing: false }
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleFormAction = this.handleFormAction.bind(this)
    this.renderPersonForm = this.renderPersonForm.bind(this)
    this.renderViewOnlyPerson = this.renderViewOnlyPerson.bind(this)
  }

  render() {
    const { person } = this.props;
    const { editing } = this.state;
    const personBlock = editing ? this.renderPersonForm(person.id) : this.renderViewOnlyPerson(person)

    return (
      <div className="row panel-spacing">
        <Panel>
          <PanelHeader
            headerText="Person Information"
            editButton={!editing}
            handleEditClick={this.handleEditClick}
          />
          <PanelBody>
            {personBlock}
          </PanelBody>
        </Panel>
      </div>
    )
  }

  handleEditClick() { this.setState({ editing: true }) }

  handleFormAction() { this.setState({ editing: false }) }

  renderPersonForm(personId) {
    return (<PersonEditFormContainer personId={personId}  handleFormAction={this.handleFormAction}/> )
  }

  renderViewOnlyPerson(person) {
    return (
      <PersonInformationViewOnly
        person={person}
      />
      )
  }
}

PersonInformation.displayName = 'PersonInformation';
