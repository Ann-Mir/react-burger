import cn from 'classnames';
import React from 'react';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './main-wrapper.module.css';


function MainWrapper() {

  const titleClasses = cn('text text_type_main-large', styles.title);
  return (
    <main class={styles.main}>
      <h1 className={titleClasses}>Соберите бургер</h1>
      <div className={styles.menu}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  )
}


export default MainWrapper;
