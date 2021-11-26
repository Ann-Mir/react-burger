import React from 'react';
import {Link, Redirect, useLocation} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks';
import {TLocationState} from '../../types';
import {AppRoutes} from '../../utils/constants';
import RegistrationForm from './registration-form';
import styles from './index.module.css';


function RegistrationPage(): JSX.Element {

  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const { state } = useLocation<TLocationState>();

  const SignInLink = () => (
    <p className="text text_type_main-default text_color_inactive">
      Уже зарегистрированы?&ensp;
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
          <RegistrationForm className={styles.form}/>
          <SignInLink />
        </main>
      </div>
    </>
  )
}


export default RegistrationPage;
