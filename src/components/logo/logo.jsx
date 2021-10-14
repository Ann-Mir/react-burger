import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Logo  as LogoIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {NavLink} from 'react-router-dom';
import {AppRoutes} from '../../utils/constants';

import styles from './logo.module.css';


function Logo({ className }) {

  const classes = cn(styles.logo, className);

  return (
    <NavLink to={AppRoutes.ROOT} className={classes} activeClassName={styles.active}>
      <LogoIcon />
    </NavLink>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
};


export default Logo;
