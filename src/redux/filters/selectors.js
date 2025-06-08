import { createSelector } from "reselect";

export const selectItems = (state) => state.campers.campersList || [];

export const getFiltersState = (state) => state.filters || [];

export const getLocationFilter = (state) => state.filters.location;
export const getFormFilter = (state) => state.filters.form;
export const getFeaturesFilter = (state) => state.filters.features;

export const getFilteredItems = createSelector(
  [getFiltersState, getLocationFilter, getFormFilter, getFeaturesFilter],
  (items, location, form, features) => {
    if (!Array.isArray(items)) {
      return [];
    }

    return items.filter((item) => {
      const locationMatch = location
        ? item.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const formMatch = form ? item.form === form : true;
      const featuresMatch = features.length
        ? features.every((feature) => item[feature] === true)
        : true;

      return locationMatch && formMatch && featuresMatch;
    });
  }
);
