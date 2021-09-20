import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './slices/root-reducer';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: rootReducer,
});

