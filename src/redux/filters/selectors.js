import { createSelector } from "reselect";

export const getFiltersState = (state) => state.filters;

export const getLocationFilter = (state) => state.filters.location;
export const getFormFilter = (state) => state.filters.form;
export const getFeaturesFilter = (state) => state.filters.features;

export const getFiltersParams = createSelector(
  [getLocationFilter, getFormFilter, getFeaturesFilter],
  (location, form, features) => ({
    location: location || "",
    form: form || "",
    features: Array.isArray(features) ? features : [],
  })
);