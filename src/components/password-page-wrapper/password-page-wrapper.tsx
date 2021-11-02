import cn from 'classnames';
import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../utils/constants';

import styles from './password-page-wrapper.module.css';


type TPasswordPageWrapperProps = {
  children: ReactNode;
};

function PasswordPageWrapper({ children }: TPasswordPageWrapperProps): JSX.Element {

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        {children}
        <p className={cn('text text_type_main-default text_color_inactive', styles.password)}>
          Вспомнили пароль?&ensp;
          <Link to={AppRoutes.LOGIN} className={styles.login}>
            Войти
          </Link>
        </p>
      </main>
    </div>
  )
}


export default PasswordPageWrapper;
