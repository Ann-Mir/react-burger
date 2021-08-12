import React from 'react';
import cn from 'classnames';
import MenuItem from '../menu-item/menu-item';

import styles from './menu-sublist.module.css';


function MenuSublist({ className, title, items}) {

  const classes = cn(className, styles.list);
  const titleClasses = cn('text text_type_main-medium', styles.title);

  return (
    <>
      <h3 className={titleClasses}>{title}</h3>
      <ul className={classes}>
        {items.map((item) => <MenuItem key={item._id} item={item} isChosen />)}
      </ul>
    </>
  )
}


export default MenuSublist;
