import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    success: false,
    successLog :false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      console.log(action)
      state.isFetching = false;
      state.currentUser = action.payload;
      state.successLog = true
      // toast.success("Login successfully", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
      toast.error("Login failed", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      console.log(state, action);
      state.isFetching = false;
      state.currentUser = action.payload;
      state.success = true;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;
export default userSlice.reducer;
