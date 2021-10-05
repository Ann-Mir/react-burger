import cn from 'classnames';
import React from 'react';
import AppHeader from '../app-header/app-header';

import styles from './password-page-wrapper.module.css';


function PasswordPageWrapper({children}) {

  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <main className={styles.main}>
        {children}
        <p className={cn('text text_type_main-default text_color_inactive', styles.password)}>
          Вспомнили пароль?&ensp;
          <a href="#" className={styles.login}>Войти</a>
        </p>
      </main>
    </div>
  )
}

export default PasswordPageWrapper;
