import React from 'react';

const CountriesContext = React.createContext({
  countries: [],
  countryInDetails: null,
  isFetching: false,
  error: null,
  onSelectCountry: countryId => {},
  onUnselectCountry: () => {},
  onClearError: () => {}
});

export default CountriesContext;
