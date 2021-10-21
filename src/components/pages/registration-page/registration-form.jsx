import {EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../store/slices/user-slice';
import Form from '../../form/form';
import cn from 'classnames';

import styles from './registration-form.module.css';


function RegistrationForm({ className }) {

  const formClasses = cn(styles.form, className);

  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = React.useState('');

  const onEmailChange = (evt) => {
    setEmailValue(evt.target.value)
  };

  const [passwordValue, setPasswordValue] = React.useState('');
  const onPasswordChange = (evt) => {
    setPasswordValue(evt.target.value)
  };

  const [nameValue, setNameValue] = React.useState('');
  const onNameChange = (evt) => {
    setNameValue(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(registerUser({name: nameValue, password: passwordValue, email: emailValue}));
  };

  return (
    <Form
      legend="Регистрация"
      buttonText="Зарегистрироваться"
      className={formClasses}
      onFormSubmit={onSubmit}
    >
      <Input
        type="text"
        placeholder="Имя"
        onChange={onNameChange}
        value={nameValue}
        name="name"
        icon="EditIcon"
        error={false}
        errorText=""
      />
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


export default RegistrationForm;
