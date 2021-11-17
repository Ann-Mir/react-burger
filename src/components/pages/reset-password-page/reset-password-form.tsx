import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useAppDispatch} from '../../../hooks/hooks';
import {updatePassword} from '../../../store/slices/password-slice';
import Form from '../../form/form';


function ResetPasswordForm(): JSX.Element {

  const dispatch = useAppDispatch();

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
