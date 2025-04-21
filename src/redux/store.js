import { configureStore } from "@reduxjs/toolkit";

import { filterReducer } from "./filtersSlice";
import { contactReducer } from "./contactsSlice";
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

const persisConfig = {
  key: "contacts",
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persisConfig, contactReducer),
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
