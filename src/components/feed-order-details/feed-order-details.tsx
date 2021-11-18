import cn from 'classnames';
import React from 'react';
import {useParams} from 'react-router';
import {useAppSelector} from '../../hooks/hooks';
import {TMenuItem} from '../../types';
import {formatDate} from '../../utils/common';
import {OrderStatus} from '../../utils/constants';
import IngredientPreview from '../ingredient-preview/ingredient-preview';
import Price from '../price/price';

import styles from './feed-order-details.module.css';


type TParams = {
  id: string;
};

function FeedOrderDetails() {

  const { id } = useParams<TParams>();

  const orders = useAppSelector((state) => state.feed.orders);
  const index = orders.findIndex((item) => item._id === id);

  const order = orders[index];

  const { ingredients, name, number, createdAt, status } = order;

  const allIngredients: TMenuItem[] = useAppSelector(
    (state) => state.ingredients.ingredients);

  const currentIngredients: TMenuItem[] = [];
  allIngredients.forEach((item) => {
    ingredients.forEach((ingredient) => {
      if (ingredient === item._id) {
        currentIngredients.push(item);
      }
    });
  });

  const ingredientsMap = new Map();

  currentIngredients.forEach((item) => {
    if (ingredientsMap.has(item._id)) {
      ingredientsMap.get(item._id).push(item);;
    } else {
      ingredientsMap.set(item._id, [item]);
    }
  });

  const numberClasses = cn(styles.number, 'text text_type_digits-default');
  const titleClasses = cn(styles.title, 'text text_type_main-medium');
  const statusClasses = cn(styles.status, 'text text_type_main-default');
  const ingredientsClasses = cn(styles.ingredients, 'text text_type_main-medium');
  const nameClasses = cn(styles.name, 'text text_type_main-default');
  const quantityClasses = cn(styles.quantity, 'text text_type_digits-default');


  return (
    order &&
    <div className={styles.wrapper}>
      <p className={numberClasses}>#{number}</p>
      <h3 className={titleClasses}>{name}</h3>
      <p className={statusClasses}>{OrderStatus[status]}</p>
      <p className={ingredientsClasses}>Состав:</p>
      <ul className={styles.list}>
        {
          Array.from(ingredientsMap.keys()).map((id) => {
            const items = ingredientsMap.get(id);
            const count = items.length;
            const item = items[0];
            return (
              <li className={styles.item} key={id}>
                <IngredientPreview item={item} className={styles.preview} />
                <p className={nameClasses}>{item.name}</p>
                <div className={styles.price}>
                  <span className={quantityClasses}>{count}&nbsp;x&nbsp;</span>
                  <Price price={item.price}/>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className={styles.bottom}>
        <p className={'text text_type_main-default text_color_inactive'}>
          {formatDate(createdAt)}
        </p>
        <Price price={5000} />
      </div>
    </div>
  )
}


export default FeedOrderDetails;
