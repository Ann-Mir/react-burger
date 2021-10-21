import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchIngredients} from '../../../store/slices/ingredients-slice';
import ErrorAlert from '../../error-alert/error-alert';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import Spinner from '../../spinner/spinner';

import styles from './ingredient-page.module.css';


function IngredientPage() {

  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(state => state.ingredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Spinner className={styles.spinner}/>}
      {error && <ErrorAlert />}
      {!isLoading && !error && <IngredientDetails className={styles.details}/>}
    </div>
  )
}


export default IngredientPage;
