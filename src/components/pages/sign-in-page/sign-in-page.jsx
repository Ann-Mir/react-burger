import React from 'react';
import AppHeader from '../../app-header/app-header';
import SignInForm from '../../sign-in-form/sign-in-form';
import cn from 'classnames';
import styles from './sign-in-page.module.css';


function SignInPage() {

  const RegisterLink = () => (
    <p className={cn('text text_type_main-default text_color_inactive', styles.register)}>
      Вы&ensp;— новый пользователь?&ensp;
      {/*<Link to="/register" className={styles.link}>Зарегистрироваться</Link>*/}
      <a href="#" className={styles.link}>Зарегистрироваться</a>
    </p>
  );

  const ResetPasswordLink = () => (
    <p className="text text_type_main-default text_color_inactive">
      Забыли пароль?&ensp;
      {/*<Link to="/forgot-password">Восстановить пароль</Link>*/}
      <a href="#"  className={styles.link}>Восстановить пароль</a>
    </p>
  );

  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <main className={styles.main}>
        <SignInForm className={styles.form}/>
        <RegisterLink />
        <ResetPasswordLink />
      </main>
    </div>
  )

}

export default SignInPage;
