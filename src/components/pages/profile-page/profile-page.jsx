import React from 'react';
import AppHeader from '../../app-header/app-header';
import ProfileForm from '../../profile-form/profile-form';
import cn from 'classnames';

import styles from './profile-page.module.css';


function ProfilePage() {

  const linkClasses = cn('text text_type_main-medium text_color_inactive', styles.link);
  const activeLinkClasses = cn('text text_type_main-medium', styles.link);

  const ProfileNav = () => {

    const noteClasses = cn('text text_type_main-small text_color_inactive', styles.note);

    return (
      <div className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}><a className={linkClasses}>Профиль</a></li>
          <li className={styles.item}><a className={linkClasses}>История заказов</a></li>
          <li className={styles.item}><a className={linkClasses}>Выход</a></li>
        </ul>
        <p className={noteClasses}>
          В этом разделе вы можете<br/>изменить свои персональные данные
        </p>
      </div>

    )
  };

  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <main className={styles.main}>
        <ProfileNav />
        <ProfileForm />
      </main>
    </div>
  )

}

export default ProfilePage;
