import React from 'react';
import PropTypes from 'prop-types';
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

Counter.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number.isRequired,
  size: PropTypes.string,
};


export default Counter;
