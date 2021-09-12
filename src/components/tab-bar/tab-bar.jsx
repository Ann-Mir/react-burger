import PropTypes from 'prop-types';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {setActiveTab} from '../../store/slices/tab-slice';
import {TABS} from '../../utils/constants';

import styles from './tab-bar.module.css';


function TabBar({ className }) {

  const dispatch = useDispatch();

  const tabClasses = cn(className, styles.wrapper);

  const activeTab = useSelector((state) => state.tab.activeTab);

  const onTabClick = (item) => {
    dispatch(setActiveTab(item));
  };

  return (
    <div className={tabClasses}>
      {
        Object.values(TABS).map((item) =>
          <Tab key={item} value={item} active={activeTab === item} onClick={onTabClick}>
            {item}
          </Tab>)
      }
    </div>
  )
}

TabBar.propTypes = {
  className: PropTypes.string,
};


export default TabBar;
