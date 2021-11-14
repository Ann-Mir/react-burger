import React from 'react';
import cn from 'classnames';

import styles from './ingredient-preview.module.css';


function IngredientPreview({className}: {className: string}) {

  return (
    <div className={cn(styles.picture, className)}>
      <img
        className={styles.image}
        src={'https://code.s3.yandex.net/react/code/meat-04.png'}
        alt={'Говяжий метеорит (отбивная)'}
      />
    </div>
  )
}


export default IngredientPreview;
