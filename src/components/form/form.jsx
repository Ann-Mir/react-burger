import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import cn from 'classnames';

import styles from './form.module.css';


function Form({ legend, children, buttonText, onFormSubmit, className, isLoading, error }) {

  const formClasses = cn(styles.form, className);
  const legendClasses = cn('text text_type_main-medium', styles.legend);

  return (
    <form className={formClasses} onSubmit={onFormSubmit}>
      <legend className={legendClasses}>{legend}</legend>
      {children}
      <Button size="medium" type="primary">{buttonText}</Button>
    </form>
  )
}


export default Form;
