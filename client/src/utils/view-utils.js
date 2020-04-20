import { COUNTRY_LOCATIONS } from '../constants/country-list';

export function formatCountry(countryCode) {
  console.log(COUNTRY_LOCATIONS[countryCode])
  return COUNTRY_LOCATIONS[countryCode]
}
