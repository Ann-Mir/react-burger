import React from 'react';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setActiveTab} from '../../store/slices/tab-slice';
import {TABS} from '../../utils/constants';

import styles from './tab-bar.module.css';


type TTabBarProps = {
  className?: string;
};

function TabBar({ className }: TTabBarProps): JSX.Element {

  const dispatch = useAppDispatch();

  const tabClasses = cn(className, styles.wrapper);

  const activeTab = useAppSelector((state: any) => state.tab.activeTab);

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
