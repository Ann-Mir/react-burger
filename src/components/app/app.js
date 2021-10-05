import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchIngredients} from '../../store/slices/ingredients-slice';
import ErrorAlert from '../error-alert/error-alert';
import ForgotPasswordPage from '../pages/forgot-password-page.jsx/forgot-password-page';
import MainPage from '../pages/main-page/main-page';
import ProfilePage from '../pages/profile-page/profile-page';
import RegistrationPage from '../pages/registration-page/registration-page';
import ResetPasswordPage from '../pages/reset-password-page/reset-password-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import Spinner from '../spinner/spinner';

import styles from './app.module.css';


function App() {

  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(state => state.ingredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Spinner className={styles.spinner}/>}
      {error && <ErrorAlert />}
      {/*{!isLoading && !error && <MainPage />}*/}
      {!isLoading && !error && <ResetPasswordPage />}
      {/*{!isLoading && !error && <SignInPage />}*/}
    </>
  )
}

export default App;
