import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import cn from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../../store/slices/user-slice';
import ErrorAlert from '../../error-alert/error-alert';
import Spinner from '../../spinner/spinner';

import styles from './profile-form.module.css';


function ProfileForm() {

  const cancelClasses = cn('text text_type_main-small', styles.cancel);

  const dispatch = useDispatch();

  const { email, name, isLoading, error } = useSelector(state => state.user);
  const [emailValue, setEmailValue] = React.useState(email);

  const onEmailChange = (evt) => {
    setEmailValue(evt.target.value)
  };

  const [passwordValue, setPasswordValue] = React.useState('');
  const onPasswordChange = (evt) => {
    setPasswordValue(evt.target.value)
  };

  const [nameValue, setNameValue] = React.useState(name);
  const onNameChange = (evt) => {
    setNameValue(evt.target.value);
  };

  const onCancel = (evt) => {
    evt.preventDefault();
    setEmailValue(email);
    setNameValue(name);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updateProfile({email: emailValue, name: nameValue, password: passwordValue}));
  };

  return (
    <>
      {isLoading && (<Spinner className={styles.spinner}/>)}
      {error && <ErrorAlert />}
      {!isLoading && (
        <form className={styles.form} onSubmit={onFormSubmit}>
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
            <button className={cancelClasses} onClick={onCancel}>Отмена</button>
            <Button>Сохранить</Button>
          </div>
        </form>
      )}
    </>
  )
}


export default ProfileForm;
