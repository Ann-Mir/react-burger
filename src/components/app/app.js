import React from 'react';
import MainWrapper from '../main-wrapper/main-wrapper';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';

import {data} from '../../utils/data';

function App() {
  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <MainWrapper />
    </div>
  )
}

export default App;
