import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {useDispatch} from 'react-redux';
import {removeConstructorIngredient} from '../../store/slices/burger-constructor-slice';
import {decreaseQuantity} from '../../store/slices/ingredients-slice';

import styles from './constructor-item.module.css';


function ConstructorItem({ ingredient, index, className }) {

  const dispatch = useDispatch();

  const onIngredientRemove = (ingredient) => {
    return () => {
      dispatch(removeConstructorIngredient(ingredient));
      dispatch(decreaseQuantity(ingredient));
    }
  };

  return (
    <li key={ingredient.constructorId} className={className} index={index}>
      <div className={styles.drag}>
        <DragIcon type="primary" />
      </div>
      <div className={styles.element}>
        <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={onIngredientRemove(ingredient)}
        />
      </div>
    </li>
  )
}


export default ConstructorItem;
