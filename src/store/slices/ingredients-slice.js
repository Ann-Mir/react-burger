import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {adaptIngredientToClient} from '../../adapter/adapter';
import api from '../../services/api';


export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.fetchIngredients();

      if (!response.ok) {
        throw new Error(response.message);
      }

      const { data } = await response.json();
      const burgerIngredients = data.map(adaptIngredientToClient);
      return burgerIngredients;
    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
);


const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredients: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    clearQuantities: (state) => {
      state.ingredients.forEach((item) => delete item.count);
    },
    increaseQuantity: (state, action) => {
      const item = state.ingredients.find((item) => item._id === action.payload._id);
      if (item.count) {
        item.count++;
      } else {
        item.count = 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.ingredients.find((item) => item._id === action.payload._id);
      if (item.count > 1) {
        item.count--;
      } else {
        delete item['count'];
      }
    },
    addBunQuantity: (state, action) => {
      state.ingredients.forEach((item) => {
        if (item.type === 'bun') {
          if (action.payload._id === item._id) {
            item.count = 2;
          } else {
            delete item['count'];
          }
        }
      })
    }
  },
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ingredients = action.payload;
    },
    [fetchIngredients.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});


export const {
  increaseQuantity,
  addBunQuantity,
  decreaseQuantity,
  clearQuantities
} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
