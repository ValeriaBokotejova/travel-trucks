import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperDetails } from "./operations";

const initialCampersState = {
  campersList: [],
  selectedCamper: {
    name: "",
    rating: 0,
    reviews: [],
    location: "",
    price: 0,
    gallery: [],
    description: "",
  },
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: initialCampersState,
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campersList =
          action.payload?.items.map((item) => ({
            ...item,
            id: Number(item.id),
            transmission: item.transmission === "true",
            kitchen: item.kitchen === "true",
            bathroom: item.bathroom === "true",
          })) || [];
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCamperDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(getCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
