import React, {useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setActiveTab} from '../../store/slices/tab-slice';
import {mapItemsByType} from '../../utils/common';
import {TABS} from '../../utils/constants';
import MenuSublist from '../menu-sublist/menu-sublist';

import styles from './menu-list.module.css';

function MenuList(): JSX.Element {

  const ingredients = useAppSelector((state: any) => state.ingredients.ingredients);
  const itemsByType = useMemo(() => mapItemsByType(ingredients), [ingredients]);
  const dispatch = useAppDispatch();

  const containerRef = React.useRef<HTMLElement>(null);

  const bunsRef = React.useRef<HTMLDivElement>(null);
  const saucesRef = React.useRef<HTMLDivElement>(null);
  const mainRef = React.useRef<HTMLDivElement>(null);

  const sublistRefs = {
    bun: bunsRef,
    main: mainRef,
    sauce: saucesRef,
  };

  const handleScroll = () => {
    if (bunsRef.current && mainRef.current && saucesRef.current && containerRef.current) {
      const containerToTop = containerRef.current.getBoundingClientRect().top;

      if (
        bunsRef.current.getBoundingClientRect().top <= containerToTop &&
        bunsRef.current.getBoundingClientRect().top > 0
      ) {
        dispatch(setActiveTab(TABS.bun));
      }
      else if (
        mainRef.current.getBoundingClientRect().top <= containerToTop &&
        mainRef.current.getBoundingClientRect().top > 0
      ) {
        dispatch(setActiveTab(TABS.main));
      }
      else if (
        saucesRef.current.getBoundingClientRect().top <= containerToTop &&
        saucesRef.current.getBoundingClientRect().top > 0
      ) {
        dispatch(setActiveTab(TABS.sauce));
      }
    }
  };

  return (
    <section className={styles.menu} ref={containerRef} onScroll={handleScroll}>

      <h2 className="visually-hidden">Список ингредиентов</h2>
      {Array
        .from(itemsByType.keys())
        .map((title: keyof typeof TABS) => <MenuSublist
          ref={sublistRefs[title]}
          data={title}
          key={title}
          title={TABS[title]}
          items={itemsByType.get(title)}
        />)}
    </section>
  );
}


export default MenuList;
