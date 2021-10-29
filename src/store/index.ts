import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {rootReducer} from './slices/root-reducer';
import {getUserData} from './slices/user-slice';


const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(getUserData());

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();



export default store;
