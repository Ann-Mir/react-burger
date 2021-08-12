import React from 'react';
import cn from 'classnames';
import Counter from '../counter/counter';
import Price from '../price/price';

import styles from './menu-item.module.css';


function MenuItem({ className, item, isChosen }) {

  const classes = cn(styles.article, className);
  const { image, name, price } = item;


  return (
    <article className={classes}>
      {isChosen && <Counter className={styles.counter} count={1} />}
      <div className={styles.image_wrapper}>
        <img src={image} alt={name} className={styles.image}/>
      </div>
      <Price className={styles.price} price={price}/>
      <p className="text text_type_main-default">{name}</p>
    </article>
  );
}


export default MenuItem;
