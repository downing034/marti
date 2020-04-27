import axios from 'axios';
import { filter } from 'lodash';
// import { SubmissionError } from 'redux-form';

import { formatResponseFromApi, formatResponseToApi } from '../utils/api-utils';

// Actions
export const RECEIVE_PEOPLE_STARTED = 'RECEIVE_PEOPLE_STARTED';
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';
export const RECEIVE_SELECTED_PERSON = 'RECEIVE_SELECTED_PERSON';
export const UPDATE_PERSON_INFORMATION_STARTED = 'UPDATE_PERSON_INFORMATION_STARTED';
export const UPDATE_PERSON_INFORMATION = 'UPDATE_PERSON_INFORMATION';
export const DELETE_PERSON_STARTED = 'DELETE_PERSON_STARTED';
export const SUBMIT_NEW_PERSON_STARTED = 'SUBMIT_NEW_PERSON_STARTED';
export const PEOPLE_ERROR = 'PEOPLE_ERROR';

// Reducer
const initialState = {
  people: [],
  activePeople: [],
  peopleLoaded: false,
  deletedPeople: [],
  selectedPerson: {},
  selectedPersonLoaded: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_PEOPLE_STARTED':
      return {
        ...state,
      }
    case 'RECEIVE_PEOPLE':
      return {
        ...state,
        people: action.data,
        activePeople: filter(action.data, per => per.deletedEntity == null && !per.completed),
        deletedPeople: filter(action.data, per => per.deletedEntity === 'person' && !per.completed),
        completedPeople: filter(action.data, per => per.completed && per.deletedEntity !== 'person'),
        peopleLoaded: true
      }
    case 'RECEIVE_SELECTED_PERSON':
      return {
        ...state,
        selectedPerson: action.data,
        selectedPersonLoaded: true
      }
    case 'UPDATE_PERSON_INFORMATION':
      const existingPersonIndex = state.people.findIndex(person => person.id === action.data.id);
      let newState = {...state};
      newState.selectedPerson = action.data;
      newState.people[existingPersonIndex] = action.data;
      return newState;
    case 'DELETE_PERSON_STARTED':
      return {
        ...state,
        peopleLoaded: false
      }
    case 'PEOPLE_ERROR':
      return {
        ...state,
        peopleLoaded: false,
        error: action.error
      }
    default:
      return state
  };
};

// Action Creators
export const receivePeopleStarted = () => {
  return { type: RECEIVE_PEOPLE_STARTED };
};

export const receivePeople = (data) => {
  return { type: RECEIVE_PEOPLE, data };
};

export const receivePerson = (data) => {
  return { type: RECEIVE_SELECTED_PERSON, data };
};

export const updatePersonInformationStarted = () => {
  return { type: UPDATE_PERSON_INFORMATION_STARTED }
}

export const updatePersonInformation = (data) => {
  return { type: UPDATE_PERSON_INFORMATION, data }
}

export const deletePersonStarted = () => {
  return { type: DELETE_PERSON_STARTED }
}

export const submitNewPersonStarted = () => {
  return { type: SUBMIT_NEW_PERSON_STARTED }
}

export const peopleError = (data) => {
  return { type: PEOPLE_ERROR, data };
};

// services
export function getPeople() {
  return dispatch => {
    dispatch(receivePeopleStarted());
    return axios.get('/api/people').then(res => {
      return dispatch(receivePeople(formatResponseFromApi(res.data)));
    })
    .catch(error => {
      return dispatch(peopleError(error));
    });
  };
};

export function getPerson(personId) {
  return dispatch => {
    dispatch(receivePeopleStarted());
    return axios.get(`/api/people/${personId}`).then(res => {
      return dispatch(receivePerson(formatResponseFromApi(res.data)));
    })
    .catch(error => {
      return dispatch(peopleError(error));
    });
  };
}

export function submitPersonForm(personData) {
  // editing an existing person
  if (personData.id) {
    return dispatch => {
      dispatch(updatePersonInformationStarted())
      return axios.patch(`/api/people/${personData.id}`, formatResponseToApi('person', personData)).then((res) => {
        return dispatch(updatePersonInformation(formatResponseFromApi(res.data)))
      })
      .catch(error => {
        return dispatch(peopleError(error));
      });
    }
  } else {
    // for new people
    return dispatch => {
      dispatch(submitNewPersonStarted())
      return axios.post('/api/people', formatResponseToApi('person', personData)).then((res) => {
        return dispatch(getPeople())
      })
      .catch(error => {
        return dispatch(peopleError(error));
      });
    }
  }
}

export function deletePerson(personId) {
  return dispatch => {
    dispatch(deletePersonStarted());
    return axios.delete(`/api/people/${personId}`).then(() => {
      return dispatch(getPeople())
    })
    .catch(error => {
      return dispatch(peopleError(error));
    });
  };
}

export function softDeletePerson(personId) {
  const softDeleteData = formatResponseToApi('person', { id: personId, deletedEntity: 'person' })
  return dispatch => {
    dispatch(updatePersonInformationStarted())
    return axios.patch(`/api/people/${personId}`, softDeleteData).then((res) => {
      return dispatch(getPeople())
    })
    .catch(error => {
      return dispatch(peopleError(error));
    });
  }
}

export function restorePerson(personId) {
  const restoreData = formatResponseToApi('person', { id: personId, deletedEntity: null })
  return dispatch => {
    dispatch(updatePersonInformationStarted())
    return axios.patch(`/api/people/${personId}`, restoreData).then((res) => {
      return dispatch(getPeople())
    })
    .catch(error => {
      return dispatch(peopleError(error));
    });
  }
}

export function reactivatePerson(personId) {
  const reactivateData = formatResponseToApi('person', { id: personId, deletedEntity: null, completed: false })
  return dispatch => {
    dispatch(updatePersonInformationStarted())
    return axios.patch(`/api/people/${personId}`, reactivateData).then((res) => {
      return dispatch(getPeople())
    })
    .catch(error => {
      return dispatch(peopleError(error));
    });
  }
}

export function completePerson(personId) {
  const completedData = formatResponseToApi('person', { id: personId, completed: true })
  return dispatch => {
    dispatch(updatePersonInformationStarted())
    return axios.patch(`/api/people/${personId}`, completedData).then((res) => {
      return dispatch(getPeople())
    })
    .catch(error => {
      return dispatch(peopleError(error));
    });
  }
}
