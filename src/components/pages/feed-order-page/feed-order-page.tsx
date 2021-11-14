import React from 'react';
import cn from 'classnames';
import IngredientPreview from '../../ingredient-preview/ingredient-preview';

import styles from './feed-order-page.module.css';
import Price from '../../price/price';


function FeedOrderPage() {

  const numberClasses = cn(styles.number, 'text text_type_digits-default');
  const titleClasses = cn(styles.title, 'text text_type_main-medium');
  const statusClasses = cn(styles.status, 'text text_type_main-default');
  const ingredientsClasses = cn(styles.ingredients, 'text text_type_main-medium');
  const nameClasses = cn(styles.name, 'text text_type_main-default');
  const quantityClasses = cn(styles.quantity, 'text text_type_digits-default');


  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <p className={numberClasses}>#054774</p>
        <h3 className={titleClasses}>Black Hole Singularity острый бургер</h3>
        <p className={statusClasses}>Выполнен</p>
        <p className={ingredientsClasses}>Состав:</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <IngredientPreview className={styles.preview}/>
            <p className={nameClasses}>Флюоресцентная булка R2 D2</p>
            <p className={styles.price}>
              <span className={quantityClasses}>2&nbsp;x&nbsp;</span>
              <Price price={300}/>
            </p>
          </li>
          <li className={styles.item}>
            <IngredientPreview className={styles.preview}/>
            <p className={nameClasses}>Флюоресцентная булка R2 D2</p>
            <p className={styles.price}>
              <span className={quantityClasses}>10&nbsp;x&nbsp;</span>
              <Price price={3000}/>
            </p>
          </li>
          <li className={styles.item}>
            <IngredientPreview className={styles.preview}/>
            <p className={nameClasses}>Флюоресцентная булка R2 D2</p>
            <p className={styles.price}>
              <span className={quantityClasses}>10&nbsp;x&nbsp;</span>
              <Price price={3000}/>
            </p>
          </li>
          <li className={styles.item}>
            <IngredientPreview className={styles.preview}/>
            <p className={nameClasses}>Флюоресцентная булка R2 D2</p>
            <p className={styles.price}>
              <span className={quantityClasses}>10&nbsp;x&nbsp;</span>
              <Price price={3000}/>
            </p>
          </li>
          <li className={styles.item}>
            <IngredientPreview className={styles.preview}/>
            <p className={nameClasses}>Флюоресцентная булка R2 D2</p>
            <p className={styles.price}>
              <span className={quantityClasses}>10&nbsp;x&nbsp;</span>
              <Price price={3000}/>
            </p>
          </li>
          <li className={styles.item}>
            <IngredientPreview className={styles.preview}/>
            <p className={nameClasses}>Флюоресцентная булка R2 D2</p>
            <p className={styles.price}>
              <span className={quantityClasses}>10&nbsp;x&nbsp;</span>
              <Price price={3000}/>
            </p>
          </li>
          <li className={styles.item}>
            <IngredientPreview className={styles.preview}/>
            <p className={nameClasses}>Флюоресцентная булка R2 D2</p>
            <p className={styles.price}>
              <span className={quantityClasses}>10&nbsp;x&nbsp;</span>
              <Price price={3000}/>
            </p>
          </li>
        </ul>
        <div className={styles.bottom}>
          <p className={'text text_type_main-default text_color_inactive'}>
            Вчера, 13:50 i-GMT+3
          </p>
          <Price price={5000} />
        </div>
      </div>
    </main>
  )
}

export default FeedOrderPage;
