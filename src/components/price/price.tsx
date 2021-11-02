import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';

import styles from './price.module.css';


type TPriceProps = {
  className?: string;
  price: number;
};


function Price({ className, price }: TPriceProps): JSX.Element {

  const classes = cn(styles.price, 'text text_type_digits-default', className);

  return (
    <p className={classes}>{price}&nbsp;<CurrencyIcon type="primary" /></p>
  );
}


export default Price;
