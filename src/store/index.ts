import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './slices/root-reducer';
import {getUserData} from './slices/user-slice';


const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(getUserData());


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
