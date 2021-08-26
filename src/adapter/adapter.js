export const adaptIngredientToClient = (ingredient) => {
  const adaptedIngredient = {
    ...ingredient,
    imageLarge: ingredient['image_large'],
    imageMobile: ingredient['image_mobile'],
  };

  delete adaptedIngredient['image_large'];
  delete adaptedIngredient['image_mobile'];

  return adaptedIngredient;
};
