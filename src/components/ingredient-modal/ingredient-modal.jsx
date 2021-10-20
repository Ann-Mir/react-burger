import React from 'react';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';


function IngredientModal({ onClose }) {

  return (
    <Modal title='Детали ингредиента' onClose={onClose}>
      <IngredientDetails />
    </Modal>
  )
}

export default IngredientModal;
