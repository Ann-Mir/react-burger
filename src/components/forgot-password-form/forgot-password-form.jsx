import {Input} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import Form from '../form/form';


function ForgotPasswordForm() {

  const [emailValue, setEmailValue] = React.useState('');
  const onEmailChange = (evt) => {
    setEmailValue(evt.target.value);
  };

  return (
    <Form legend={'Восстановление пароля'} buttonText={'Восстановить'}>
      <Input
        type="email"
        placeholder="Укажите e-mail"
        onChange={onEmailChange}
        value={emailValue}
        name="email"
        error={false}
        errorText="Неверный адрес электронной почты"
        size="default"
      />
    </Form>
  )
}


export default ForgotPasswordForm;
