import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router';
import { Switch, Route } from 'react-router-dom';
import {AppRoutes} from '../../utils/constants';
import ErrorAlert from '../error-alert/error-alert';
import IngredientModal from '../ingredient-modal/ingredient-modal';
import ForgotPasswordPage from '../pages/forgot-password-page';
import IngredientPage from '../pages/ingredient-page/ingredient-page';
import MainPage from '../pages/main-page';
import ProfilePage from '../pages/profile-page';
import RegistrationPage from '../pages/registration-page';
import ResetPasswordPage from '../pages/reset-password-page';
import SignInPage from '../pages/sign-in-page';
import ProtectedRoute from '../protected-route/protected-route';
import Spinner from '../spinner/spinner';

import styles from './app.module.css';


function App() {

  const { isLoading, error } = useSelector(state => state.user);

  const location = useLocation();
  const history = useHistory();
  const background = history.action === 'PUSH' && location.state && location.state.background;

  const onModalClose = () => {
    history.goBack();
  };

  return (
    <>
      {isLoading && <Spinner className={styles.spinner} />}
      {error && <ErrorAlert />}
      {!isLoading && !error && (
        <>
          <Switch location={background || location}>
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
            <Route path={AppRoutes.INGREDIENTS}>
               <IngredientPage />
            </Route>
            <ProtectedRoute path={AppRoutes.PROFILE} exact>
              <ProfilePage />
            </ProtectedRoute>
          </Switch>
          {
            background && (
              <Route path={AppRoutes.INGREDIENTS}>
                <IngredientModal onClose={onModalClose} />
              </Route>
            )
          }
        </>
      )}
    </>
  )
}

export default App;
