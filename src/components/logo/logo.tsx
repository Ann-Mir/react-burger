import React from 'react';
import cn from 'classnames';
import {Logo as LogoIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {NavLink} from 'react-router-dom';
import {AppRoutes} from '../../utils/constants';

import styles from './logo.module.css';


type TLogoProps = {
  className?: string;
};


function Logo({ className }: TLogoProps): JSX.Element {

  const classes = cn(styles.logo, className);

  return (
    <NavLink to={AppRoutes.ROOT} exact={true} className={classes} activeClassName={styles.active}>
      <LogoIcon />
    </NavLink>
  )
}


export default Logo;
