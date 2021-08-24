import React from 'react';
import cn from 'classnames';
import Modal from '../modal/modal';

import styles from './order-details.module.css';


function OrderDetails({ confirmationNumber='034536', onClose }) {

  const numberClasses = cn('text text_type_digits-large', styles.number);
  const idClasses = cn('text text_type_main-medium', styles.id);
  const notificationClasses = cn('text text_type_main-default',  styles.notification);
  const noteClasses = cn('text text_type_main-default text_color_inactive', styles.note);

  return (
    <Modal onClose={onClose}>
      <div className={styles.wrapper}>
        <p className={numberClasses}>{confirmationNumber}</p>
        <p className={idClasses}>идентификатор заказа</p>
        <button className={styles.button} onClick={onClose} aria-label="закрыть модальное окно"/>
        <p className={notificationClasses}>Ваш заказ начали готовить</p>
        <p className={noteClasses}>Дождитесь готовности на орбитальной станции</p>
      </div>
    </Modal>
  )
}


export default OrderDetails;
