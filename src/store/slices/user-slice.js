import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {setCookie} from '../../utils/common';
import {ApiRoutes, BASE_URL} from '../../utils/constants';


export const registerUser = createAsyncThunk(
  'user/registerUser',
  async function ({name, password, email}, {rejectWithValue, dispatch}) {

    const user = {email, password, name};

    try {
      const response = await fetch(`${BASE_URL}${ApiRoutes.AUTH}${ApiRoutes.REGISTER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      if (!response.ok) {
        throw new Error('Server error, try again');
      }

      const data = await response.json();

      let authToken = data.accessToken.split('Bearer ')[1];
      response.headers.forEach(header => {
        if (header.indexOf('Bearer') === 0) {
          authToken = header.split('Bearer ')[1];
        }
      });
      if (authToken) {
        setCookie('token', authToken);
      }
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    error: null,
    success: false,
    email: null,
    name: null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
      state.isAuthenticated = false;
      state.name = null;
      state.email = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export default userSlice.reducer;
