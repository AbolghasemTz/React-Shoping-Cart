import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiCfg } from './../utils/constants/api.constants';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (reqCfg, { rejectWithValue }) => {
    try {
      const url = new URL(apiCfg.baseURL);

      Object.entries(reqCfg).forEach(entry => {
        url.searchParams.set(entry[0], entry[1]);
      });
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
