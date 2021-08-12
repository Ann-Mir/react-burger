import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';

import styles from './price.module.css';


function Price({ className, price }) {

  const classes = cn(styles.price, 'text text_type_digits-default', className);

  return (
    <p className={classes}>{price}&nbsp;<CurrencyIcon type="primary" /></p>
  );
}


export default Price;
