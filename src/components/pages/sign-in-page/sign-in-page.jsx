import {EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import AppHeader from '../../app-header/app-header';
import Form from '../../form/form';
import SignInForm from '../../sign-in-form/sign-in-form';
import styles from './sign-in-page.module.css';


function SignInPage() {

  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <main className={styles.main}>
        <SignInForm className={styles.form}/>
      </main>
    </div>
  )

}

export default SignInPage;
