import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const postOrder = createAsyncThunk(
  'orders/postOrder',
  async function ({ingredients}, {rejectWithValue, dispatch}) {
    try {
      const order = {
        ingredients: ingredients,
      };

      const response = await fetch('https://norma.nomoreparties.space/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      });

      if (!response.ok) {
        throw new Error('Can\'t place order. Server error, try again');
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


export default orderSlice.reducer;
