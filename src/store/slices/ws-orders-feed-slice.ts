import { createSlice } from '@reduxjs/toolkit';
import {TFeedOrder} from '../../types';

interface IOrdersFeedState {
  orders: TFeedOrder[];
  total: number;
  totalToday: number;
  wsConnected: boolean;
  error: boolean;
}

const initialState: IOrdersFeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
  error: false,
};

const ordersFeedSlice = createSlice({
  name: 'ordersFeed',
  initialState,
  reducers: {
    wsConnectionSuccess: (state) => {
      state.wsConnected = true;
      state.error = false;
    },
    wsConnectionError: (state) => {
      state.wsConnected = false;
      state.error = true ;
    },
    wsConnectionClosed: (state) => {
      state.wsConnected = false;
      state.error = false;
    },
    wsGetMessage: (state, action) => {
      const { orders, total, totalToday, success } = action.payload;
      if (!success) {
        state.error = true;
        return;
      }
      state.orders = orders;
      state.total = total;
      state.totalToday = totalToday;
      state.error = false;
    }
  },
});


export const {
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage
} = ordersFeedSlice.actions;
export default ordersFeedSlice.reducer;
