import React from 'react';
import PropTypes from 'prop-types';
import PersonInformation from './person-information/person-information';
import '../../styles/buttons.css'

export default class PersonPage extends React.Component {
  handlePersonDelete(personId) {
    const { history, softDeletePerson } = this.props;
    return softDeletePerson(personId).then(() => {
      history.push('/people')
    })
  }

  handlePersonComplete(personId) {
    const { history, completePerson } = this.props;
    return completePerson(personId).then(() => {
      history.push('/people')
    })
  }

  render() {
    const { person } = this.props;
    return (
      <div className="container">
        <PersonInformation person={person} />

        <button
          className="btn btn-warning float-left complete-button"
          onClick={() => { if (window.confirm('Are you sure you want to complete this person.')) this.handlePersonComplete(person.id) } }
        >Complete Person</button>
        <button
          className="btn btn-danger float-right delete-button"
          onClick={() => { if (window.confirm('Deleting this person will move it to the Trash bin. To completely remove it from the system, delete it here and from the trash bin.')) this.handlePersonDelete(person.id) } }
        >Delete Person</button>
      </div>
    )
  }
};

PersonPage.displayName = 'PersonPage';

PersonPage.propTypes = {
  person: PropTypes.object.isRequired
};
