import { createSlice } from '@reduxjs/toolkit';


const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState: {
    ingredients: [],
    bun: null,
  },
  reducers: {
    addIngredient: (state, action) => {
      state.ingredients.push(action.payload);
    },
    removeIngredient: (state, action) => {
      const index = state.ingredients.findIndex((ingredient) => ingredient._id = action.payload);
      state.ingredients.splice(index, 1);
    },
    addBun: (state, action) => {
      console.log(state.bun);
      console.log(action.payload);
      if ((state.bun === null) || (state.bun && state.bun._id !== action.payload._id)) {
        state.bun = action.payload;
      }
    },
    removeBun: (state) => {
      state.bun = null;
    }
  },
})

export const { addIngredient, removeIngredient, addBun, removeBun } = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
