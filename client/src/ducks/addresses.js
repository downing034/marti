// import the api calls here
import axios from 'axios';
import * as camelcaseKeys from 'camelcase-keys';
// import { SubmissionError } from 'redux-form';

// selectors
// import { findPrimaryByPerson, getContactInfos } from '../selectors/addresses';

// Actions
export const RECEIVE_ADDRESSES_STARTED = 'RECEIVE_ADDRESSES_STARTED';
export const RECEIVE_ADDRESSES = 'RECEIVE_ADDRESSES';
export const ADDRESSES_ERROR = 'ADDRESSES_ERROR';

// Reducer
const initialState = { addresses: [], addressesLoaded: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_ADDRESSES_STARTED':
      return {
        ...state,
      }
    case 'RECEIVE_ADDRESSES':
      return {
        ...state,
        addresses: action.data,
        addressesLoaded: true
      }
    case 'ADDRESSES_ERROR':
      return {
        ...state,
        addressesLoaded: false,
        error: action.error
      }
    default:
      return state
  };
};

// Action Creators
export const receiveAddressesStarted = () => {
  return { type: RECEIVE_ADDRESSES_STARTED };
};

export const receiveAddresses = (data) => {
  return { type: RECEIVE_ADDRESSES, data };
};

export const addressesError = (data) => {
  return { type: ADDRESSES_ERROR, data };
};

// services
export function getAddresses() {
  return dispatch => {
    dispatch(receiveAddressesStarted());
    return axios.get('/api/addresses').then(res => {
      return dispatch(receiveAddresses(camelcaseKeys(res.data)));
    })
    .catch(error => {
      return dispatch(addressesError(error));
    });
  };
};

export function getAddress(addressId) {
  return dispatch => {
    dispatch(receiveAddressesStarted());
    return axios.get(`/api/addresses/${addressId}`).then(res => {
      return dispatch(receiveAddresses(camelcaseKeys(res.data)));
    })
    .catch(error => {
      return dispatch(addressesError(error));
    });
  };
}

export function submitAddressForm(addressData) {
  console.log('foobar')
}

