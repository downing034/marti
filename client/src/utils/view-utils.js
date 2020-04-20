import { COUNTRY_LOCATIONS } from '../constants/country-list';

export function formatCountry(countryCode) {
  return COUNTRY_LOCATIONS[countryCode]
}
