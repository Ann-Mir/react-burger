import cn from 'classnames';
import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/hooks';
import {logout} from '../../store/slices/user-slice';
import {AppRoutes} from '../../utils/constants';
import styles from './profile-nav.module.css';


function ProfileNav() {

  const linkClasses = cn('text text_type_main-medium text_color_inactive', styles.link);
  const noteClasses = cn('text text_type_main-small text_color_inactive', styles.note);

  const dispatch = useAppDispatch();
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
}


export default ProfileNav;
