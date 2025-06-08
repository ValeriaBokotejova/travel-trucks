import { createSelector } from "reselect";
import {
  getLocationFilter,
  getFormFilter,
  getFeaturesFilter,
} from "../filters/selectors";

export const getCampersState = (state) => state.campers;

export const getCampersList = (state) => state.campers.campersList;
export const getSelectedCamper = (state) => state.campers.selectedCamper;
export const isLoading = (state) => state.campers.loading;
export const getError = (state) => state.campers.error;

export const getFilteredCampers = createSelector(
  [getCampersList, getLocationFilter, getFormFilter, getFeaturesFilter],
  (campersList, location, form, features) => {
    return campersList.filter((camper) => {
      const locationMatch = location
        ? camper.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const formMatch = form ? camper.form === form : true;
      const featuresMatch =
        Array.isArray(features) && features.length
          ? features.every((feature) => camper[feature] === true)
          : true;

      return locationMatch && formMatch && featuresMatch;
    });
  }
);
