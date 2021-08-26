import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

import styles from './modal.module.css';


const modalRoot = document.getElementById('modal-root');
const FOCUSABLE_ELEMENTS = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const Modal = ({ title, children, onClose }) => {

  const onEscKeyDown = React.useCallback(( { code } ) => {
    if ( code === 'Escape' ) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const modal = document.querySelector('#modal');

    const firstFocusableElement = modal.querySelectorAll(FOCUSABLE_ELEMENTS)[0];
    const focusableContent = modal.querySelectorAll(FOCUSABLE_ELEMENTS);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];
    firstFocusableElement.focus();

    const onTabPressed = (evt) => {
      const isTabPressed = evt.key === 'Tab' || evt.keyCode === 9;
      if (!isTabPressed) {
        return;
      }
      if (evt.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          evt.preventDefault();
        }
      } else {
        if (!Array.from(focusableContent).includes(document.activeElement)) {
          firstFocusableElement.focus();
        }
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          evt.preventDefault();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onTabPressed);
    document.addEventListener('keydown', onEscKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', onTabPressed);
      document.removeEventListener('keydown', onEscKeyDown);
    }
  }, [onEscKeyDown]);

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={styles.modal} id="modal">
        <button className={styles.close} aria-label="Закрыть модальное окно" onClick={onClose}>
          <CloseIcon type="primary" />
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

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
