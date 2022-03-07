import React, { useCallback, useContext, useEffect, useState } from 'react';

import CountriesContext from '../../store/countries-context';

import styles from './Countries.module.css';

import Container from '../UI/Container';

import CountriesFilter from './CountriesFilter';
import CountriesList from './CountriesList';

const Countries = () => {
  const { countries } = useContext(CountriesContext);

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const filterCountriesHandler = useCallback(
    (countryName, region) => {
      setIsFiltering(true);

      const FILTERED_COUNTRIES = countries.filter(
        country =>
          country.name.toLowerCase().includes(countryName.toLowerCase()) &&
          country.region.toLowerCase().includes(region.toLowerCase())
      );

      setFilteredCountries(FILTERED_COUNTRIES);
      setIsFiltering(false);
    },
    [countries]
  );

  return (
    <Container className={styles.countries}>
      <CountriesFilter onFilter={filterCountriesHandler} />

      <CountriesList countries={filteredCountries} isFiltering={isFiltering} />
    </Container>
  );
};

export default Countries;
