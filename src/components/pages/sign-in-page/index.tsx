import React from 'react';
import {Redirect, useLocation, Link} from 'react-router-dom';
import {useAppSelector} from '../../../hooks';
import {TLocationState} from '../../../types';
import {AppRoutes} from '../../../utils/constants';
import SignInForm from './sign-in-form';
import cn from 'classnames';
import styles from './index.module.css';


function SignInPage(): JSX.Element {

  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const { state } = useLocation<TLocationState>();

  const RegisterLink = (): JSX.Element => (
    <p className={cn('text text_type_main-default text_color_inactive', styles.register)}>
      Вы&ensp;— новый пользователь?&ensp;
      <Link to={AppRoutes.REGISTER} className={styles.link}>
        Зарегистрироваться
      </Link>
    </p>
  );

  const ResetPasswordLink = (): JSX.Element => (
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
