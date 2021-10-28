import React from 'react';
import cn from 'classnames';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';
import UserNav from '../user-nav/user-nav';

import styles from './app-header.module.css';


type TAppHeaderProps = {
  className?: string;
};


function AppHeader({ className }: TAppHeaderProps): JSX.Element {

  const headerClasses = cn(styles.header, className);

  return (
    <header className={headerClasses}>
      <div className={styles.wrapper}>
        <MainNav className={styles.nav}/>
        <Logo className={styles.logo}/>
        <UserNav className={styles.profile}/>
      </div>
    </header>
  )
}


export default AppHeader;
