import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface IIngredientState {
  imageLarge: string;
  name: string;
  calories: number | string;
  proteins: number | string;
  fat: number | string;
  carbohydrates: number | string;
}

const initialState: IIngredientState = {
  imageLarge: '',
  name: '',
  calories: '',
  proteins: '',
  fat: '',
  carbohydrates: '',
};

const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState,
  reducers: {
    setIngredient: (state, action: PayloadAction<IIngredientState>) => {
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
