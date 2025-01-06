import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null, 
};

const userSlice = createSlice({
  name: "user", 
  initialState, 
  reducers: {
    signInSuccessfull: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutSuccessful: (state) => {
      state.currentUser = null; 
    },
  },
});

export const { signInSuccessfull, logoutSuccessful } = userSlice.actions;
export default userSlice.reducer;
