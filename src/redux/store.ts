import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import baseApi from "./api/baseApi";
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
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import cartReducer from "./features/cart/cartSlice";

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();
const persistConfig = {
  key: "auth",
  storage,
};
const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const cartPersistReducer = persistReducer(cartPersistConfig, cartReducer);

const createStore = () =>
  configureStore({
    reducer: {
      auth: persistedReducer,
      [baseApi.reducerPath]: baseApi.reducer,
      cart: cartPersistReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware);
    },
  });

const store: EnhancedStore = createStore(); // Explicitly typing store

const persistor = persistStore(store);

// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export { store, persistor }; // Export both store and persistor

export default createStore; // Export the createStore function
