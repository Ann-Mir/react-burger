import React from 'react';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {TABS} from '../../utils/constants';

import styles from './tab-bar.module.css';


function TabBar({ className }) {

  const tabClasses = cn(className, styles.wrapper)
  const [current, setCurrent] = React.useState('one');

  return (
    <div className={tabClasses}>
      {
        Object.values(TABS).map((item) =>
          <Tab key={item} value={item} active={current === item} onClick={setCurrent}>
            {item}
          </Tab>)
      }
    </div>
  )
}


export default TabBar;
