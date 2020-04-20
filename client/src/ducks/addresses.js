// import the api calls here
import axios from 'axios';
import * as camelcaseKeys from 'camelcase-keys';
import * as snakecaseKeys from 'snakecase-keys';
import { filter } from 'lodash';
// import { SubmissionError } from 'redux-form';


// Actions
export const RECEIVE_ADDRESSES_STARTED = 'RECEIVE_ADDRESSES_STARTED';
export const RECEIVE_ADDRESSES = 'RECEIVE_ADDRESSES';
export const UPDATE_ADDRESS_INFORMATION_STARTED = 'UPDATE_ADDRESS_INFORMATION_STARTED';
export const UPDATE_ADDRESS_INFORMATION = 'UPDATE_ADDRESS_INFORMATION';
export const DELETE_ADDRESS_STARTED = 'DELETE_ADDRESS_STARTED';
export const SUBMIT_NEW_ADDRESS_STARTED = 'SUBMIT_NEW_ADDRESS_STARTED';
export const ADDRESSES_ERROR = 'ADDRESSES_ERROR';

// Reducer
const initialState = {
  addresses: [],
  activeAddresses: [],
  addressesLoaded: false,
  deletedAddresses: []
};

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
        activeAddresses: filter(action.data, add => add.deletedEntity == null && !add.completed),
        deletedAddresses: filter(action.data, add => add.deletedEntity === 'address' && !add.completed),
        completedAddresses: filter(action.data, add => add.completed && add.deletedEntity !== 'address'),
        addressesLoaded: true
      }
    case 'UPDATE_ADDRESS_INFORMATION':
      const existingAddressIndex = state.addresses.findIndex(address => address.id === action.data.id);
      let newState = {...state};
      newState.addresses[existingAddressIndex] = action.data;
      return newState;
    case 'DELETE_ADDRESS_STARTED':
      return {
        ...state,
        addressesLoaded: false
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

export const updateAddressInformationStarted = () => {
  return { type: UPDATE_ADDRESS_INFORMATION_STARTED }
}

export const updateAddressInformation = (data) => {
  return { type: UPDATE_ADDRESS_INFORMATION, data }
}

export const deleteAddressStarted = () => {
  return { type: DELETE_ADDRESS_STARTED }
}

export const submitNewAddressStarted = () => {
  return { type: SUBMIT_NEW_ADDRESS_STARTED }
}

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
  // editing an existing address
  if (addressData.id) {
    return dispatch => {
      dispatch(updateAddressInformationStarted())
      return axios.patch(`/api/addresses/${addressData.id}`, { address: snakecaseKeys(addressData) }).then((res) => {
        return dispatch(updateAddressInformation(camelcaseKeys(res.data)))
      })
      .catch(error => {
        return dispatch(addressesError(error));
      });
    }
  } else {
    // for new addresses
    return dispatch => {
      dispatch(submitNewAddressStarted())
      return axios.post('/api/addresses', { address: snakecaseKeys(addressData) }).then((res) => {
        return dispatch(getAddresses())
      })
      .catch(error => {
        return dispatch(addressesError(error));
      });
    }
  }
}

export function deleteAddress(addressId) {
  return dispatch => {
    dispatch(deleteAddressStarted());
    return axios.delete(`/api/addresses/${addressId}`).then(() => {
      return dispatch(getAddresses())
    })
    .catch(error => {
      return dispatch(addressesError(error));
    });
  };
}

export function softDeleteAddress(addressId) {
  const softDeleteData = { address: snakecaseKeys({ id: addressId, deletedEntity: 'address' }) }
  return dispatch => {
    dispatch(updateAddressInformationStarted())
    return axios.patch(`/api/addresses/${addressId}`, softDeleteData).then((res) => {
      return dispatch(getAddresses())
    })
    .catch(error => {
      return dispatch(addressesError(error));
    });
  }
}

export function restoreAddress(addressId) {
  const restoreData = { address: snakecaseKeys({ id: addressId, deletedEntity: null }) }
  return dispatch => {
    dispatch(updateAddressInformationStarted())
    return axios.patch(`/api/addresses/${addressId}`, restoreData).then((res) => {
      return dispatch(getAddresses())
    })
    .catch(error => {
      return dispatch(addressesError(error));
    });
  }
}

export function reactivateAddress(addressId) {
  const reactivateData = {
    address: snakecaseKeys({ id: addressId, deletedEntity: null, completed: false })
  }
  return dispatch => {
    dispatch(updateAddressInformationStarted())
    return axios.patch(`/api/addresses/${addressId}`, reactivateData).then((res) => {
      return dispatch(getAddresses())
    })
    .catch(error => {
      return dispatch(addressesError(error));
    });
  }
}

export function completeAddress(addressId) {
  const completedData = { address: snakecaseKeys({ id: addressId, completed: true }) }
  return dispatch => {
    dispatch(updateAddressInformationStarted())
    return axios.patch(`/api/addresses/${addressId}`, completedData).then((res) => {
      return dispatch(getAddresses())
    })
    .catch(error => {
      return dispatch(addressesError(error));
    });
  }
}
