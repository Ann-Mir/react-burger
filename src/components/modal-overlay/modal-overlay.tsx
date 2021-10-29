import React, {ReactNode} from 'react';
import cn from 'classnames';

import styles from './modal-overlay.module.css';


type TModalOverlayProps = {
  children: ReactNode;
  className?: string;
  onClose: () => void;
};

function ModalOverlay({ children, className, onClose }: TModalOverlayProps): JSX.Element {

  const classNames = cn(styles.overlay, className);

  const handleClick = (evt: React.SyntheticEvent) => {
    if (evt.target === evt.currentTarget) {
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
