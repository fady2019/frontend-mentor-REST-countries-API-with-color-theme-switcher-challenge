import React, { useContext } from 'react';

import styles from './CountryBorders.module.css';

import CountriesContext from '../../store/countries-context';

import Button from '../UI/Button';

const CountryBorders = () => {
  const countriesCtx = useContext(CountriesContext);

  const country = countriesCtx.countryInDetails;

  return (
    <div className={styles['border-countries-content']}>
      Border Countries:
      <div className={styles['border-countries']}>
        {country.borders.map(bor => {
          return (
            <Button
              key={bor.id}
              onClick={() => {
                countriesCtx.onSelectCountry(bor.id);
              }}
            >
              {bor.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CountryBorders;
