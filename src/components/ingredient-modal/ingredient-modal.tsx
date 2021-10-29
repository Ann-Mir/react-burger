import React from 'react';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';


type TIngredientModalProps = {
  onClose: () => void;
};

function IngredientModal({ onClose }: TIngredientModalProps): JSX.Element {

  return (
    <Modal title='Детали ингредиента' onClose={onClose}>
      <IngredientDetails />
    </Modal>
  )
}


export default IngredientModal;
