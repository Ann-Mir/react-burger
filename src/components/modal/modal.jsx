import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

import styles from './modal.module.css';


const modalRoot = document.getElementById('modal-root');

const Modal = ({ title, children }) => {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={styles.modal}>
        <button className={styles.close} aria-label="Закрыть модальное окно">
          <CloseIcon type="primary"/>
        </button>
        <div className={styles.header}>
          <h2 className="text text_type_main-large">{title}</h2>
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
