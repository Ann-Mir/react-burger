import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {ApiRoutes, BASE_URL} from '../../utils/constants';


export const resetPassword = createAsyncThunk(
  'password/resetPassword',
  async function ({email}, {rejectWithValue, dispatch}) {
    try {
      const value = {
        email: email,
      };

      const response = await fetch(`${BASE_URL}${ApiRoutes.PASSWORD_RESET}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      });

      if (!response.ok) {
        throw new Error('Server error, try again');
      }

      const data = await response.json();
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState: {
    isLoading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [resetPassword.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    [resetPassword.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
    },
    [resetPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export default forgotPasswordSlice.reducer;
