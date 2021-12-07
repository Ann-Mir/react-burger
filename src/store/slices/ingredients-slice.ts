import {createSlice, createAsyncThunk, SerializedError, PayloadAction} from '@reduxjs/toolkit';
import {adaptIngredientToClient} from '../../adapter/adapter';
import api from '../../services/api';
import {TMenuItem} from '../../types';


interface IIngredientsState {
  ingredients: TMenuItem[];
  isLoading: boolean;
  error: SerializedError | null;
}

const initialState: IIngredientsState = {
  ingredients: [],
  isLoading: true,
  error: null,
};

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.fetchIngredients();

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const { data } = await response.json();
      const burgerIngredients = data.map(adaptIngredientToClient);
      return burgerIngredients;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
  }
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    clearQuantities: (state) => {
      state.ingredients.forEach((item) => delete item.count);
    },
    increaseQuantity: (state, action: PayloadAction<TMenuItem>) => {
      const item = state.ingredients.find((item) => item._id === action.payload._id);
      if (item && item.count) {
        item.count++;
      } else if (item) {
        item.count = 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<TMenuItem>) => {
      const item = state.ingredients.find((item) => item._id === action.payload._id);
      if (item && item.count) {
        if (item.count > 1) {
          item.count--;
        } else {
          delete item['count'];
        }
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as SerializedError;
      })
  },
});


export const {
  increaseQuantity,
  addBunQuantity,
  decreaseQuantity,
  clearQuantities
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
