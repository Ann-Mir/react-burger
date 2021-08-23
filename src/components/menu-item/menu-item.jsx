import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import ingredientProp from '../../utils/ingredient.prop';
import Counter from '../counter/counter';
import Modal from '../modal/modal';
import Price from '../price/price';

import styles from './menu-item.module.css';


function MenuItem({ className, item }) {

  const classes = cn(styles.article, className);
  const { image, imageLarge, name, price, proteins, fat, carbohydrates, calories } = item;

  const [modalIsVisible, setModalIsVisible] = React.useState(false);

  const count = React.useState(0);

  const handleModalClose = () => setModalIsVisible(false);
  const handleModalOpen = () => setModalIsVisible(true);

  const modal = (
    <Modal title="Детали ингредиента" onClose={handleModalClose}>
      <div>
        <img src={imageLarge} alt={name} />
        <h3>{name}</h3>
        <dl>
          <dt>Калории</dt>
          <dd>{calories}</dd>
          <dt>Белки</dt>
          <dd>{proteins}</dd>
          <dt>Жиры</dt>
          <dd>{fat}</dd>
          <dt>Углеводы</dt>
          <dd>{carbohydrates}</dd>
        </dl>

      </div>
    </Modal>
  );

  return (
    <>
      {modalIsVisible && modal}
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


export default MenuItem;
