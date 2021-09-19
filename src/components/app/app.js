import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchIngredients} from '../../store/slices/ingredients-slice';
import ErrorAlert from '../error-alert/error-alert';
import MainPage from '../pages/main-page/main-page';
import Spinner from '../spinner/spinner';

import styles from './app.module.css';


function App() {

  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.ingredients.isLoading);
  const error = useSelector(state => state.ingredients.error);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Spinner className={styles.spinner}/>}
      {error && <ErrorAlert />}
      {!isLoading && !error && <MainPage />}
    </>
  )
}

export default App;
