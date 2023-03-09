import { createAsyncThunk } from '@reduxjs/toolkit';

import * as authApi from 'services/authApi';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await authApi.signup(data);
      console.log('signup operation');
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await authApi.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
