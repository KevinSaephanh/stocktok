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

const userSlice = createSlice({
  name: "user",
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

// Export all actions
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
