import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {deleteCookie, setCookie, setSession} from '../../utils/common';
import api from '../../services/api';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async function (
    {name, password, email},
    {rejectWithValue, dispatch}) {

    const user = {email, password, name};

    try {
      const response = await api.registerUser(user);

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
  async ({email, password},
  {rejectWithValue}) => {

    try {
      const response = await api.login(email, password);

      if (!response.ok) {
        throw new Error('Server error, try again');
      }

      const data = await response.json();
      setSession(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const logout = createAsyncThunk(
  'user/logout',
  async function(_, {rejectWithValue}) {

    try {
      const response = await api.logout()

      if (!response.ok) {
        throw new Error('Server error, try again');
      }

      deleteCookie('accessToken');
      deleteCookie('refreshToken');

    } catch (error) {
      // throw new Error(error);
      return rejectWithValue(error.message);
    }
  }
)

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async function(
    {email, name, password},
    {rejectWithValue}) {

    try {
      let response = await api.updateUserInfo(name, email, password);
      if (response.status === 403) {
        const tokenResponse = await api.refreshToken();

        if (!tokenResponse.ok) {
          throw new Error(tokenResponse.status);
        }

        const tokenData = await tokenResponse.json();
        setSession(tokenData);

        response = await api.updateUserInfo(name, email, password);
      }

      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      return data;;
    }

    catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const getUserData = createAsyncThunk(
  'user/getData',
  async function(_,
    {rejectWithValue}) {
    try {
      let response = await api.getUserInfo();

      if (response.status === 403) {
        const tokenResponse = await api.refreshToken();

        if (!tokenResponse.ok) {
          throw new Error(tokenResponse.status);
        }

        const tokenData = await tokenResponse.json();
        setSession(tokenData);

        response = await api.getUserInfo();
      }

      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();

      return data;
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
    email: '',
    name: '',
    isAuthenticated: false,
    message: null,
  },
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
      state.isAuthenticated = false;
      state.name = '';
      state.email = '';
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
      state.name = '';
      state.email = '';
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
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
      state.name = '';
      state.email = '';
      state.isAuthenticated = false;
    },
    [logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateProfile.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
    },
    [updateProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getUserData.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.isAuthenticated = true;
    },
    [getUserData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
  },
});

export default userSlice.reducer;
