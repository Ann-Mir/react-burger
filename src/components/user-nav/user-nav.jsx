import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {AppRoutes} from '../../utils/constants';

import styles from './user-nav.module.css';


function UserNav({ className }) {

  const classes = cn(styles.profile, className, 'text text_type_main-default text_color_inactive');

  const {isAuthenticated} = useSelector(state => state.user);

  return (
    <NavLink
      to={isAuthenticated ? AppRoutes.PROFILE : AppRoutes.LOGIN}
      className={classes}
      activeClassName={styles.active}
      exact={true}
    >
      <div className={styles.profile_icon}>
        <ProfileIcon type="secondary" />
      </div>
      <p className={styles.text}>
        {isAuthenticated ? 'Личный кабинет' : 'Войти'}
      </p>
    </NavLink>
  );
}

UserNav.propTypes = {
  className: PropTypes.string,
};


export default UserNav;
