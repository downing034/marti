import { COUNTRY_LOCATIONS } from '../constants/country-list';
import { GROUPED_LOCATIONS } from '../constants/state-list';

export function formatCountry(countryCode) {
  return COUNTRY_LOCATIONS[countryCode]
}

export function formatState(stateCode) {
  // getting these separately for clarity purposes
  const states = GROUPED_LOCATIONS.usStates;
  const territories = GROUPED_LOCATIONS.usTerritories;
  const provinces = GROUPED_LOCATIONS.canadianProvinces
  const combinedList = { ...states, ...territories, ...provinces }
  return combinedList[stateCode]
}

export function formattedAddress(address) {
  return `${address.address}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`
}

export function fullName(person) {
  const firstName = person.firstName
  const lastName = person.lastName

  if (firstName && lastName) {
    return `${person.firstName} ${person.lastName}`
  } else if (firstName && !lastName) {
    return person.firstName
  } else {
    return "NAME MISSING"
  }
}

export function setPersonType(person) {
  if(person.isBuyer) {
    return "Buyer"
  } else if (person.isSeller) {
    return "Seller"
  } else if (person.isAgent) {
    return "Agent"
  } else {
    return undefined
  }
}
