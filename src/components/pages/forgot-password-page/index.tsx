import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, useLocation} from 'react-router-dom';
import {AppRoutes} from '../../../utils/constants';
import ForgotPasswordForm from './forgot-password-form';
import PasswordPageWrapper from '../../password-page-wrapper/password-page-wrapper';


function ForgotPasswordPage(): JSX.Element {

  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);

  const isEmailConfirmed = useSelector((state: any) => state.password.isEmailConfirmed);
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
