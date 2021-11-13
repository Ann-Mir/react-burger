import React from 'react';
import OrderCard from '../order-card/order-card';

import styles from './orders-feed.module.css';


function OrdersFeed(): JSX.Element {

  return (
    <section className={styles.orders}>
      <div className={styles.feed}>
        <OrderCard className={styles.card}/>
        <OrderCard className={styles.card}/>
        <OrderCard className={styles.card}/>
        <OrderCard className={styles.card}/>
        <OrderCard className={styles.card}/>
      </div>
    </section>
  )
}


export default OrdersFeed;
