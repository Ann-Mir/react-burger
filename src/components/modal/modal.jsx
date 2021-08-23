import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import useOutsideClick from '../../hooks/use-outside-click';
import ModalOverlay from '../modal-overlay/modal-overlay';

import styles from './modal.module.css';


const modalRoot = document.getElementById('modal-root');
const FOCUSABLE_ELEMENTS = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const Modal = ({ title, children, onClose }) => {

  const modalRef = useRef(null);

  const onEscKeyDown = ( { code } ) => {
    if ( code === 'Escape' ) {
      onClose();
    }
  };

  const onTabPressed = (firstFocusableElement, lastFocusableElement) => {
    return (evt) => {
      const isTabPressed = evt.key === 'Tab' || evt.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      firstFocusableElement.focus();

      if (evt.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          evt.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          evt.preventDefault();
        }
      }
    }
  };

  useEffect(() => {
    const modal = document.querySelector('#modal');

    const firstFocusableElement = modal.querySelectorAll(FOCUSABLE_ELEMENTS)[0];
    const focusableContent = modal.querySelectorAll(FOCUSABLE_ELEMENTS);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onTabPressed(firstFocusableElement, lastFocusableElement));
    document.addEventListener('keydown', onEscKeyDown);



    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', onTabPressed(firstFocusableElement, lastFocusableElement));
      document.removeEventListener('keydown', onEscKeyDown);
    }
  }, []);

  useOutsideClick(modalRef, onClose);

  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={styles.modal} id="modal" ref={modalRef}>
        <button className={styles.close} aria-label="Закрыть модальное окно" onClick={onClose}>
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
