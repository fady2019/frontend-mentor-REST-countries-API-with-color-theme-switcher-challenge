import React from 'react';

import styles from './CountryInfo.module.css';

import { formatStringArray, formatPopulationNum } from '../../common';

import CountryBorders from './CountryBorders';

const CountryInfo = props => {
  return (
    <div className={styles['info-section']}>
      <h1 className={styles.h}>{props.country.name}</h1>

      <div className={styles.info}>
        <div>
          <div>
            Native Name:{' '}
            <span>{formatStringArray(props.country.nativeName)}</span>
          </div>
          <div>
            Population:{' '}
            <span>{formatPopulationNum(props.country.population)}</span>
          </div>
          <div>
            Region: <span>{props.country.region}</span>
          </div>
          <div>
            Sub Region: <span>{props.country.subregion}</span>
          </div>
          <div>
            Capital: <span>{props.country.capital}</span>
          </div>
        </div>

        <div>
          <div>
            Top Level Domain:{' '}
            <span>{formatStringArray(props.country.tld)}</span>
          </div>
          <div>
            Currencies:{' '}
            <span>{formatStringArray(props.country.currencies)}</span>
          </div>
          <div>
            Languages: <span>{formatStringArray(props.country.languages)}</span>
          </div>
        </div>
      </div>

      {props.country.borders.length > 0 && <CountryBorders />}
    </div>
  );
};

export default CountryInfo;
