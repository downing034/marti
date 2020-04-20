import { find } from 'lodash';

const addressSelector = state => state.addresses;
export const addresses = state => addressSelector(state).addresses;
export const addressesLoaded = state => addressSelector(state).addressesLoaded;
export const deletedAddresses = state => addressSelector(state).deletedAddresses;
export const activeAddresses = state => addressSelector(state).activeAddresses;
export const completedAddresses = state => addressSelector(state).completedAddresses;

export function findAddress(addresses, addressId) {
  return find(addresses, (a) => a.id === addressId);
};
