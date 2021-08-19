import React from 'react';

import styles from './scrolled-area.module.css';


function ScrolledArea({ children, maxHeight }) {

  return (
    <div style={{maxHeight: maxHeight}} className={styles.wrapper}>
      {children}
    </div>
  )
}


export default ScrolledArea;
