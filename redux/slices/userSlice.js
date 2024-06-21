import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUserDetails: (state, action) => {
      state.userDetails = action.payload
    },
    deleteUserDetails: (state) => {
      state.userDetails = null
    },

  },
});

// Action creators are generated for each case reducer function
export const { createUserDetails, deleteUserDetails } = userSlice.actions;

export default userSlice.reducer;
