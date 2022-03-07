import { useContext } from 'react';

import styles from './CountryInDetailsContent.module.css';

import CountriesContext from '../../store/countries-context';

import CountryInfo from './CountryInfo';

const CountryInDetailsContent = () => {
  const countriesCtx = useContext(CountriesContext);

  const country = countriesCtx.countryInDetails;

  return (
    <div className={styles['country-content']}>
      <div className={styles.flag}>
        <img src={country.flag} alt="flag" />
      </div>

      <CountryInfo country={country} />
    </div>
  );
};

export default CountryInDetailsContent;
