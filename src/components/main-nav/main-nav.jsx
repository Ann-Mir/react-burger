import PropTypes from 'prop-types';
import React from 'react';
import cn from'classnames';
import {BurgerIcon, ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../main-nav/main-nav.module.css';


function MainNav({ className }) {

  const classes = cn(styles.nav, className);

  return (
    <nav className={classes}>
      <a href="/" className={styles.nav_link}>
        <div className={styles.burger}>
          <BurgerIcon type="primary" />
        </div>
        <p className="text text_type_main-default">
          Конструктор
        </p>
      </a>
      <a href="/" className={styles.nav_link}>
        <div className={styles.list_icon}>
          <ListIcon type="secondary" />
        </div>
        <p className="text text_type_main-default text_color_inactive">
          Лента заказов
        </p>
      </a>
    </nav>
  );
}

MainNav.propTypes = {
  className: PropTypes.string,
};


export default MainNav;
