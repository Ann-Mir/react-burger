import { createSlice } from '@reduxjs/toolkit';


const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState: {
    imageLarge: '',
    name: '',
    calories: '',
    proteins: '',
    fat: '',
    carbohydrates: '',
  },
  reducers: {
    setIngredient: (state, action) => {
      state.imageLarge = action.payload.imageLarge;
      state.name = action.payload.name;
      state.calories = action.payload.calories;
      state.proteins = action.payload.proteins;
      state.fat = action.payload.fat;
      state.carbohydrates = action.payload.carbohydrates;
    },
    removeIngredient: (state) => {
      state.imageLarge = '';
      state.name = '';
      state.calories = '';
      state.proteins = '';
      state.fat = '';
      state.carbohydrates = '';
    }
  }
});


export const {setIngredient, removeIngredient} = ingredientSlice.actions;
export default ingredientSlice.reducer;
