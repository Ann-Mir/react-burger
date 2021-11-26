import {EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useAppDispatch} from '../../hooks/hooks';
import {registerUser} from '../../store/slices/user-slice';
import Form from '../../components/form/form';
import cn from 'classnames';

import styles from './registration-form.module.css';


type TRegistrationFormProps = {
  className?: string;
};


function RegistrationForm({ className }: TRegistrationFormProps): JSX.Element {

  const formClasses = cn(styles.form, className);

  const dispatch = useAppDispatch();

  const [emailValue, setEmailValue] = React.useState<string>('');

  const onEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(evt.target.value)
  };

  const [passwordValue, setPasswordValue] = React.useState<string>('');
  const onPasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(evt.target.value)
  };

  const [nameValue, setNameValue] = React.useState<string>('');
  const onNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(evt.target.value);
  };

  const onSubmit = (evt: React.SyntheticEvent) => {
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
        onChange={onEmailChange}
        value={emailValue}
        name="email"
      />
      <PasswordInput
        onChange={onPasswordChange}
        value={passwordValue}
        name="password"
        size="default"
      />
    </Form>
  )
}


export default RegistrationForm;
