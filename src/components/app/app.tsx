import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router';
import { Switch, Route } from 'react-router-dom';
import {fetchIngredients} from '../../store/slices/ingredients-slice';
import {TLocationState} from '../../types';
import {AppRoutes} from '../../utils/constants';
import AppHeader from '../app-header/app-header';
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


function App(): JSX.Element {

  const { isLoading, error } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const location = useLocation<TLocationState>();
  const history = useHistory();
  const background = (
    history.action === 'PUSH'
    || history.action === 'REPLACE'
  ) && location.state
    && location.state.background;

  const onModalClose = () => {
    history.goBack();
  };

  const totalPrice = useSelector((state: any) => state.burgerConstructor.totalPrice);

  useEffect(() => {
    if (totalPrice) {
      return;
    }
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Spinner className={styles.spinner} />}
      {error && <ErrorAlert />}
      {!isLoading && !error && (
        <>
          <AppHeader className={styles.header}/>
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