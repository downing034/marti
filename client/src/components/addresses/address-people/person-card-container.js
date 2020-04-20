import { connect } from 'react-redux';
import PersonCardComponent from './person-card';

// selectors
import { findPerson } from '../../../selectors/people';


export const mapStateToProps = (state, ownProps) => {
  // delete me
  const fakePerson = {
      id: 1,
      firstName: 'Paul',
      lastName: 'Downing',
      isBuyer: true,
      contactInfos: [
        {
          primaryEmail: 'email@example.com'
        }
      ]
    }

    const fakePerson2 = {
      id: 2,
      firstName: 'Marti',
      lastName: 'Esty',
      isAgent: true,
      contactInfos: [
        {
          phone_one_label: 'mobile',
          phone_one: '123-456-0789'
        }
      ]
    }

    const fakePerson3 = {
      id: 3,
      firstName: 'Paige',
      lastName: 'Stradley',
      isSeller: true
    }

    const fakePerson4 = {
      id: 4,
      firstName: 'Potato',
      lastName: 'Dog'
    }
  const people = [fakePerson, fakePerson2, fakePerson3, fakePerson4]

  const personId = parseInt(ownProps.personId)
  const person = findPerson(people, personId) || {}

  const contactInfo = person.contactInfos ? person.contactInfos[0] : {}

  console.log('pid', personId)
  console.log('person', person)
  console.log('contactInfo', contactInfo)

  return {
    person: person,
    contactInfo: contactInfo
    // person: findPerson(people(state), personId) || {}
  };
};

// export const mapDispatchToProps = { softDeleteAddress, completeAddress }

export default connect(mapStateToProps)(PersonCardComponent);
