import React from 'react';
import cn from 'classnames';
import {useParams} from 'react-router';
import {useAppSelector} from '../../hooks/hooks';

import styles from './ingredients-details.module.css';


type TIngredientDetailsProps = {
  className?: string;
};

type TParams = {
  id: string | undefined;
};


function IngredientDetails({ className }: TIngredientDetailsProps): JSX.Element {

  const wrapperClasses = cn(styles.modal_wrapper, className);

  const { id } = useParams<TParams>();
  const item = useAppSelector(
    (state) => state.ingredients.ingredients).find(
      ({ _id } : {_id: string}) => id === _id);

  const titleClasses = cn('text text_type_main-medium', styles.title);

  if (!item) {
    return (
      <p className={titleClasses}>Ингредиент не найден:(</p>
    )
  }

  const {
    imageLarge,
    name,
    calories,
    proteins,
    fat,
    carbohydrates
  } = item;

  return (
    <>
      <div className={wrapperClasses}>
        <div className={styles.modal_img_wrapper}>
          <img src={imageLarge} alt={name}/>
        </div>
        <h3 className={titleClasses}>{name}</h3>
        <table className={styles.table}>
          <caption className='visually-hidden'>Энергетическая ценность</caption>
          <thead>
          <tr>
            <th className="text text_type_main-default text_color_inactive">Калории,ккал</th>
            <th className="text text_type_main-default text_color_inactive">Белки, г</th>
            <th className="text text_type_main-default text_color_inactive">Жиры, г</th>
            <th className="text text_type_main-default text_color_inactive">Углеводы, г</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="text text_type_digits-default text_color_inactive">{calories}</td>
            <td className="text text_type_digits-default text_color_inactive">{proteins}</td>
            <td className="text text_type_digits-default text_color_inactive">{fat}</td>
            <td className="text text_type_digits-default text_color_inactive">{carbohydrates}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}


export default IngredientDetails;
