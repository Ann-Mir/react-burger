import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React, {useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {useDispatch} from 'react-redux';
import {removeConstructorIngredient, swapIngredients} from '../../store/slices/burger-constructor-slice';
import {decreaseQuantity} from '../../store/slices/ingredients-slice';

import styles from './constructor-item.module.css';


function ConstructorItem({ ingredient, index, className }) {

  const dispatch = useDispatch();
  const ref = useRef( null );

  const [, drag] = useDrag( {
    type: 'constructorIngredient',
    item: {index},
  });

  const [, drop] = useDrop( {
    accept: 'constructorIngredient',
    hover: (item) => {
      if ( !ref.current ) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch(swapIngredients({from: dragIndex, to: hoverIndex}));
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  const onIngredientRemove = (ingredient) => {
    return () => {
      dispatch(removeConstructorIngredient(ingredient));
      dispatch(decreaseQuantity(ingredient));
    }
  };

  return (
    <li key={ingredient.constructorId} className={className} index={index} ref={ref}>
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
