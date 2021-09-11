import { createSlice } from '@reduxjs/toolkit';
const constructorSlice = createSlice({
  name: 'constructor',
  initialState: {
    ingredients: [],
    bun: null,
  },
  reducers: {
    addIngredient: (state, action) => state.ingredients.push(action.payload),
    removeIngredient: (state, action) => {
      const index = state.ingredients.findIndex((ingredient) => ingredient._id = action.payload);
      state.ingredients.splice(index, 1);
    },
    addBun: (state, action) => {
      if ((state.bun === null) || (state.bun && state.bun._id !== action.payload._id)) {
        state.bun = action.payload;
      }
    },
    removeBun: (state) => {
      state.bun = null;
    }
  },
})

export const { addIngredient, removeIngredient, addBun, removeBun } = constructorSlice.actions;
export default constructorSlice.reducer;
