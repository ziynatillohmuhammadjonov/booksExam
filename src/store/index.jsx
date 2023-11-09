import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../reducer/AuthSlice";
export default configureStore({
  reducer: { auth: AuthSlice },
  devTools: process.env.NODE_ENV !== "production",
});
