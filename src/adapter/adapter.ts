import {TMenuItem, TServerMenuItem} from '../types';


export const adaptIngredientToClient = (ingredient: TServerMenuItem): TMenuItem => {
  const adaptedIngredient = {
    ...ingredient,
    imageLarge: ingredient['image_large'],
    imageMobile: ingredient['image_mobile'],
  };

  delete adaptedIngredient['image_large'];
  delete adaptedIngredient['image_mobile'];

  return adaptedIngredient;
};
