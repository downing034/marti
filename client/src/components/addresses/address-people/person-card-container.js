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
      notes: "prefers to be contacted via email",
      primaryEmail: 'email@example.com'
    }

    const fakePerson2 = {
      id: 2,
      firstName: 'Marti',
      lastName: 'Esty',
      isAgent: true,
      phone_one_label: 'mobile',
      phone_one: '123-456-0789'
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

    const fakePerson5 = {
      id: 5,
      firstName: 'Cat',
      lastName: 'Dog',
      isBuyer: true,
      isAgent: true
    }

  const people = [fakePerson, fakePerson2, fakePerson3, fakePerson4, fakePerson5]

  const personId = parseInt(ownProps.personId)
  const person = findPerson(people, personId) || {}

  return { person };
};

// export const mapDispatchToProps = { softDeleteAddress, completeAddress }

export default connect(mapStateToProps)(PersonCardComponent);
