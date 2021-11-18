import React from 'react';
import cn from 'classnames';
import {useAppSelector} from '../../hooks/hooks';
import styles from './orders-status.module.css';


function OrdersStatus(): JSX.Element {

  const titleClasses = cn(styles.title, 'text text_type_main-medium');
  const listClasses = cn(styles.list, 'text text_type_digits-default');
  const countClasses = cn(styles.count, 'text text_type_digits-large');

  const { orders, total, totalToday } = useAppSelector((state) => state.feed);

  const ordersByStatus = new Map();
  ordersByStatus.set('done', []);
  ordersByStatus.set('in progress', []);
  orders.forEach((order) => {
    order.status === 'done'
      ? ordersByStatus.get('done').push(order.number)
      : ordersByStatus.get('in progress').push(order.number);
  })
  console.log(ordersByStatus);
  return (
    <section className={styles.orders}>
      <div className={styles.orders_wrapper}>
        <div>
          <h3 className={titleClasses}>Готовы:</h3>
          <ul className={listClasses}>
            {
              ordersByStatus.get('done')
                .map((number: number) =>
                  <li
                    key={number}
                    className={styles.ready_item}>
                    {number}
                  </li>
                )
            }
          </ul>
        </div>
        <div>
          <h3 className={titleClasses}>В работе:</h3>
          <ul className={listClasses}>
            {
              ordersByStatus.get('in progress')
                .map((number: number) =>
                  <li
                    key={number}
                    className={styles.in_progress_item}>
                    {number}
                  </li>
                )
            }
          </ul>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h3 className={titleClasses}>Выполнено за все время:</h3>
        <p className={countClasses}>{total}</p>
      </div>
      <div>
        <h3 className={titleClasses}>Выполнено за сегодня:</h3>
        <p className={countClasses}>{totalToday}</p>
      </div>
    </section>
  )
}


export default OrdersStatus;
