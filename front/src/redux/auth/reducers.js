import {
  API_RESPONSE_ERROR,
  API_RESPONSE_SUCCESS,
  FORGOT_PASSWORD,
  LOGIN_USER,
  LOGOUT_USER,
  RESET,
  SIGNUP_USER,
} from "./actionTypes";

const INIT_STATE = {
  user: null,
  loading: false,
};

const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case LOGIN_USER: {
          return {
            ...state,
            user: action.payload.data,
            userLoggedIn: true,
            loading: false,
          };
        }
        case SIGNUP_USER: {
          return {
            ...state,
            loading: false,
            userSignUp: true,
          };
        }
        case LOGOUT_USER: {
          return {
            ...state,
            user: null,
            loading: false,
            userLogout: true,
            userLoggedIn: false,
          };
        }
        case FORGOT_PASSWORD: {
          return {
            ...state,
            resetPasswordSuccess: action.payload.data,
            loading: false,
            passwordReset: true,
          };
        }
        default:
          return { ...state };
      }

    case API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case LOGIN_USER: {
          return {
            ...state,
            error: action.payload.error,
            userLoggedIn: false,
            loading: false,
          };
        }
        case SIGNUP_USER: {
          return {
            ...state,
            error: action.payload.error,
            userSignUp: false,
            loading: false,
          };
        }
        case FORGOT_PASSWORD: {
          return {
            ...state,
            error: action.payload.error,
            loading: false,
            passwordReset: false,
          };
        }
        default:
          return { ...state };
      }

    case LOGIN_USER:
      return { ...state, loading: true, userLoggedIn: false };
    case LOGOUT_USER:
      return { ...state, loading: true, userLogout: false };
    case RESET:
      return {
        ...state,
        loading: false,
        error: false,
        userSignUp: false,
        userLoggedIn: false,
        passwordReset: false,
        passwordChange: false,
        resetPasswordSuccess: null,
      };
    default:
      return { ...state };
  }
};

export default Auth;
