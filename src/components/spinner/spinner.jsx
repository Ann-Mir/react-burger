import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './spinner.module.css';


function Spinner({ className }) {

  const classes = cn(className, styles.spinner);

  return (
    <div className={classes}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

Spinner.propTypes = {
  className: PropTypes.string,
};


export default Spinner;
