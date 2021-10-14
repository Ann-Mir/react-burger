import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {AppRoutes} from '../../utils/constants';
import ForgotPasswordPage from '../pages/forgot-password-page';
import MainPage from '../pages/main-page';
import ProfilePage from '../pages/profile-page';
import RegistrationPage from '../pages/registration-page';
import ResetPasswordPage from '../pages/reset-password-page';
import SignInPage from '../pages/sign-in-page';
import ProtectedRoute from '../protected-route/protected-route';



function App() {

  return (
    <Router>
      <Switch>
        <Route path={AppRoutes.ROOT} exact>
          <MainPage />
        </Route>
        <Route path={AppRoutes.LOGIN} exact>
          <SignInPage />
        </Route>
        <Route path={AppRoutes.REGISTER} exact>
          <RegistrationPage />
        </Route>
        <Route path={AppRoutes.FORGOT_PASSWORD} exact>
          <ForgotPasswordPage />
        </Route>
        <Route path={AppRoutes.RESET_PASSWORD} exact>
          <ResetPasswordPage />
        </Route>
        <ProtectedRoute path={AppRoutes.PROFILE} exact>
          <ProfilePage />
        </ProtectedRoute>
      </Switch>
    </Router>
    // <>
    //
    //   {/*{!isLoading && !error && <ForgotPasswordPage />}*/}
    //   {/*{!isLoading && !error && <SignInPage />}*/}
    // </>
  )
}

export default App;
