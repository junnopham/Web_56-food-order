import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  registerService,
  loginService,
  logoutService,
  forgetPasswordService,
} from "../../services/authenticationService";
import { authApiResponseError, authApiResponseSuccess } from "./actions";
import {
  FORGOT_PASSWORD,
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
} from "./actionTypes";

function* register({ payload: { email, name, password, confirmPassword } }) {
  try {
    const response = yield call(registerService, {
      email,
      name,
      password,
      confirmPassword,
    });
    const user = response.data;
    yield put(authApiResponseSuccess(SIGNUP_USER, user));
  } catch (error) {
    yield put(authApiResponseError(SIGNUP_USER, error.response.data.message));
  }
}

function* login({ payload: { email, password }, type }) {
  try {
    const response = yield call(loginService, { email, password });
    const user = response.data;
    yield put(authApiResponseSuccess(LOGIN_USER, user));
  } catch (error) {
    yield put(authApiResponseError(LOGIN_USER, error.response.data.message));
  }
}

function* logout() {
  try {
    yield call(logoutService);
    yield put(authApiResponseSuccess(LOGOUT_USER, {}));
  } catch (error) {
    yield put(authApiResponseError(LOGOUT_USER, error));
  }
}

function* forgotPassword({ payload: { email } }) {
  try {
    const response = yield call(forgetPasswordService, { email });
    yield put(authApiResponseSuccess(FORGOT_PASSWORD, response.data));
  } catch (error) {
    yield put(authApiResponseError(FORGOT_PASSWORD, error));
  }
}

export function* watchSignup() {
  yield takeEvery(SIGNUP_USER, register);
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, login);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT_USER, logout);
}

export function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

export default function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogout),
    fork(watchSignup),
    fork(watchForgotPassword),
  ]);
}
