import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './form.module.css';


function Form({ legend, children, buttonText, onFormSubmit, className, isDisabled }) {

  const formClasses = cn(styles.form, className);
  const legendClasses = cn('text text_type_main-medium', styles.legend);

  return (
    <form className={formClasses} onSubmit={onFormSubmit}>
      <legend className={legendClasses}>{legend}</legend>
      {children}
      <Button size="medium" type="primary" disabled={isDisabled}>{buttonText}</Button>
    </form>
  )
}


Form.propTypes = {
  className: PropTypes.string,
  legend: PropTypes.string,
  children: PropTypes.any,
  buttonText: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

export default Form;
