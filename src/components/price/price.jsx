import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';

import styles from './price.module.css';


function Price({ className, price, type }) {

  const classes = cn(styles.price, 'text text_type_digits-default', className);

  return (
    <p className={classes}>{price}&nbsp;<CurrencyIcon type={type} /></p>
  );
}


export default Price;
