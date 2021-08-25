import React from 'react';
import cn from 'classnames';

import styles from './modal-overlay.module.css';


function ModalOverlay({ children, className, onClose }) {

  const classNames = cn(styles.overlay, className);

  const handleClick = (evt) => {
    if (evt.target === evt.target.current) {
      onClose();
    }
  };

  return (
    <div className={classNames} onClick={handleClick}>
      {children}
    </div>
  )
}


export default ModalOverlay;
