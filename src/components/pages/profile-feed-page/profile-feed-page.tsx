import React from 'react';
import {useAppSelector} from '../../../hooks';
import ErrorAlert from '../../error-alert/error-alert';
import OrdersFeed from '../../orders-feed/orders-feed';
import ProfileNav from '../../profile-nav/profile-nav';
import Spinner from '../../spinner/spinner';
import ProfileForm from '../profile-page/profile-form';

import styles from './profile-feed-page.module.css';


function ProfileFeedPage() {

  const { isLoading, error } = useAppSelector((state) => state.user);

  return (
    <div className={styles.wrapper}>
      {error && <ErrorAlert />}
      <main className={styles.main}>
        {isLoading && <Spinner className={styles.spinner}/>}
        <ProfileNav />
        <OrdersFeed />
      </main>
    </div>
  )
}


export default ProfileFeedPage;
