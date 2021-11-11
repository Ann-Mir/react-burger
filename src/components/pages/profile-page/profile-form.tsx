import {
  Button,
  EmailInput,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {updateProfile} from '../../../store/slices/user-slice';
import ErrorAlert from '../../error-alert/error-alert';
import Spinner from '../../spinner/spinner';

import styles from './profile-form.module.css';


function ProfileForm(): JSX.Element {

  const cancelClasses = cn('text text_type_main-small', styles.cancel);

  const dispatch = useAppDispatch();

  const { email, name, isLoading, error } = useAppSelector((state: any) => state.user);
  const [emailValue, setEmailValue] = React.useState<string>(email);

  const onEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(evt.target.value)
  };

  const [passwordValue, setPasswordValue] = React.useState<string>('');
  const onPasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(evt.target.value)
  };

  const [nameValue, setNameValue] = React.useState<string>(name);
  const onNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(evt.target.value);
  };

  const onCancel = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    setEmailValue(email);
    setNameValue(name);
  };

  const onFormSubmit = (evt: React.SyntheticEvent) => {
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
            onChange={onEmailChange}
            value={emailValue}
            name="email"
            size="default"
          />
          <PasswordInput
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
