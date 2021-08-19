import React from 'react';
import MenuList from '../menu-list/menu-list';
import TabBar from '../tab-bar/tab-bar';

import styles from './burger-ingedients.module.css';


function BurgerIngredients() {

  return(
    <section className={styles.menu}>
      <h2 className="visually-hidden">Выбор ингредиентов</h2>
      <TabBar className={styles.tab}/>
      <MenuList />
    </section>
  )
}


export default BurgerIngredients;
