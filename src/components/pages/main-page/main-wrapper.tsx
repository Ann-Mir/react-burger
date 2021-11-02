import cn from 'classnames';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerConstructor from '../../burger-constructor/burger-constructor';
import BurgerIngredients from '../../burger-ingredients/burger-ingredients';

import styles from './main-wrapper.module.css';


function MainWrapper(): JSX.Element {

  const titleClasses = cn('text text_type_main-large', styles.title);
  return (
    <main className={styles.main}>
      <h1 className={titleClasses}>Соберите бургер</h1>
      <div className={styles.menu}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    </main>
  )
}


export default MainWrapper;
