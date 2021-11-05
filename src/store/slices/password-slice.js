import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';


export const resetPassword = createAsyncThunk(
  'password/resetPassword',
  async function ({email}, {rejectWithValue, dispatch}) {
    try {
      const response = await api.resetPassword(email);

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


export const updatePassword = createAsyncThunk(
  'password/updatePassword',
  async function ({password, token}, {rejectWithValue, dispatch}) {
    try {

      const response = await api.updatePassword(password, token);

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

const passwordSlice = createSlice({
  name: 'password',
  initialState: {
    isLoading: false,
    error: null,
    success: false,
    passwordIsChanged: false,
    isEmailConfirmed: false,
  },
  reducers: {},
  extraReducers: {
    [resetPassword.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
      state.isEmailConfirmed = false;
    },
    [resetPassword.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      state.isEmailConfirmed = true;
    },
    [resetPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updatePassword.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.passwordIsChanged = false;
    },
    [updatePassword.fulfilled]: (state) => {
      state.isLoading = false;
      state.passwordIsChanged = true;
    },
    [updatePassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export default passwordSlice.reducer;
