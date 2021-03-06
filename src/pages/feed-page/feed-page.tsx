import cn from 'classnames';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import wsActions from '../../store/action-types';
import ErrorAlert from '../../components/error-alert/error-alert';
import OrdersFeed from '../../components/orders-feed/orders-feed';
import OrdersStatus from '../../components/orders-status/orders-status';
import Spinner from '../../components/spinner/spinner';
import styles from './feed-page.module.css';


function FeedPage(): JSX.Element {

  const titleClasses = cn(styles.title, 'text text_type_main-large');

  const dispatch = useAppDispatch();
  const {orders, error, wsConnected} = useAppSelector((state) => state.feed);

  useEffect(() => {
    dispatch(wsActions.wsInit.wsConnectionInit('getAllFeedOrders'));

    return () => {
      dispatch(wsActions.wsInit.wsConnectionClose());
    }
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <h2 className={titleClasses}>Лента заказов</h2>
      <div className={styles.wrapper}>
        {error && <ErrorAlert />}
        {!wsConnected && <Spinner className={styles.spinner}/>}
        {!error && wsConnected &&
        <>
          <OrdersFeed orders={orders} />
          <OrdersStatus />
        </>
        }
      </div>
    </main>
  )
}


export default FeedPage;
