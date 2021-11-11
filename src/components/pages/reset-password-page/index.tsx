import React, {useEffect} from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import {useAppSelector} from '../../../hooks';
import {TLocationState} from '../../../types';
import {AppRoutes} from '../../../utils/constants';
import PasswordPageWrapper from '../../password-page-wrapper/password-page-wrapper';
import ResetPasswordForm from './reset-password-form';


function ResetPasswordPage(): JSX.Element {

  const history = useHistory();
  const {state} = useLocation<TLocationState>();

  const isAuthenticated = useAppSelector((state: any) => state.user.isAuthenticated);
  const {passwordIsChanged, isEmailConfirmed } = useAppSelector((state: any) => state.password);

  useEffect(() => {
    if (passwordIsChanged) {
      history.replace({pathname: AppRoutes.LOGIN});
    }
  }, [passwordIsChanged]);

  return (
    <>
      {
        isAuthenticated
        && <Redirect to={AppRoutes.ROOT} />
      }
      {
        (!isEmailConfirmed || state?.from !== AppRoutes.FORGOT_PASSWORD)
        && <Redirect to={{pathname: AppRoutes.FORGOT_PASSWORD}} />
      }
      <PasswordPageWrapper >
        <ResetPasswordForm />
      </PasswordPageWrapper>
    </>
  )
}


export default ResetPasswordPage;
