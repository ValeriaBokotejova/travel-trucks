import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../services/api";

export const loadCampers = createAsyncThunk(
  "campers/loadCampers",
  async (filters) => {
    const campersResponse = await fetchCampers(filters);
    return campersResponse.items;
  }
);

const camperSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(loadCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default camperSlice.reducer;
