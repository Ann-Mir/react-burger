import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../../../store/slices/user-slice';
import {AppRoutes} from '../../../utils/constants';
import AppHeader from '../../app-header/app-header';
import ErrorAlert from '../../error-alert/error-alert';
import Spinner from '../../spinner/spinner';
import ProfileForm from './profile-form';
import { useHistory } from 'react-router-dom'
import cn from 'classnames';

import styles from './index.module.css';


function ProfilePage() {

  const linkClasses = cn('text text_type_main-medium text_color_inactive', styles.link);

  const { isLoading, error } = useSelector(state => state.user);

  const ProfileNav = () => {

    const noteClasses = cn('text text_type_main-small text_color_inactive', styles.note);

    const dispatch = useDispatch();
    const history = useHistory();

    const onLogout = () => {
      dispatch(logout())
        .then(() => {
          history.replace({ pathname: AppRoutes.LOGIN });
        });
    };

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
            <button onClick={onLogout} className={linkClasses}>
              Выход
            </button>
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
      {error && <ErrorAlert />}
      <AppHeader className={styles.header}/>
      <main className={styles.main}>
        {isLoading && <Spinner className={styles.spinner}/>}
        <ProfileNav />
        <ProfileForm />
      </main>
    </div>
  )
}

export default ProfilePage;
