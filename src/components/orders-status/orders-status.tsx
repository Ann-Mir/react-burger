import React from 'react';
import cn from 'classnames';
import styles from './orders-status.module.css';


function OrdersStatus() {

  const titleClasses = cn(styles.title, 'text text_type_main-medium');
  const listClasses = cn(styles.list, 'text text_type_digits-default');
  const countClasses = cn(styles.count, 'text text_type_digits-large');

  return (
    <section className={styles.orders}>
      <div className={styles.orders_wrapper}>
        <div>
          <h3 className={titleClasses}>Готовы:</h3>
          <ul className={listClasses}>
            <li className={styles.ready_item}>043345</li>
            <li className={styles.ready_item}>043345</li>
            <li className={styles.ready_item}>043345</li>
            <li className={styles.ready_item}>043345</li>
            <li className={styles.ready_item}>043345</li>
            <li className={styles.ready_item}>043345</li>
            <li className={styles.ready_item}>043345</li>
            <li className={styles.ready_item}>043345</li>
          </ul>
        </div>
        <div>
          <h3 className={titleClasses}>В работе:</h3>
          <ul className={listClasses}>
            <li className={styles.in_progress_item}>043345</li>
            <li className={styles.in_progress_item}>043345</li>
            <li className={styles.in_progress_item}>043345</li>
            <li className={styles.in_progress_item}>043345</li>
            <li className={styles.in_progress_item}>043345</li>
            <li className={styles.in_progress_item}>043345</li>
            <li className={styles.in_progress_item}>043345</li>
            <li className={styles.in_progress_item}>043345</li>
          </ul>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h3 className={titleClasses}>Выполнено за все время:</h3>
        <p className={countClasses}>28752</p>
      </div>
      <div>
        <h3 className={titleClasses}>Выполнено за сегодня:</h3>
        <p className={countClasses}>158</p>
      </div>
    </section>
  )
}


export default OrdersStatus;
