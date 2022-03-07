import React, { useContext, useState, useEffect } from 'react';

import CountriesContext from '../../store/countries-context';

import styles from './CountriesList.module.css';

import Country from './Country';

import Spinner from '../UI/Spinner';

const CountriesList = props => {
  const [isFirstRendering, setIsFirstRendering] = useState(true);
  const { isFetching } = useContext(CountriesContext);
  const { isFiltering } = props;

  useEffect(() => {
    setIsFirstRendering(false);
  }, []);

  if (isFetching || isFiltering || isFirstRendering) {
    return (
      <div className={styles['spinner-container']}>
        <Spinner />
      </div>
    );
  }

  if (props.countries.length === 0) {
    return <h2 className={styles['no-countries']}>No Countries Found!</h2>;
  }

  return (
    <div className={styles['countries-list']}>
      {props.countries.map(country => (
        <Country key={country.id} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
