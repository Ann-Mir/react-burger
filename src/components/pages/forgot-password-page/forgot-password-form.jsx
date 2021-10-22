import {EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../../store/slices/password-slice';
import ErrorAlert from '../../error-alert/error-alert';
import Form from '../../form/form';


function ForgotPasswordForm() {

  const dispatch = useDispatch();

  const { isLoading, error, success } = useSelector(state => state.password);

  const [emailValue, setEmailValue] = React.useState('');
  const onEmailChange = (evt) => {
    setEmailValue(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(resetPassword(emailValue));
  };

  return (
    <Form
      legend={'Восстановление пароля'}
      buttonText={'Восстановить'}
      onFormSubmit={onSubmit}
      isLoading={isLoading}
      error={error}
    >
      {error && <ErrorAlert />}
      <EmailInput
        placeholder="Укажите e-mail"
        onChange={onEmailChange}
        value={emailValue}
        name="email"
        size="default"
      />
    </Form>
  )
}


export default ForgotPasswordForm;
