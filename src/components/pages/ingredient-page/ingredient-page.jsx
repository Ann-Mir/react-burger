import React from 'react';
import AppHeader from '../../app-header/app-header';
import IngredientDetails from '../../ingredient-details/ingredient-details';

import styles from './ingredient-page.module.css';


function IngredientPage() {

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <IngredientDetails className={styles.details}/>
    </div>
  )
}


export default IngredientPage;
