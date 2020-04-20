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
