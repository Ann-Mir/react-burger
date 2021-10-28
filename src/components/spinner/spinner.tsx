import React from 'react';
import cn from 'classnames';

import styles from './spinner.module.css';


type TSpinnerProps = {
  className?: string;
};


function Spinner({ className }: TSpinnerProps): JSX.Element {

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
