import React, {useRef} from 'react';
import cn from 'classnames';
import {useLocation, generatePath} from 'react-router';
import {Link} from 'react-router-dom';
import {TMenuItem} from '../../types';
import {AppRoutes} from '../../utils/constants';
import MenuItem from '../menu-item/menu-item';

import styles from './menu-sublist.module.css';


type Ref = HTMLDivElement;

type TMenuSublistProps = {
  className?: string;
  title: string;
  items: Array<TMenuItem>;
  data: string;
};

const MenuSublist = React.forwardRef<Ref, TMenuSublistProps>(
  (
    {
      className,
      title,
      items,
      data
    }, ref): JSX.Element => {

  const classes = cn(className, styles.list);
  const titleClasses = cn('text text_type_main-medium', styles.title);

  const titleRef = useRef<HTMLHeadingElement>(null);

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


export default MenuSublist;
