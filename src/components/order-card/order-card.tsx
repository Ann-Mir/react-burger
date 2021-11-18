import React from 'react';
import {useAppSelector} from '../../hooks/hooks';
import {TFeedOrder, TMenuItem} from '../../types';
import {formatDate} from '../../utils/common';
import {OrderStatus} from '../../utils/constants';
import Price from '../price/price';
import cn from 'classnames';

import styles from './order-card.module.css';


const MAX_INGREDIENTS = 6;
const MAX_NAME_LENGTH = 60;

type TOrderCardProps = {
  className?: string;
  order: TFeedOrder;
}

function OrderCard({ className, order }: TOrderCardProps): JSX.Element {

  const { ingredients, name, number, createdAt, status } = order;

  const readyClass = status === 'done' ? styles.ready : '';

  const cardClasses = cn(styles.wrapper, className);
  const numberClasses = cn('text text_type_digits-default');
  const timeClasses = cn('text text_type_main-default text_color_inactive');
  const titleClasses = cn(styles.title, 'text text_type_main-medium');
  const extraClasses = cn(styles.extra, 'text text_type_digits-default');
  const statusClasses = cn(styles.status, readyClass, 'text text_type_main-small');


  const allIngredients: TMenuItem[] = useAppSelector(
    (state) => state.ingredients.ingredients);

  const currentIngredients: TMenuItem[] = allIngredients
    .filter((item) => ingredients.includes(item._id));

  const totalPrice = currentIngredients.reduce((total: number, item: TMenuItem) => {
    return total + item.price;
  }, 0);

  return (
    <div className={cardClasses}>
      <div className={styles.info}>
        <span className={numberClasses}>#{number}</span>
        <span className={timeClasses}>{formatDate(createdAt)}</span>
      </div>
      <h3 className={titleClasses}>{
        name.length > MAX_NAME_LENGTH
        ? `${name.slice(0, MAX_NAME_LENGTH)}...`
        : name
      }
      </h3>
      {status && <p className={statusClasses}>{OrderStatus[status]}</p>}
      <div className={styles.bottom}>
        <div className={styles.images_wrapper}>
          {
            currentIngredients.slice(0, MAX_INGREDIENTS).map((item, index) => {
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
