import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
import themeReducer from "./theme/slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
