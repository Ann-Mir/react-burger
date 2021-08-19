import React from 'react';
import cn from 'classnames';
import {ConstructorElement, DragIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {data as mockData} from '../../utils/data';
import Price from '../price/price';

import styles from './burger-constructor.module.css';

const getPrice = (ingredients, bun) => ingredients
  .reduce((sum, ingredient) => Number(ingredient.price) + sum, 0) + 2 * Number(bun.price);

function BurgerConstructor({ data= mockData }) {

  const bunClasses = cn(styles.list_item, styles.bun, styles.element);
  const bun = data[0];
  const ingredients = data.filter((ingredient) => ingredient.type !== 'bun');
  const totalPrice = getPrice(ingredients, bun);

  return (
    <section class={styles.section}>
      <h2 className="visually-hidden">Ваш заказ:</h2>
      <div className={styles.wrapper}>
        <div className={bunClasses}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={styles.list}>
          {
            ingredients.map((ingredient) => {
              return (
                <li key={ingredient._id} className={styles.list_item}>
                  <div className={styles.drag}>
                    <DragIcon type="primary" />
                  </div>
                  <div className={styles.element}>
                    <ConstructorElement
                      text={ingredient.name}
                      price={ingredient.price}
                      thumbnail={ingredient.image}
                    />
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className={bunClasses}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div>
        <Price price={totalPrice} type="primary" />
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}



export default BurgerConstructor;
