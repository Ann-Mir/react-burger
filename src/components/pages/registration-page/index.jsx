import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../utils/constants';
import AppHeader from '../../app-header/app-header';
import RegistrationForm from './registration-form';
import styles from './index.module.css';


function RegistrationPage() {


  const SignInLink = () => (
    <p className="text text_type_main-default text_color_inactive">
      Уже зарегистрированы?&ensp;
      <Link to={AppRoutes.FORGOT_PASSWORD} className={styles.link}>
        Восстановить пароль
      </Link>
    </p>
  );

  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <main className={styles.main}>
        <RegistrationForm className={styles.form}/>
        <SignInLink />
      </main>
    </div>
  )
}


export default RegistrationPage;
