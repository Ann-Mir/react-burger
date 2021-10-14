import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, useLocation, Link} from 'react-router-dom';
import {AppRoutes} from '../../../utils/constants';
import AppHeader from '../../app-header/app-header';
import SignInForm from './sign-in-form';
import cn from 'classnames';
import styles from './index.module.css';


function SignInPage() {

  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const { state } = useLocation();

  const RegisterLink = () => (
    <p className={cn('text text_type_main-default text_color_inactive', styles.register)}>
      Вы&ensp;— новый пользователь?&ensp;
      <Link to={AppRoutes.REGISTER} className={styles.link}>
        Зарегистрироваться
      </Link>
    </p>
  );

  const ResetPasswordLink = () => (
    <p className="text text_type_main-default text_color_inactive">
      Забыли пароль?&ensp;
      <Link to={AppRoutes.FORGOT_PASSWORD} className={styles.link}>
        Восстановить пароль
      </Link>
    </p>
  );

  return (
    <>
      {
        isAuthenticated
        && <Redirect to={state?.from || AppRoutes.ROOT } />
      }
      <div className={styles.wrapper}>
        <AppHeader className={styles.header}/>
        <main className={styles.main}>
          <SignInForm className={styles.form}/>
          <RegisterLink />
          <ResetPasswordLink />
        </main>
      </div>
    </>
  )
}

export default SignInPage;
