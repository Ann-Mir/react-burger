import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks';
import OrderCard from '../order-card/order-card';

import styles from './orders-feed.module.css';


function OrdersFeed(): JSX.Element {

  const location = useLocation();

  const { orders } = useAppSelector((state) => state.feed);

  return (
    <section className={styles.orders}>
      <div className={styles.feed}>
        {
          orders.map((order) =>
            <Link
              to={{
                pathname: `${location.pathname}/${order._id}`,
                state: {background: location}
              }}
              key={order._id}
            >
              <OrderCard className={styles.card} order={order} />
            </Link>)
        }
      </div>
    </section>
  )
}


export default OrdersFeed;
