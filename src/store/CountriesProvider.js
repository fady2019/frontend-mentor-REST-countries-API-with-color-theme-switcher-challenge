import { useState, useEffect } from 'react';

import CountriesContext from './countries-context';

const CountriesProvider = props => {
  const [countries, setCountries] = useState([]);
  const [countryInDetails, setCountryInDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchCountriesHandler = async () => {
    setIsFetching(true);

    try {
      const response = await fetch('https://restcountries.com/v3.1/all');

      if (!response.ok) {
        throw new Error('Something went wrong, try again!');
      }

      const countriesData = await response.json();

      const transformedData = countriesData.map(country => {
        const nativeName = [];
        for (const key in country.name.nativeName) {
          const name = country.name.nativeName[key].common;

          if (!nativeName.includes(name)) {
            nativeName.push(name);
          }
        }

        const currencies = [];
        for (const key in country.currencies) {
          currencies.push(country.currencies[key].name);
        }

        const languages = [];
        for (const key in country.languages) {
          languages.push(country.languages[key]);
        }

        let borders = [];
        if (country.borders) {
          borders = country.borders.map(bor => {
            return {
              id: bor,
              name: countriesData.find(c => c.cca3 === bor).name.common,
            };
          });
        }

        const COUNTRY = {
          id: country.cca3,
          flag: country.flags.png,
          name: country.name.common,
          nativeName: nativeName || ['NO NATIVE NAME'], //array
          capital: country.capital || ['NO CAPITAL'], //array
          region: country.region,
          subregion: country.subregion,
          population: country.population,
          tld: country.tld || ['NO TLD'], //array
          currencies: currencies || ['NO CURRENCIES'], //array
          languages: languages || ['NO LANGUAGES'], //array
          borders: borders || [], //array of {id: '', name: ''}
        };

        return COUNTRY;
      });

      setCountries(transformedData);
    } catch (error) {
      setError(error.message);
    }

    setIsFetching(false);
  };

  useEffect(() => {
    fetchCountriesHandler();
  }, []);

  const selectCountryHandler = countryId => {
    const country = countries.find(country => country.id === countryId);

    if (country !== undefined) {
      setCountryInDetails(country);
    }
  };

  const unselectCountryHandler = () => {
    setCountryInDetails(null);
  };

  const clearErrorHandler = () => {
    setError(null);
  };

  return (
    <CountriesContext.Provider
      value={{
        countries: countries,
        countryInDetails: countryInDetails,
        isFetching: isFetching,
        error: error,
        onSelectCountry: selectCountryHandler,
        onUnselectCountry: unselectCountryHandler,
        onClearError: clearErrorHandler,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
