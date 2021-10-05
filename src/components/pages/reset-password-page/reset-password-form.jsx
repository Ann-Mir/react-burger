import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import Form from '../../form/form';


function ResetPasswordForm() {

  const [passwordValue, setPasswordValue] = React.useState('');
  const onPasswordChange = (evt) => {
    setPasswordValue(evt.target.value)
  };

  const [tokenValue, setTokenValue] = React.useState('');
  const onTokenChange = (evt) => {
    setTokenValue(evt.target.value)
  };

  return (
    <Form legend={'Восстановление пароля'} buttonText={'Сохранить'}>
      <PasswordInput
        placeholder="Пароль"
        onChange={onPasswordChange}
        value={passwordValue}
        name="password"
        size="default"
      />
      <Input
        type="text"
        placeholder="Введите код из письма"
        onChange={onTokenChange}
        value={tokenValue}
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
