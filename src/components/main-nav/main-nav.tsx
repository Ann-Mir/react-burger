import React from 'react';
import cn from'classnames';
import {BurgerIcon, ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {NavLink} from 'react-router-dom';
import {AppRoutes} from '../../utils/constants';

import styles from '../main-nav/main-nav.module.css';


interface IMainNavProps {
  className?: string;
};


function MainNav({ className }: IMainNavProps): JSX.Element {

  const classes = cn(styles.nav, className);
  const linkClasses = cn(styles.nav_link, 'text text_type_main-default text_color_inactive');

  return (
    <nav className={classes}>
      <NavLink to={AppRoutes.ROOT} exact={true} className={linkClasses} activeClassName={styles.active}>
        <div className={styles.burger}>
          <BurgerIcon type="secondary" />
        </div>
        <p className={styles.text}>
          Конструктор
        </p>
      </NavLink>
      <NavLink to={AppRoutes.FEED} exact={true} className={linkClasses} activeClassName={styles.active}>
        <div className={styles.list_icon}>
          <ListIcon type="secondary" />
        </div>
        <p className={styles.text}>
          Лента заказов
        </p>
      </NavLink>
    </nav>
  );
}


export default MainNav;
