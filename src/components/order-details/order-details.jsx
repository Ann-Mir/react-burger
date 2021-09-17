import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import cn from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {clearOrder} from '../../store/slices/burger-constructor-slice';
import {clearOrderDetails} from '../../store/slices/order-slice';
import ErrorAlert from '../error-alert/error-alert';
import Spinner from '../spinner/spinner';

import styles from './order-details.module.css';


function OrderDetails({ onClose }) {

  const dispatch = useDispatch();
  const number = useSelector((state) => state.order.number);
  const isLoading = useSelector((state) => state.order.isLoading);
  const error = useSelector((state) => state.order.error);

  const numberClasses = cn('text text_type_digits-large', styles.number);
  const idClasses = cn('text text_type_main-medium', styles.id);
  const notificationClasses = cn('text text_type_main-default',  styles.notification);
  const noteClasses = cn('text text_type_main-default text_color_inactive', styles.note);

  useEffect(() => {
    return () => {
      dispatch(clearOrderDetails());
      if (!error) {
        dispatch(clearOrder());
      }
      onClose();
    }
  }, []);


  return (
    <>
      {isLoading && <Spinner className={styles.spinner} />}
      {error && <ErrorAlert />}
      {!isLoading && !error && number && (
        <div className={styles.wrapper}>
          <p className={numberClasses}>{number}</p>
          <p className={idClasses}>идентификатор заказа</p>
          <button className={styles.button} onClick={onClose} aria-label="закрыть модальное окно"/>
          <p className={notificationClasses}>Ваш заказ начали готовить</p>
          <p className={noteClasses}>Дождитесь готовности на орбитальной станции</p>
        </div>
      )}
    </>
  )
}

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
};


export default OrderDetails;
