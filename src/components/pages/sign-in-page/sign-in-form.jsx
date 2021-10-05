import {EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import Form from '../../form/form';
import cn from 'classnames';

import styles from './sign-in-form.module.css';

function SignInForm({ className }) {

  const formClasses = cn(styles.form, className);

  const [emailValue, setEmailValue] = React.useState('');

  const onEmailChange = evt => {
    setEmailValue(evt.target.value)
  };

  const [passwordValue, setPasswordValue] = React.useState('')
  const onPasswordChange = evt => {
    setPasswordValue(evt.target.value)
  };

  return (
    <Form legend="Вход" buttonText="Войти" className={formClasses}>
      <EmailInput
        type="text"
        placeholder="E-mail"
        onChange={onEmailChange}
        value={emailValue}
        name="email"
      />
      <PasswordInput
        placeholder="Пароль"
        onChange={onPasswordChange}
        value={passwordValue}
        name="password"
        size="default"
      />
    </Form>
  )
}


export default SignInForm;
