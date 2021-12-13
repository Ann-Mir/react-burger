import React from 'react';

import styles from './not-found-page.module.css';


function NotFoundPage(): JSX.Element {
  return (
    <main className={styles.main}>
      <p className="text text_type_main-large">Page not found :(</p>
    </main>
  )
}


export default NotFoundPage;
