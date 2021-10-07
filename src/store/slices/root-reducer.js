import { combineReducers } from 'redux'
import burgerConstructorReducer from './burger-constructor-slice';
import ingredientsReducer from './ingredients-slice';
import orderReducer from './order-slice';
import ingredientReducer from './ingredient-slice';
import tabReducer from './tab-slice';
import forgotPasswordReducer from './forgot-password-slice';
import userReducer from './user-slice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  ingredient: ingredientReducer,
  tab: tabReducer,
  forgotPassword: forgotPasswordReducer,
  user: userReducer,
});
