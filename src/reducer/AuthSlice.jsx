import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userLogin: false,
  userData: null,
  userSignStart: false,
  userSignFail: false,
  error: null,
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoginStart: (state) => {
      state.userSignStart = true;
    },
    userLoginSuccess: (state, action) => {
      state.userSignStart = false;
      state.userLogin = true;
      state.userData = action.payload;
    },
    userLoginFailure: (state, action) => {
      state.userSignFail = true;
      state.error = action.payload;
    },
  },
});
export const { userLoginStart, userLoginSuccess, userLoginFailure } =
  AuthSlice.actions;
export default AuthSlice.reducer;
