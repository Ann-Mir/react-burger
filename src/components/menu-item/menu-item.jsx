import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import ingredientProp from '../../utils/ingredient.prop';
import Counter from '../counter/counter';
import Price from '../price/price';
import { useDrag } from "react-dnd";

import styles from './menu-item.module.css';


function MenuItem({ className, item }) {

  const classes = cn(styles.article, className);
  const nameClasses = cn('text text_type_main-default', styles.name);

  const { image, name, price, count } = item;


  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
  });


  return (
    <>
      <article className={classes} ref={dragRef}>
        { (count && count > 0) && <Counter className={styles.counter} count={count} />}
        <div className={styles.image_wrapper}>
          <img src={image} alt={name} className={styles.image}/>
        </div>
        <Price className={styles.price} price={price} />
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
