import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchIngredients} from '../../../store/slices/ingredients-slice';
import ErrorAlert from '../../error-alert/error-alert';
import Spinner from '../../spinner/spinner';
import MainWrapper from './main-wrapper';

import styles from './index.module.css';


function MainPage() {

  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(state => state.ingredients);
  const totalPrice = useSelector(state => state.burgerConstructor.totalPrice);

  useEffect(() => {
    if (totalPrice) {
      return;
    }
    console.log(totalPrice);
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading && <Spinner className={styles.spinner}/>}
        {error && <ErrorAlert />}
        {!isLoading && !error && <MainWrapper />}
      </div>
    </>
  )
}


export default MainPage;
