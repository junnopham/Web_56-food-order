import { combineReducers } from "redux";

import Auth from "./auth/reducers";
import Cart from "./cart/reducers";

const reducers = combineReducers({
  Auth,
  Cart,
});

export default reducers;
