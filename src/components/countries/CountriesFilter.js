import React, { useState, useEffect } from 'react';

import styles from './CountriesFilter.module.css';

import Input from '../UI/Input';
import Select from '../UI/Select';

const regions = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const CountriesFilter = props => {
  const [countryName, setCountryName] = useState('');
  const [regionName, setRegionName] = useState('');

  const { onFilter } = props;

  useEffect(() => {
    const handler = setTimeout(() => {
      onFilter(countryName, regionName);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [countryName, regionName, onFilter]);

  const regionFilterHandler = event => {
    setRegionName(event.target.value);
  };

  const searchCountryHandler = event => {
    setCountryName(event.target.value);
  };

  return (
    <div className={styles['countries-filter']}>
      <Input
        className={styles['name-input']}
        input={{
          type: 'text',
          placeholder: 'Search for a country...',
          value: countryName,
          onChange: searchCountryHandler,
        }}
      />

      <Select
        className={styles['region-select']}
        value={regionName}
        onChange={regionFilterHandler}
      >
        <option value="">Filter by Region</option>

        {regions.map(region => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default CountriesFilter;
