import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppRoutes} from '../../../utils/constants';
import AppHeader from '../../app-header/app-header';
import ProfileForm from './profile-form';
import cn from 'classnames';

import styles from './index.module.css';


function ProfilePage() {

  const linkClasses = cn('text text_type_main-medium text_color_inactive', styles.link);

  const ProfileNav = () => {

    const noteClasses = cn('text text_type_main-small text_color_inactive', styles.note);

    return (
      <div className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              to={AppRoutes.PROFILE}
              className={linkClasses}
              activeClassName={styles.active}
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={AppRoutes.ORDERS}
              className={linkClasses}
              activeClassName={styles.active}
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={AppRoutes.LOGOUT}
              className={linkClasses}
              activeClassName={styles.active}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={noteClasses}>
          В этом разделе вы можете<br/>изменить свои персональные данные
        </p>
      </div>
    )
  };

  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <main className={styles.main}>
        <ProfileNav />
        <ProfileForm />
      </main>
    </div>
  )

}

export default ProfilePage;
