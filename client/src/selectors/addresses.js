const addressSelector = state => state.addresses
export const addresses = state => addressSelector(state).addresses
export const addressesLoaded = state => addressSelector(state).addressesLoaded
