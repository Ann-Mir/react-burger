import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {setActiveTab} from '../../store/slices/tab-slice';
import {TABS} from '../../utils/constants';

import styles from './tab-bar.module.css';


type TTabBarProps = {
  className?: string;
};

function TabBar({ className }: TTabBarProps): JSX.Element {

  const dispatch = useDispatch();

  const tabClasses = cn(className, styles.wrapper);

  const activeTab = useSelector((state: any) => state.tab.activeTab);

  const onTabClick = (item: string) => {
    dispatch(setActiveTab(item));
  };

  return (
    <div className={tabClasses}>
      {
        Object.values(TABS).map((item: string) =>
          <Tab key={item} value={item} active={activeTab === item} onClick={onTabClick}>
            {item}
          </Tab>)
      }
    </div>
  )
}


export default TabBar;
