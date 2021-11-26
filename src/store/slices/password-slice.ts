import {createSlice, createAsyncThunk, SerializedError} from '@reduxjs/toolkit';
import api from '../../services/api';


interface IPasswordState {
  isLoading: boolean;
  error: SerializedError | null;
  success: boolean;
  passwordIsChanged: boolean;
  isEmailConfirmed: boolean;
}

const initialState: IPasswordState = {
  isLoading: false,
  error: null,
  success: false,
  passwordIsChanged: false,
  isEmailConfirmed: false,
};

export const resetPassword = createAsyncThunk(
  'password/resetPassword',
  async function (email: string, {rejectWithValue, dispatch}) {
    try {
      const response = await api.resetPassword(email);

      if (!response.ok) {
        throw new Error('Server error, try again');
      }

      const data = await response.json();
      return data;

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


export const updatePassword = createAsyncThunk(
  'password/updatePassword',
  async function ({password, token}: {password: string, token: string}, {rejectWithValue, dispatch}) {
    try {

      const response = await api.updatePassword(password, token);

      if (!response.ok) {
        throw new Error('Server error, try again');
      }

      const data = await response.json();
      return data;

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
        state.isEmailConfirmed = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.isEmailConfirmed = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as SerializedError;
      })
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.passwordIsChanged = false;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.passwordIsChanged = true;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as SerializedError;
      })
  },
});

export default passwordSlice.reducer;
