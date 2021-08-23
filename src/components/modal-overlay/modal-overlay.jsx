import React from 'react';
import cn from 'classnames';

import styles from './modal-overlay.module.css';


function ModalOverlay({ children, className }) {

  const classNames = cn(styles.overlay, className);

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}


export default ModalOverlay;
