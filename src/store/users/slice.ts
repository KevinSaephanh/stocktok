import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

export interface UserState {
  user: User | null;
  token?: {};
  error: any;
}

const initialState: UserState = {
  user: null,
  token: {},
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.user>
    ) => {
      state.user = action.payload;
    },
  },
});

// Export state
export const getUserState = (state: { user: UserState }) => state.user;

// Export all actions
export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;
