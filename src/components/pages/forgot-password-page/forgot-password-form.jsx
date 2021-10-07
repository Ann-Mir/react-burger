import {EmailInput, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {resetPassword} from '../../../store/slices/forgot-password-slice';
import {AppRoutes} from '../../../utils/constants';
import ErrorAlert from '../../error-alert/error-alert';
import Form from '../../form/form';


function ForgotPasswordForm() {

  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, error, success } = useSelector(state => state.forgotPassword);

  const [emailValue, setEmailValue] = React.useState('');
  const onEmailChange = (evt) => {
    setEmailValue(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(resetPassword(emailValue));
  };

  useEffect(() => {
    if (success) {
      history.replace({ pathname: AppRoutes.RESET_PASSWORD });
    }
  }, [history, success]);

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
