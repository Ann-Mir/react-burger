import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {adaptIngredientToClient} from '../../adapter/adapter';


export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/ingredients/');

      if (!response.ok) {
        throw new Error('Server Error!');
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

export default ingredientsSlice.reducer;
