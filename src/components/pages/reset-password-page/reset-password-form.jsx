import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useDispatch} from 'react-redux';
import {updatePassword} from '../../../store/slices/password-slice';
import Form from '../../form/form';


function ResetPasswordForm() {

  const dispatch = useDispatch();

  const [password, setPassword] = React.useState('');
  const onPasswordChange = (evt) => {
    setPassword(evt.target.value)
  };

  const [token, setToken] = React.useState('');
  const onTokenChange = (evt) => {
    setToken(evt.target.value)
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updatePassword({password, token}));
  };

  return (
    <Form legend={'Восстановление пароля'} buttonText={'Сохранить'} onFormSubmit={onSubmit}>
      <PasswordInput
        placeholder="Пароль"
        onChange={onPasswordChange}
        value={password}
        name="password"
        size="default"
      />
      <Input
        type="text"
        placeholder="Введите код из письма"
        onChange={onTokenChange}
        value={token}
        name="name"
        icon="EditIcon"
        error={false}
        errorText=""
        size="default"
      />
    </Form>
  )
}


export default ResetPasswordForm;
