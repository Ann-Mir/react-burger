import React from 'react';
import MainWrapper from './main-wrapper';

import styles from './index.module.css';


function MainPage(): JSX.Element {

  return (
    <>
      <div className={styles.wrapper}>
        <MainWrapper />
      </div>
    </>
  )
}


export default MainPage;