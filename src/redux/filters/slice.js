import { createSlice } from "@reduxjs/toolkit";

const initialFiltersState = {
  features: [],
  form: "",
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFiltersState,
  reducers: {
    updateFilters(state, action) {
      const { form, location, features } = action.payload;
      state.form = form;
      state.location = location;
      state.features = features;
    },
  },
});

export const { updateFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
