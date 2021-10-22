import React from 'react';
import PropTypes from 'prop-types';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';


function IngredientModal({ onClose }) {

  return (
    <Modal title='Детали ингредиента' onClose={onClose}>
      <IngredientDetails />
    </Modal>
  )
}

IngredientModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};


export default IngredientModal;
