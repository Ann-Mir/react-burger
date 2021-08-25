import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import ingredientProp from '../../utils/ingredient.prop';
import Counter from '../counter/counter';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import Price from '../price/price';

import styles from './menu-item.module.css';


function MenuItem({ className, item }) {

  const classes = cn(styles.article, className);
  const { image, name, price } = item;

  const [isModalVisible, setModalIsVisible] = React.useState(false);

  const count = React.useState(0);

  const handleModalClose = React.useCallback(() => setModalIsVisible(false), []);
  const handleModalOpen = React.useCallback(() => setModalIsVisible(true), []);

  return (
    <>
      {isModalVisible && (
        <Modal title='Детали ингредиента' onClose={handleModalClose}>
          <IngredientDetails ingredient={item} />
        </Modal>)
      }
      <article className={classes} onClick={handleModalOpen}>
        {count > 0 && <Counter className={styles.counter} count={count} />}
        <div className={styles.image_wrapper}>
          <img src={image} alt={name} className={styles.image}/>
        </div>
        <Price className={styles.price} price={price} type="primary"/>
        <p className="text text_type_main-default">{name}</p>
      </article>
    </>
  );
}

MenuItem.propTypes = {
  className: PropTypes.string,
  isChosen: PropTypes.bool,
  item: ingredientProp.isRequired,
};


export default React.memo(MenuItem);
