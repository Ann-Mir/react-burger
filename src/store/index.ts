import {configureStore} from '@reduxjs/toolkit';
import socketMiddleware from './middlewares/socket-middleware';
import {rootReducer} from './slices/root-reducer';
import {getUserData} from './slices/user-slice';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware()),
});

store.dispatch(getUserData());


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
