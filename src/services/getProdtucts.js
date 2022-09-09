import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let url = new URL("https://api.punkapi.com/v2/beers?page=2&per_page=6");

export const getOurProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);

let urls = new URL("https://api.punkapi.com/v2/beers");

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(urls);

      return response.data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
