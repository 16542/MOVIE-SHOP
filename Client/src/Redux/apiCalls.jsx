import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";
import { publicRequest } from "../requestMethode";
import { loginRoute, RegisterRoute, LogoutRoute } from "../Utils/APIRoutes";
// try to login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(loginRoute, user);
    dispatch(loginSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(loginFailure());
  }
};

// Create a new user
export const newUser = async (dispatch, user) => {
  console.log(user)
  dispatch(registerStart());
  try {
    const res = await publicRequest.post(RegisterRoute, user);
    console.log(res)
    dispatch(registerSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(registerFailure());
    console.log(err);
  }
};


// todo: Try to logout ;

// export const logout = async (dispatch, user) => {
//   dispatch(loginStart());
//   try {
//     const res = await publicRequest.post(LogoutRoute, user);
//     dispatch(loginSuccess(res.data));
//     console.log(res.data);
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };
