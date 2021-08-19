import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import styles from './user-nav.module.css';


function UserNav({ className }) {

  const classes = cn(styles.profile, className);

  return (
    <a href="/" className={classes}>
      <div className={styles.profile_icon}>
        <ProfileIcon type="secondary" />
      </div>
      <p className="text text_type_main-default text_color_inactive">
        Личный кабинет
      </p>
    </a>
  );
}

UserNav.propTypes = {
  className: PropTypes.string,
};


export default UserNav;
