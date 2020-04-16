import { find } from 'lodash';

const addressSelector = state => state.addresses;
export const addresses = state => addressSelector(state).addresses;
export const addressesLoaded = state => addressSelector(state).addressesLoaded;

export function findAddress(addresses, addressId) {
  return find(addresses, (a) => a.id === addressId);
};
