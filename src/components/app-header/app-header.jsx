import React from 'react';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';
import UserNav from '../user-nav/user-nav';

import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <MainNav className={styles.nav}/>
        <Logo className={styles.logo}/>
        <UserNav className={styles.profile}/>
      </div>
    </header>
  )
}


export default AppHeader;
