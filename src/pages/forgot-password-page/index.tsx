import React from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks';
import {AppRoutes} from '../../utils/constants';
import ForgotPasswordForm from './forgot-password-form';
import PasswordPageWrapper from '../../components/password-page-wrapper/password-page-wrapper';


function ForgotPasswordPage(): JSX.Element {

  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  const isEmailConfirmed = useAppSelector((state) => state.password.isEmailConfirmed);
  const location = useLocation();

  return (
    <>
      {
        isAuthenticated
        && <Redirect to={AppRoutes.ROOT} />
      }
      {isEmailConfirmed
        && <Redirect to={{
          pathname: AppRoutes.RESET_PASSWORD,
          state: {from: location.pathname}
        }} />}
      <PasswordPageWrapper >
        <ForgotPasswordForm />
      </PasswordPageWrapper>
    </>
  )
}


export default ForgotPasswordPage;
