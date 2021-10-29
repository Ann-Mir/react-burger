import React, {ReactNode, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

import styles from './modal.module.css';

type TModalType = {
  title?: string;
  children: ReactNode;
  onClose: () => void
};


const modalRoot = document.getElementById('modal-root')!;
const FOCUSABLE_ELEMENTS = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const Modal = ({ title, children, onClose }: TModalType): JSX.Element => {

  const onEscKeyDown = React.useCallback(( { code } ) => {
    if ( code === 'Escape' ) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const modal = document.querySelector<HTMLElement>('#modal');

    const firstFocusableElement = modal?.querySelectorAll(FOCUSABLE_ELEMENTS)[0];
    const focusableContent = modal?.querySelectorAll(FOCUSABLE_ELEMENTS) as ArrayLike<Element> ;
    const lastFocusableElement = focusableContent && focusableContent[focusableContent.length - 1];

    (firstFocusableElement as HTMLElement).focus();


    const onTabPressed = (evt: KeyboardEvent) => {
      const isTabPressed = evt.key === 'Tab' || evt.keyCode === 9;
      if (!isTabPressed) {
        return;
      }
      if (evt.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          (lastFocusableElement as HTMLElement).focus();
          evt.preventDefault();
        }
      } else {
        if (!Array.from(focusableContent).includes(document.activeElement as Element)) {
          (firstFocusableElement as HTMLElement).focus();
        }
        if (document.activeElement === lastFocusableElement) {
          (firstFocusableElement as HTMLElement).focus();
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


export default Modal;
