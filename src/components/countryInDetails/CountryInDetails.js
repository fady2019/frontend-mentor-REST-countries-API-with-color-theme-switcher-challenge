import { useContext } from 'react';

import styles from './CountryInDetails.module.css';

import CountriesContext from '../../store/countries-context';

import Container from '../UI/Container';
import Button from '../UI/Button';

import CountryInDetailsContent from './CountryInDetailsContent';

import backArrow from '../../assets/arrow-left-long-solid.svg';

const CountryInDetails = props => {
  const countriesCtx = useContext(CountriesContext);

  return (
    <Container className={`${props.className} ${styles['country-in-details']}`}>
      <Button
        className={styles['back-btn']}
        onClick={countriesCtx.onUnselectCountry}
      >
        <img
          className={`app-icon ${styles.icon}`}
          src={backArrow}
          alt="arrow"
        />{' '}
        Back
      </Button>

      <CountryInDetailsContent />
    </Container>
  );
};

export default CountryInDetails;
