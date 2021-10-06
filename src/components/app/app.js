import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {fetchIngredients} from '../../store/slices/ingredients-slice';
import {AppRoutes} from '../../utils/constants';
import ErrorAlert from '../error-alert/error-alert';
import ForgotPasswordPage from '../pages/forgot-password-page';
import MainPage from '../pages/main-page';
import ProfilePage from '../pages/profile-page';
import RegistrationPage from '../pages/registration-page';
import ResetPasswordPage from '../pages/reset-password-page';
import SignInPage from '../pages/sign-in-page';
import Spinner from '../spinner/spinner';

import styles from './app.module.css';


function App() {

  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(state => state.ingredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path={AppRoutes.ROOT} exact>
          {isLoading && <Spinner className={styles.spinner}/>}
          {error && <ErrorAlert />}
          {!isLoading && !error && <MainPage />}
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
