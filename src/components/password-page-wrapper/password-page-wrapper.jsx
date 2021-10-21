import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../utils/constants';
import AppHeader from '../app-header/app-header';

import styles from './password-page-wrapper.module.css';


function PasswordPageWrapper({ children }) {

  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <main className={styles.main}>
        {children}
        <p className={cn('text text_type_main-default text_color_inactive', styles.password)}>
          Вспомнили пароль?&ensp;
          <Link to={AppRoutes.LOGIN} className={styles.login}>
            Войти
          </Link>
        </p>
      </main>
    </div>
  )
}

PasswordPageWrapper.propTypes = {
  children: PropTypes.any,
};


export default PasswordPageWrapper;
