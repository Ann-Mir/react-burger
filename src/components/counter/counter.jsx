import React from 'react';
import cn from 'classnames';
import {Counter as CounterIcon} from '@ya.praktikum/react-developer-burger-ui-components';


function Counter({ className, count, size }) {
  const classes = cn(className);
  return (
    <div className={classes}>
      <CounterIcon count={count} size={size}/>
    </div>
  );
}


export default Counter;
