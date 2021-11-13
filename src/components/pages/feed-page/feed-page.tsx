import React from 'react';
import OrderCard from '../../order-card/order-card';
import styles from '../main-page/main-wrapper.module.css';


function FeedPage(): JSX.Element {

  return (
    <main className={styles.main}>
      <OrderCard />
    </main>

  )
}


export default FeedPage;
