import PropTypes from 'prop-types';
import React from 'react';
import ingredientProp from '../../utils/ingredient.prop';
import MenuList from '../menu-list/menu-list';
import TabBar from '../tab-bar/tab-bar';

import styles from './burger-ingredients.module.css';


function BurgerIngredients({ data }) {

  return(
    <section className={styles.menu}>
      <h2 className="visually-hidden">Выбор ингредиентов</h2>
      <TabBar className={styles.tab}/>
      <MenuList data={data} />
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientProp.isRequired).isRequired,
};


export default BurgerIngredients;
