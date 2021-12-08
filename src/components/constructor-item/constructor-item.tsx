import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React, {useRef} from 'react';
import {useAppDispatch} from '../../hooks/hooks';
import {TMenuItem} from '../../types';
import {useDrag, useDrop} from 'react-dnd';
import {useDispatch} from 'react-redux';
import {removeConstructorIngredient, swapIngredients} from '../../store/slices/burger-constructor-slice';
import {decreaseQuantity} from '../../store/slices/ingredients-slice';

import styles from './constructor-item.module.css';


type TConstructorItemProps = {
  ingredient: TMenuItem;
  index: number;
  className?: string;
};

function ConstructorItem({ ingredient, index, className }: TConstructorItemProps): JSX.Element {

  const dispatch = useAppDispatch();
  const ref = useRef<HTMLLIElement>( null );

  const [, drag] = useDrag( {
    type: 'constructorIngredient',
    item: {index},
  });

  const [, drop] = useDrop( {
    accept: 'constructorIngredient',
    hover: (item: {index: number}) => {
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

  const onIngredientRemove = (ingredient: TMenuItem) => {
    return () => {
      dispatch(removeConstructorIngredient(ingredient));
      dispatch(decreaseQuantity(ingredient));
    }
  };

  return (
    <li key={ingredient.constructorId} className={className} ref={ref} id={ingredient._id}>
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
