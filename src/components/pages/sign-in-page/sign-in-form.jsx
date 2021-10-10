import {EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../../store/slices/user-slice';
import Form from '../../form/form';
import cn from 'classnames';

import styles from './sign-in-form.module.css';

function SignInForm({ className }) {

  const dispatch = useDispatch();

  const formClasses = cn(styles.form, className);

  const [email, setEmail] = React.useState('');

  const onEmailChange = evt => {
    setEmail(evt.target.value)
  };

  const [password, setPassword] = React.useState('')
  const onPasswordChange = evt => {
    setPassword(evt.target.value)
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({email, password}));
  };

  return (
    <Form legend="Вход" buttonText="Войти" className={formClasses} onFormSubmit={onSubmit}>
      <EmailInput
        type="text"
        placeholder="E-mail"
        onChange={onEmailChange}
        value={email}
        name="email"
      />
      <PasswordInput
        placeholder="Пароль"
        onChange={onPasswordChange}
        value={password}
        name="password"
        size="default"
      />
    </Form>
  )
}


export default SignInForm;
