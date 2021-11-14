import React from 'react';
import FeedOrderDetails from '../../feed-order-details/feed-order-details';

import styles from './feed-order-page.module.css';


function FeedOrderPage() {

  return (
    <main className={styles.main}>
      <FeedOrderDetails />
    </main>
  )
}

export default FeedOrderPage;
