import React from 'react';
import {useAppSelector} from '../../hooks/hooks';
import {TMenuItem, TOrder} from '../../types';
import Price from '../price/price';
import cn from 'classnames';

import styles from './order-card.module.css';


const MAX_INGREDIENTS = 6;

function OrderCard({className}: {className: string}): JSX.Element {

  const cardClasses = cn(styles.wrapper, className);
  const numberClasses = cn('text text_type_digits-default');
  const timeClasses = cn('text text_type_main-default text_color_inactive');
  const titleClasses = cn(styles.title, 'text text_type_main-medium');
  const extraClasses = cn(styles.extra, 'text text_type_digits-default');

  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
  const totalPrice = ingredients.reduce((total: number, item: TMenuItem) => {
    return total + item.price;
  }, 0);

  return (
    <div className={cardClasses}>
      <div className={styles.info}>
        <span className={numberClasses}>#034434</span>
        <span className={timeClasses}>Вчера, 13:50 i-GMT+3</span>
      </div>
      <h3 className={titleClasses}>Interstellar Burger</h3>
      <div className={styles.bottom}>
        <div className={styles.images_wrapper}>
          {
            ingredients.slice(0, MAX_INGREDIENTS).map((item, index) => {
              return (
                <div
                  key={item._id + index.toString()}
                  className={styles.picture}
                  style={{zIndex: MAX_INGREDIENTS - index}}>
                  <img className={styles.image} src={item.image} alt={item.name}/>
                </div>)
            })
          }
          {
            ingredients.length > MAX_INGREDIENTS &&
            <span className={extraClasses}>+{ingredients.length - MAX_INGREDIENTS}</span>
          }
        </div>
        <Price price={totalPrice} />
      </div>

    </div>
  )
}


export default OrderCard;
