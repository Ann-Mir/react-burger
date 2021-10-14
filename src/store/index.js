import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './slices/root-reducer';
import {getUserData} from './slices/user-slice';


const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(getUserData());

export default store;
