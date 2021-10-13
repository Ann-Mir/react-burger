import React from 'react';
import AppHeader from '../../app-header/app-header';
import MainWrapper from './main-wrapper';

import styles from './index.module.css';


function MainPage() {

  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <MainWrapper />
    </div>
  )
}


export default MainPage;