import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperDetails } from "./operations";

const toBool = (v) => v === true || v === "true";

const normalizeCamper = (item) => ({
  ...item,
  id: Number(item.id),
  transmission:
    item.transmission === true ||
    item.transmission === "true" ||
    item.transmission === "automatic",
  AC: toBool(item.AC),
  kitchen: toBool(item.kitchen),
  bathroom: toBool(item.bathroom),
  TV: toBool(item.TV),
  radio: toBool(item.radio),
  refrigerator: toBool(item.refrigerator),
  microwave: toBool(item.microwave),
  gas: toBool(item.gas),
  water: toBool(item.water),
});

const initialCampersState = {
  campersList: [],
  selectedCamper: null,
  loading: false,
  error: null,
  page: 1,
  limit: 4,
  total: 0,
  hasMore: true,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: initialCampersState,
  reducers: {
    resetCampers(state) {
      state.campersList = [];
      state.page = 1;
      state.total = 0;
      state.hasMore = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // -------- campers list --------
      .addCase(getCampers.pending, (state, action) => {
        state.loading = true;
        state.error = null;

        const append = action.meta.arg?.append;
        if (!append) {
          state.campersList = [];
          state.page = 1;
          state.total = 0;
          state.hasMore = true;
        }
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;

        const append = action.meta.arg?.append;
        const limit = action.meta.arg?.limit ?? state.limit;

        const raw = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.items || [];

        const normalized = raw.map(normalizeCamper);

        state.campersList = append
          ? [...state.campersList, ...normalized]
          : normalized;

        state.total = state.campersList.length;
        state.hasMore = normalized.length === limit;

        if (append) {
          state.page = state.page + 1;
        }
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // -------- camper details --------
      .addCase(getCamperDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload
          ? normalizeCamper(action.payload)
          : null;
      })
      .addCase(getCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
