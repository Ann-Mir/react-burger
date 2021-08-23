import React from 'react';
import cn from 'classnames';
import styles from './modal-ingredients.module.css'
import Modal from '../modal/modal';


function ModalIngredient({ ingredient, onClose }) {

  const { imageLarge, name, calories, proteins, fat, carbohydrates } = ingredient;

  const titleClasses = cn('text text_type_main-medium', styles.title);

  return (
    <Modal title="Детали ингредиента" onClose={onClose}>
      <div className={styles.modal_wrapper}>
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
          <tr className={styles.tr}>
            <td className="text text_type_digits-default text_color_inactive">{calories}</td>
            <td className="text text_type_digits-default text_color_inactive">{proteins}</td>
            <td className="text text_type_digits-default text_color_inactive">{fat}</td>
            <td className="text text_type_digits-default text_color_inactive">{carbohydrates}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  )
}


export default ModalIngredient;
