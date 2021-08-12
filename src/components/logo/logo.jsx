import React from 'react';
import cn from 'classnames';
import {Logo  as LogoIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './logo.module.css';


function Logo({ className }) {

  const classes = cn(styles.logo, className);

  return (
    <a href="/" className={classes}>
      <LogoIcon />
    </a>
  )
}

export default Logo;
