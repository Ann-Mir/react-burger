import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import React, {useRef} from 'react';
import cn from 'classnames';
import ingredientProp from '../../utils/ingredient.prop';
import MenuItem from '../menu-item/menu-item';

import styles from './menu-sublist.module.css';


const MenuSublist = React.forwardRef(({ className, title, items, sublistRef, data }, ref) => {

  const classes = cn(className, styles.list);
  const titleClasses = cn('text text_type_main-medium', styles.title);

  const activeTab = useSelector((state) => state.tab.activeTab);

  const titleRef = useRef(null);

  // useEffect(() => {
  //   if (titleRef && titleRef.current.innerText === activeTab) {
  //     titleRef.current.scrollIntoView({behavior: 'smooth'});
  //   }
  // }, [activeTab]);

  return (
    <div ref={ref}>
      <h3 ref={titleRef} data-title={data} className={titleClasses} >{title}</h3>
      <ul className={classes}>
        {items.map((item) => <MenuItem key={item._id} item={item} />)}
      </ul>
    </div>
  )
});

MenuSublist.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ingredientProp.isRequired).isRequired,
};


export default MenuSublist;
