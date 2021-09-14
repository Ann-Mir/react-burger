import PropTypes from 'prop-types';
import React, {useDebugValue, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import {useDispatch} from 'react-redux';
import {useScroll} from '../../hooks/use-scroll';
import {setActiveTab} from '../../store/slices/tab-slice';
import {mapItemsByType} from '../../utils/common';
import {TABS} from '../../utils/constants';
import ingredientProp from '../../utils/ingredient.prop';
import MenuSublist from '../menu-sublist/menu-sublist';
import ScrolledArea from '../scrolled-area/scrolled-area';

import styles from './menu-list.module.css';

function MenuList({ data }) {

  const itemsByType = mapItemsByType(data);
  const dispatch = useDispatch();
  const containerRef = React.useRef(null);

  const containerToTop = containerRef.current ? containerRef.current.getBoundingClientRect().y : null;

  // const options = {
  //   root: containerRef.current,
  //   rootMargin: '0px 0px -80% 0px',
  //   threshold: 0.5,
  // };
  const bunsRef = React.useRef(null);
  const saucesRef = React.useRef(null);
  const mainRef = React.useRef(null);

  // const [bunsRef, bunsInView, bunEntry] = useInView(options);
  // const [saucesRef, saucesInView, sauceEntry] = useInView(options);
  // const [mainRef, mainInView, mainEntry] = useInView(options);

  // console.log(bunsRef);
  // bunsInView(bunsRef.current);
  // saucesInView(saucesRef.current);
  // mainInView(mainRef.current);


  const sublistRefs = {
    bun: bunsRef,
    main: mainRef,
    sauce: saucesRef,
  };

  const onScroll = () => {
    console.log('on scroll');
    const bunsToTop = bunsRef.current && containerToTop ? Math.abs(bunsRef.current.getBoundingClientRect().y - containerToTop) : 0;
    const saucesToTop = saucesRef.current && containerToTop ? Math.abs(saucesRef.current.getBoundingClientRect().y - containerToTop) : 0;
    const mainToTop = mainRef.current && containerToTop ? Math.abs(mainRef.current.getBoundingClientRect().y - containerToTop) : 0;

    if (bunsToTop <= saucesToTop) {
      dispatch(setActiveTab(TABS.bun));
    } else if (saucesToTop <= mainToTop) {
      dispatch(setActiveTab(TABS.sauce));
    } else {
      dispatch(setActiveTab(TABS.main));
    }
  };

  // useEffect(() => {
  //   containerRef.current.addEventListener('scroll', onScroll);
  //   return(() => containerRef.current.removeEventListener('scroll', onScroll));
  // }, [containerRef]);

  // const inViewRefs = {
  //   bun: bunsInView,
  //   main: saucesInView,
  //   sauce: mainInView,
  // }


  //useScroll(containerRef, [bunsRef, mainRef, saucesRef], (entry) => dispatch(setActiveTab(TABS[entry.target.dataset.title])));






  // useEffect(() => {
  //   console.log(bunsInView, mainInView, saucesInView);
  //   if (bunsInView) {
  //     dispatch(setActiveTab(TABS.bun));
  //   }
  //   if (mainInView) {
  //     dispatch(setActiveTab(TABS.main));
  //   }
  //   if (saucesInView) {
  //     dispatch(setActiveTab(TABS.sauce));
  //   }
  // }, [bunsInView, saucesInView, mainInView, dispatch]);

  return (
    // <ScrolledArea maxHeight={'756px'}>
      <section className={styles.menu} ref={containerRef}>

        <h2 className="visually-hidden">Список ингредиентов</h2>
        {Array.from(itemsByType.keys()).map((title) => <MenuSublist ref={sublistRefs[title]} data={title} key={title} title={TABS[title]} items={itemsByType.get(title)} />)}
      </section>
    // </ScrolledArea>


  );
}


MenuList.propTypes = {
  data: PropTypes.arrayOf(ingredientProp.isRequired).isRequired,
};

export default MenuList;
