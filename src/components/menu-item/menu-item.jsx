import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import {useDispatch} from 'react-redux';
import {generatePath, useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import {removeIngredient, setIngredient} from '../../store/slices/ingredient-slice';
import {AppRoutes} from '../../utils/constants';
import ingredientProp from '../../utils/ingredient.prop';
import Counter from '../counter/counter';
import IngredientDetails from '../ingredient-details/ingredient-details';
import IngredientModal from '../ingredient-modal/ingredient-modal';
import Modal from '../modal/modal';
import Price from '../price/price';
import { useDrag } from "react-dnd";

import styles from './menu-item.module.css';


function MenuItem({ className, item }) {

  const dispatch = useDispatch();

  const classes = cn(styles.article, className);
  const nameClasses = cn('text text_type_main-default', styles.name);

  const { image, name, price, _id, type, count } = item;

  const [isModalVisible, setModalIsVisible] = React.useState(false);

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
  });

  const onModalClose = () => {
    setModalIsVisible(false);
    dispatch(removeIngredient());
  };

  const onArticleClick = () => {
    dispatch(setIngredient(item));
    setModalIsVisible(true);
  };

  return (
    <>
      <article className={classes} ref={dragRef}>
        { (count && count > 0) && <Counter className={styles.counter} count={count} />}
        <div className={styles.image_wrapper}>
          <img src={image} alt={name} className={styles.image}/>
        </div>
        <Price className={styles.price} price={price} type="primary"/>
        <p className={nameClasses}>{name}</p>
      </article>
    </>
  );
}

MenuItem.propTypes = {
  className: PropTypes.string,
  item: ingredientProp.isRequired,
};


export default React.memo(MenuItem);
