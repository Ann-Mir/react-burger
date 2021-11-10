import {createSlice, createAsyncThunk, SerializedError} from '@reduxjs/toolkit';
import api from '../../services/api';
import {TMenuItem} from '../../types';


interface IOrderState {
  ingredients: TMenuItem[];
  isLoading: boolean;
  error: SerializedError | null;
  number: number | null,
  name: string | null,
}

interface IOrder {
  name: string;
  order: {
    number: number;
  };
  success: string;
}

const initialState: IOrderState = {
  ingredients: [],
  isLoading: false,
  error: null,
  number: null,
  name: null,
};

export const postOrder = createAsyncThunk(
  'orders/postOrder',
  async function (ingredients: TMenuItem[], {rejectWithValue, dispatch}) {
    try {
      const response = await api.postOrder(ingredients);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      return data as IOrder;

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrderDetails: (state) => {
      state.ingredients = [];
      state.isLoading = false;
      state.error = null;
      state.number = null;
      state.name = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.number = null;
        state.name = null;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.number = action.payload.order.number;
        state.name = action.payload.name;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as SerializedError;
      })
  },
});

export const {clearOrderDetails} = orderSlice.actions;
export default orderSlice.reducer;
