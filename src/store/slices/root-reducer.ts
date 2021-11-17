import { combineReducers } from 'redux'
import burgerConstructorReducer from './burger-constructor-slice';
import ingredientsReducer from './ingredients-slice';
import orderReducer from './order-slice';
import ingredientReducer from './ingredient-slice';
import tabReducer from './tab-slice';
import passwordReducer from './password-slice';
import userReducer from './user-slice';
import feedReducer from './ws-orders-feed-slice';
import userFeedReducer from './ws-user-feed-slice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  ingredient: ingredientReducer,
  tab: tabReducer,
  password: passwordReducer,
  user: userReducer,
  feed: feedReducer,
  userFeed: userFeedReducer,
});
