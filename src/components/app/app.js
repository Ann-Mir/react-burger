import React from 'react';
import MenuItem from '../menu-item/menu-item';
import MenuList from '../menu-list/menu-list';
import Price from '../price/price';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';

import {data} from '../../utils/data';

function App() {
  return (
    <div className={styles.wrapper}>
      <AppHeader />
      {/*<MenuItem item={data[0]} isChosen />*/}
      <MenuList />
    </div>
  )
}

export default App;
