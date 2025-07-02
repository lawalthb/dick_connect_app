import { allCountries } from 'country-telephone-data';

export const countryOptions = allCountries.map((country) => ({
  name: country.name,
  iso2: country.iso2,
  dialCode: `+${country.dialCode}`,
  flag: `https://flagcdn.com/w40/${country.iso2}.png`,
}));
