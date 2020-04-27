import React from 'react';
import Panel from '../../common/panels/panel';
import PanelHeader from '../../common/panels/panel-header';
import PanelBody from '../../common/panels/panel-body';
import PersonIntroEditFormContainer from './person-intro-edit-container';
import PersonIntroViewOnly from './person-intro-view-only';

export default class PersonIntro extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editing: false }
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleFormAction = this.handleFormAction.bind(this)
    this.renderPersonIntroForm = this.renderPersonIntroForm.bind(this)
    this.renderViewOnlyPersonIntroForm = this.renderViewOnlyPersonIntroForm.bind(this)
  }

  render() {
    const { person } = this.props;
    const { editing } = this.state;
    const personBlock = editing ? this.renderPersonIntroForm(person) : this.renderViewOnlyPersonIntroForm(person)

    return (
      <div className="row panel-spacing">
        <Panel>
          <PanelHeader
            headerText="Person Introduction"
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

  renderPersonIntroForm(person) {
    console.log('coolcart')
    return ( <PersonIntroEditFormContainer person={person}  handleFormAction={this.handleFormAction}/>)
  }

  renderViewOnlyPersonIntroForm(person) {
    return ( <PersonIntroViewOnly person={person} /> )
  }
}

PersonIntro.displayName = 'PersonIntro';
