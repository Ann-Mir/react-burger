import PropTypes from 'prop-types';
import React, {useRef} from 'react';
import cn from 'classnames';
import {useLocation, generatePath} from 'react-router';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../utils/constants';
import ingredientProp from '../../utils/ingredient.prop';
import MenuItem from '../menu-item/menu-item';

import styles from './menu-sublist.module.css';


const MenuSublist = React.forwardRef(({ className, title, items, data }, ref) => {

  const classes = cn(className, styles.list);
  const titleClasses = cn('text text_type_main-medium', styles.title);

  const titleRef = useRef(null);

  let location = useLocation();

  return (
    <div ref={ref}>
      <h3 ref={titleRef} data-title={data} className={titleClasses} >{title}</h3>
      <ul className={classes}>
        {items.map((item) => (
          <Link
            key={item._id}
            to={{
              pathname: generatePath(AppRoutes.INGREDIENTS, {id: item._id}),
              state: { background: location }
            }}
          >
            <MenuItem item={item} />
          </Link>
          ))}
      </ul>
    </div>
  )
});

MenuSublist.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ingredientProp.isRequired).isRequired,
  data: PropTypes.string.isRequired,
};


export default MenuSublist;
