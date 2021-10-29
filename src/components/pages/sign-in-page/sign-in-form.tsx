import {EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../../store/slices/user-slice';
import Form from '../../form/form';
import cn from 'classnames';

import styles from './sign-in-form.module.css';


type TSIgnInFormProps = {
  className?: string;
};

function SignInForm({ className }: TSIgnInFormProps): JSX.Element {

  const dispatch = useDispatch();

  const formClasses = cn(styles.form, className);

  const [email, setEmail] = React.useState<string>('');

  const onEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value)
  };

  const [password, setPassword] = React.useState<string>('')
  const onPasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value)
  };

  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    // @ts-ignore
    dispatch(login({email, password}));
  };

  return (
    <Form legend="Вход" buttonText="Войти" className={formClasses} onFormSubmit={onSubmit}>
      <EmailInput
        onChange={onEmailChange}
        value={email}
        name="email"
      />
      <PasswordInput
        onChange={onPasswordChange}
        value={password}
        name="password"
        size="default"
      />
    </Form>
  )
}


export default SignInForm;
