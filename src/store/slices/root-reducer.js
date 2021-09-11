import { combineReducers } from 'redux'
import constructorReducer from './constructor-slice';
import ingredientsReducer from './ingredients-slice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  // constructor: constructorReducer,
});
