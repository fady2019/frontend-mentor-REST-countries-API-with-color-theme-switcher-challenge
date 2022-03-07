import React from 'react';

import styles from './Input.module.css';

import Card from './Card';

import searchIcon from '../../assets/magnifying-glass-solid.svg';

const Input = props => {
  return (
    <Card className={`${props.className} ${styles.input}`}>
      <img className={`app-icon ${styles.icon}`} src={searchIcon} alt="icon" />
      <input {...props.input} />
    </Card>
  );
};

export default Input;
