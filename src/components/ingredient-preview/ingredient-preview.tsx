import React from 'react';
import cn from 'classnames';
import {TMenuItem} from '../../types';

import styles from './ingredient-preview.module.css';


type TIngredientPreviewProps = {
  className?: string;
  item: TMenuItem;
}

function IngredientPreview({ className, item }: TIngredientPreviewProps): JSX.Element {

  return (
    <div className={cn(styles.picture, className)}>
      <img
        className={styles.image}
        src={item.imageMobile}
        alt={item.name}
      />
    </div>
  )
}


export default IngredientPreview;
