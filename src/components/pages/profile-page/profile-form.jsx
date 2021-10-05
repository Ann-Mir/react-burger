import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import cn from 'classnames';

import styles from './profile-form.module.css';


function ProfileForm() {

  const cancelClasses = cn('text text_type_main-small', styles.cancel);

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

  return (
    <form className={styles.form}>
      <Input
        type="text"
        placeholder="Имя"
        onChange={onNameChange}
        value={nameValue}
        name="name"
        icon="EditIcon"
        error={false}
        errorText=""
        size="default"
      />
      <EmailInput
        type="text"
        placeholder="E-mail"
        onChange={onEmailChange}
        value={emailValue}
        name="email"
        size="default"
      />
      <PasswordInput
        placeholder="Пароль"
        onChange={onPasswordChange}
        value={passwordValue}
        name="password"
        size="default"
      />
      <div>
        <button className={cancelClasses}>Отмена</button>
        <Button>Сохранить</Button>
      </div>
    </form>
  )
}


export default ProfileForm;
