/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer, { RootState } from "./reducers/index";

// const initialState = {};

// const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  // middleware: [thunk],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type AppDispatch = typeof store.dispatch;
