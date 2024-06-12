import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./slices/pageSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "mlsa",
  storage: storage,
  whitelist: ["page"],
};

const persistedReducer = persistReducer(persistConfig, pageReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>