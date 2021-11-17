import {createSlice} from '@reduxjs/toolkit';
import {TFeedOrder} from '../../types';

interface IUserFeedState {
  orders: TFeedOrder[];
  wsConnected: boolean;
  error: boolean;
}

const initialState: IUserFeedState = {
  orders: [],
  wsConnected: false,
  error: false,
};

const userFeedSlice = createSlice({
  name: 'userFeed',
  initialState,
  reducers: {
    wsConnectionSuccess: (state) => {
      state.wsConnected = true;
      state.error = false;
    },
    wsConnectionError: (state) => {
      state.wsConnected = false;
      state.error = true;
    },
    wsConnectionClosed: (state) => {
      state.wsConnected = false;
    },
    wsGetMessage: (state, action) => {
      const { orders, success } = action.payload;
      if (!success) {
        state.error = true;
        return;
      }
      state.orders = orders;
    }
  },
});

export default userFeedSlice.reducer;
export const {
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage
} = userFeedSlice.actions;
