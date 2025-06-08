import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperDetails } from "../../services/api";

export const getCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters, thunkApi) => {
    try {
      const response = await fetchCampers(filters);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCamperDetails = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkApi) => {
    try {
      const response = await fetchCamperDetails(id);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
