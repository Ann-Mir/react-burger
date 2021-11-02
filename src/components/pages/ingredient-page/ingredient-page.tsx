import React from 'react';
import IngredientDetails from '../../ingredient-details/ingredient-details';

import styles from './ingredient-page.module.css';


function IngredientPage(): JSX.Element {

  return (
    <div className={styles.wrapper}>
      <IngredientDetails className={styles.details}/>
    </div>
  )
}


export default IngredientPage;
