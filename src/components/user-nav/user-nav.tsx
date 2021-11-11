import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import cn from 'classnames';
import {NavLink} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AppRoutes} from '../../utils/constants';

import styles from './user-nav.module.css';


type TUserNavProps = {
  className?: string;
};


function UserNav({ className }: TUserNavProps): JSX.Element {

  const classes = cn(styles.profile, className, 'text text_type_main-default text_color_inactive');

  const {isAuthenticated} = useAppSelector((state: any) => state.user);

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


export default UserNav;
