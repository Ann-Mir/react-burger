import { combineReducers } from 'redux'
import constructorReducer from './constructor-slice';
import ingredientsReducer from './ingredients-slice';
import orderReducer from './order-slice';
import ingredientReducer from './ingredient-slice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructor: constructorReducer,
  order: orderReducer,
  ingredient: ingredientReducer,
});
