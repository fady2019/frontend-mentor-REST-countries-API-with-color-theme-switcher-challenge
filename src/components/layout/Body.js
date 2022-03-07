import { Fragment, useContext } from 'react';

import CountriesContext from '../../store/countries-context';

import Modal from '../UI/Modal';

import Countries from '../countries/Countries';
import CountryInDetails from '../countryInDetails/CountryInDetails';

const Body = props => {
  const countriesCtx = useContext(CountriesContext);

  return (
    <Fragment>
      {countriesCtx.error !== null && (
        <Modal onClose={countriesCtx.onClearError}>{countriesCtx.error}</Modal>
      )}

      {countriesCtx.countryInDetails !== null && <CountryInDetails />}

      <Countries />
    </Fragment>
  );
};

export default Body;
