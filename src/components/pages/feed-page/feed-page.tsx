import cn from 'classnames';
import React from 'react';
import OrdersFeed from '../../orders-feed/orders-feed';
import OrdersStatus from '../../orders-status/orders-status';
import styles from './feed-page.module.css';


function FeedPage(): JSX.Element {

  const titleClasses = cn(styles.title, 'text text_type_main-large');

  return (
    <main className={styles.main}>
      <h2 className={titleClasses}>Лента заказов</h2>
      <div className={styles.wrapper}>
        <OrdersFeed />
        <OrdersStatus />
      </div>
    </main>
  )
}


export default FeedPage;
