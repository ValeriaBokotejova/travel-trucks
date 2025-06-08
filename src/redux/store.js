import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import campersReducer from "./campers/slice";
import filtersReducer from "./filters/slice";

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
