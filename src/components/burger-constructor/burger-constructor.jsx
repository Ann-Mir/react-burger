import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import {
  ConstructorElement,
  DragIcon,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientProp from '../../utils/ingredient.prop';
import Price from '../price/price';
import ScrolledArea from '../scrolled-container/scrolled-area';

import styles from './burger-constructor.module.css';


const getPrice = (ingredients, bun) => ingredients
  .reduce((sum, ingredient) => Number(ingredient.price) + sum, 0) + 2 * Number(bun.price);


function BurgerConstructor({ data }) {

  const bunClasses = cn(styles.list_item, styles.bun, styles.element);
  const priceClasses = cn('text_type_digits-medium', styles.price)
  const bun = data[0];
  const ingredients = data.filter((ingredient) => ingredient.type !== 'bun');
  const totalPrice = getPrice(ingredients, bun);

  return (
    <section className={styles.section}>
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
        <ScrolledArea maxHeight={'400 px'}>
          <ul className={styles.list}>
            {
              ingredients.map((ingredient, index) => {
                return (
                  <li key={index} className={styles.list_item}>
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
        </ScrolledArea>
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
      <div className={styles.price_wrapper}>
        <Price price={totalPrice} type="primary" className={priceClasses} />
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientProp.isRequired).isRequired,
};


export default BurgerConstructor;
