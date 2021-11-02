import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useDispatch} from 'react-redux';
import {updatePassword} from '../../../store/slices/password-slice';
import Form from '../../form/form';


function ResetPasswordForm(): JSX.Element {

  const dispatch = useDispatch();

  const [password, setPassword] = React.useState<string>('');
  const onPasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value)
  };

  const [token, setToken] = React.useState<string>('');
  const onTokenChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setToken(evt.target.value)
  };

  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    // @ts-ignore
    dispatch(updatePassword({password, token}));
  };

  return (
    <Form legend={'Восстановление пароля'} buttonText={'Сохранить'} onFormSubmit={onSubmit}>
      <PasswordInput
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
