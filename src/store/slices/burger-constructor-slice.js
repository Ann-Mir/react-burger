import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState: {
    ingredients: [],
    bun: null,
    totalPrice: 0,
  },
  reducers: {
    addIngredient: (state, action) => {
      const ingredient = {...action.payload, constructorId: nanoid()};
      state.ingredients.push(ingredient);
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    removeConstructorIngredient: (state, action) => {
      state.totalPrice = state.totalPrice - action.payload.price;
      const index = state.ingredients.findIndex((ingredient) => ingredient._id = action.payload);
      state.ingredients.splice(index, 1);
    },
    addBun: (state, action) => {
      if ((state.bun === null) || (state.bun && state.bun._id !== action.payload._id)) {
        if (state.bun) {
          state.totalPrice = state.totalPrice - 2 * state.bun.price;
        }
        state.bun = action.payload;
        state.totalPrice = state.totalPrice + 2 * action.payload.price;
      }
    },
    removeBun: (state) => {
      if (state.bun) {
        state.totalPrice = state.totalPrice - 2 * state.bun.price;
      }
      state.bun = null;
    },
    clearOrder: (state) => {
      state.ingredients = [];
      state.bun = null;
      state.totalPrice = 0;
    },
    swapIngredients: (state, action) => {
      const from = action.payload.from;
      const to = action.payload.to;
      [state.ingredients[from], state.ingredients[to]] = [state.ingredients[to], state.ingredients[from]];
    }
  },
})

export const { addIngredient, removeConstructorIngredient, addBun, removeBun, clearOrder, swapIngredients } = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
