import {
  API_RESPONSE_ERROR,
  API_RESPONSE_SUCCESS,
  FORGOT_PASSWORD,
  LOGIN_USER, LOGOUT_USER,
  RESET, SIGNUP_USER
} from "./actionTypes";

// common success
export const authApiResponseSuccess = (actionType, data) => ({
  type: API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const authApiResponseError = (actionType, error) => ({
  type: API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  payload: { email, password },
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: {},
});

export const registerUser = (email, name, password, confirmPassword) => ({
  type: SIGNUP_USER,
  payload: { email, name, password, confirmPassword },
});

export const forgotPassword = (email) => ({
  type: FORGOT_PASSWORD,
  payload: { email },
});

export const resetAuth = () => ({
  type: RESET,
  payload: {},
});

