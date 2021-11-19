import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import wsActions from '../../../store/action-types';
import ErrorAlert from '../../error-alert/error-alert';
import OrdersFeed from '../../orders-feed/orders-feed';
import ProfileNav from '../../profile-nav/profile-nav';
import Spinner from '../../spinner/spinner';

import styles from './profile-feed-page.module.css';


function ProfileFeedPage() {

  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.user);
  const {orders, error: wsError, wsConnected} = useAppSelector((state) => state.userFeed);

  useEffect(() => {

    dispatch(wsActions.wsInit.wsConnectionInit('getUserFeedOrders'));

    return () => {
      dispatch(wsActions.wsInit.wsConnectionClose());
    }
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {(error || wsError) && <ErrorAlert />}
      <main className={styles.main}>
        {(isLoading || !wsConnected) && <Spinner className={styles.spinner}/>}
        <ProfileNav />
        {
          !isLoading
          && wsConnected
          && !error
          && !wsError
          && <OrdersFeed orders={orders} />
        }
      </main>
    </div>
  )
}


export default ProfileFeedPage;
