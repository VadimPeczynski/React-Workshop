import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./reducers/heroReducer";

export default function configureAppStore(initialState) {
  return configureStore({
    reducer: { heroes: heroReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: initialState,
  });
}
