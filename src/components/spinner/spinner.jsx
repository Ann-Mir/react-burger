import React from 'react';
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


export default Spinner;
