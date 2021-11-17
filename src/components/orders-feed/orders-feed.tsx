import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useParams} from 'react-router';
import {AppRoutes} from '../../utils/constants';
import OrderCard from '../order-card/order-card';

import styles from './orders-feed.module.css';

type TParams = {
  id: string | undefined;
};


function OrdersFeed(): JSX.Element {

  const { id } = useParams<TParams>();
  const location = useLocation();
  console.log(location);

  return (
    <section className={styles.orders}>
      <div className={styles.feed}>
        <Link to={{
          pathname: `${location.pathname}/${id}`,
          state: { background: location }}}>
          <OrderCard className={styles.card}/>
        </Link>
        <OrderCard className={styles.card}/>
        <OrderCard className={styles.card}/>
        <OrderCard className={styles.card}/>
        <OrderCard className={styles.card}/>
      </div>
    </section>
  )
}


export default OrdersFeed;
