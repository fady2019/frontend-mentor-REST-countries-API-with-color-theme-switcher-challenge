import React, { useContext } from 'react';
import { formatStringArray, formatPopulationNum } from '../../common';

import Card from '../UI/Card';

import CountriesContext from '../../store/countries-context';

import styles from './Country.module.css';

const Country = props => {
  const countriesCtx = useContext(CountriesContext);

  const selectCountryHandler = () => {
    countriesCtx.onSelectCountry(props.country.id);
  };

  return (
    <Card className={styles.country} onClick={selectCountryHandler}>
      <div className={styles['country-flag']}>
        <img src={props.country.flag} alt="flag" />
      </div>

      <div className={styles['country-info']}>
        <h3 className={styles['country-name']}>{props.country.name}</h3>

        <div>
          Population:{' '}
          <span>{formatPopulationNum(props.country.population)}</span>
        </div>
        <div>
          Region: <span>{props.country.region}</span>
        </div>
        <div>
          Capital: <span>{formatStringArray(props.country.capital)}</span>
        </div>
      </div>
    </Card>
  );
};

export default Country;
