import {EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {resetPassword} from '../../../store/slices/password-slice';
import ErrorAlert from '../../error-alert/error-alert';
import Form from '../../form/form';


function ForgotPasswordForm(): JSX.Element {

  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.password);

  const [emailValue, setEmailValue] = React.useState<string>('');
  const onEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(evt.target.value);
  };

  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(resetPassword(emailValue));
  };

  return (
    <Form
      legend={'Восстановление пароля'}
      buttonText={'Восстановить'}
      onFormSubmit={onSubmit}
    >
      {error && <ErrorAlert />}
      <EmailInput
        onChange={onEmailChange}
        value={emailValue}
        name="email"
        size="default"
      />
    </Form>
  )
}


export default ForgotPasswordForm;
