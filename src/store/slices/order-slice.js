import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';


export const postOrder = createAsyncThunk(
  'orders/postOrder',
  async function ({ingredients}, {rejectWithValue, dispatch}) {
    try {
      const response = await api.postOrder(ingredients);

      if (!response.ok) {
        throw new Error(response.message);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    ingredients: [],
    isLoading: false,
    error: null,
    number: null,
    name: null,
  },
  reducers: {
    clearOrderDetails: (state) => {
      state.ingredients = [];
      state.isLoading = false;
      state.error = null;
      state.number = null;
      state.name = null;
    }
  },
  extraReducers: {
    [postOrder.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.number = null;
      state.name = null;
    },
    [postOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.number = action.payload.order.number;
      state.name = action.payload.name;
    },
    [postOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export const {clearOrderDetails} = orderSlice.actions;
export default orderSlice.reducer;
