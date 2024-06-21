import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarDrawer: {
    isOpen: false,
  },
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    openSideDrawer: (state) => {
      // state = { ...state, sidebarDrawer: {isOpen: true}  };
      state.sidebarDrawer = { isOpen: true };
    },
    closeSideDrawer: (state) => {
      // state = { ...state, sidebarDrawer: {isOpen: false}  };
      state.sidebarDrawer = { isOpen: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSideDrawer, closeSideDrawer } = layoutSlice.actions;

export default layoutSlice.reducer;
