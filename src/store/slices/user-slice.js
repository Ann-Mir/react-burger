import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getCookie, setCookie} from '../../utils/common';
import {ApiRoutes, BASE_URL} from '../../utils/constants';


export const registerUser = createAsyncThunk(
  'user/registerUser',
  async function (
    {name, password, email},
    {rejectWithValue, dispatch}) {

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
        setCookie('accessToken', authToken, {expires: 1200});
      }
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async function ({email, password},
  {rejectWithValue}) {

    const value = {email: email, password: password};
    try {
      const response = await fetch(`${BASE_URL}${ApiRoutes.AUTH}${ApiRoutes.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      })

      if (!response.ok) {
        throw new Error('Server error, try again');
      }
      const data = await response.json();

      const accessToken = data.accessToken.split('Bearer ')[1];
      const refreshToken = data.refreshToken;
      setCookie('accessToken', accessToken, {expires: 1200});
      setCookie('refreshToken', refreshToken);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  'user/refreshToken',
  async function(_,
                 {rejectWithValue}) {
    const refreshToken = getCookie('refreshToken');
    const value = {token: {refreshToken}};

    try {
      const response = await fetch(`${BASE_URL}${ApiRoutes.AUTH}${ApiRoutes.TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      })

      if (!response.ok) {
        throw new Error('Server error, try again');
      }
      const data = await response.json();

      const accessToken = data.accessToken.split('Bearer ')[1];
      setCookie('accessToken', accessToken, {expires: 1200});

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async function(_, {rejectWithValue}) {
    const refreshToken = getCookie('refreshToken');
    const value = {token: {refreshToken}};

    try {
      const response = await fetch(`${BASE_URL}${ApiRoutes.AUTH}${ApiRoutes.LOGOUT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      })

      if (!response.ok) {
        throw new Error('Server error, try again');
      }

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

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
    },
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
      state.isAuthenticated = false;
      state.name = null;
      state.email = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logout.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    [logout.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      state.name = null;
      state.email = null;
      state.isAuthenticated = false;
    },
    [logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
