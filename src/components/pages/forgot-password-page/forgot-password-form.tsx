import {EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../../store/slices/password-slice';
import ErrorAlert from '../../error-alert/error-alert';
import Form from '../../form/form';


function ForgotPasswordForm(): JSX.Element {

  const dispatch = useDispatch();

  const { error } = useSelector((state: any) => state.password);

  const [emailValue, setEmailValue] = React.useState<string>('');
  const onEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(evt.target.value);
  };

  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    // @ts-ignore
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
