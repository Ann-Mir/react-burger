import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {TFeedOrder} from '../../types';
import OrderCard from '../order-card/order-card';

import styles from './orders-feed.module.css';


type TOrdersFeedProps = {
  orders: TFeedOrder[];
}

function OrdersFeed({ orders }: TOrdersFeedProps): JSX.Element {

  const location = useLocation();

  return (
    <section className={styles.orders}>
      <div className={styles.feed}>
        {
          orders.map((order) =>
            <Link
              to={{
                pathname: `${location.pathname}/${order._id}`,
                state: {background: location, currentOrders: orders}
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
