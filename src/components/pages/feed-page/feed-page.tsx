import cn from 'classnames';
import React from 'react';
import OrdersFeed from '../../orders-feed';
import styles from '../main-page/main-wrapper.module.css';


function FeedPage(): JSX.Element {

  const titleClasses = cn(styles.title, 'text text_type_main-large');

  return (
    <main className={styles.main}>
      <h2 className={titleClasses}>Лента заказов</h2>
      <OrdersFeed />
    </main>
  )
}


export default FeedPage;
