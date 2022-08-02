import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  colors: {
    header: string;
    main: string;
    footer: string;
  };
  darkMode: boolean;
}

const initialState: ThemeState = {
  colors: {
    header: "#ebfbff",
    main: "#fff",
    footer: "#003333",
  },
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme(state: Draft<typeof initialState>, action: PayloadAction<typeof initialState>) {
      const { colors, darkMode } = action.payload;
      const { header, main, footer } = colors;

      state.colors.header = header;
      state.colors.main = main;
      state.colors.footer = footer;
      state.darkMode = darkMode;
    },
  },
});

// Export all actions
export const { setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
