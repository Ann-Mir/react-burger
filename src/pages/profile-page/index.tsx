import React from 'react';
import {useAppSelector} from '../../hooks/hooks';
import ErrorAlert from '../../components/error-alert/error-alert';
import ProfileNav from '../../components/profile-nav/profile-nav';
import Spinner from '../../components/spinner/spinner';
import ProfileForm from './profile-form';

import styles from './index.module.css';


function ProfilePage(): JSX.Element {


  const { isLoading, error } = useAppSelector((state) => state.user);

  return (
    <div className={styles.wrapper}>
      {error && <ErrorAlert />}
      <main className={styles.main}>
        {isLoading && <Spinner className={styles.spinner}/>}
        <ProfileNav />
        <ProfileForm />
      </main>
    </div>
  )
}

export default ProfilePage;
