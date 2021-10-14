import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchIngredients} from '../../../store/slices/ingredients-slice';
import AppHeader from '../../app-header/app-header';
import ErrorAlert from '../../error-alert/error-alert';
import Spinner from '../../spinner/spinner';
import MainWrapper from './main-wrapper';

import styles from './index.module.css';


function MainPage() {

  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(state => state.ingredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      {isLoading && <Spinner className={styles.spinner}/>}
      {error && <ErrorAlert />}
      {!isLoading && !error && <MainWrapper />}
    </div>
  )
}


export default MainPage;
