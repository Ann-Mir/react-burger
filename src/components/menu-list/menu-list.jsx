import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setActiveTab} from '../../store/slices/tab-slice';
import {mapItemsByType} from '../../utils/common';
import {TABS} from '../../utils/constants';
import ingredientProp from '../../utils/ingredient.prop';
import MenuSublist from '../menu-sublist/menu-sublist';

import styles from './menu-list.module.css';

function MenuList({ data }) {

  const itemsByType = mapItemsByType(data);
  const dispatch = useDispatch();

  const containerRef = React.useRef(null);

  const bunsRef = React.useRef(null);
  const saucesRef = React.useRef(null);
  const mainRef = React.useRef(null);

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
        .map((title) => <MenuSublist
          ref={sublistRefs[title]}
          data={title}
          key={title}
          title={TABS[title]}
          items={itemsByType.get(title)}
        />)}
    </section>
  );
}


MenuList.propTypes = {
  data: PropTypes.arrayOf(ingredientProp.isRequired).isRequired,
};

export default MenuList;
