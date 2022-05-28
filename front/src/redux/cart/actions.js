import {
  ADD_CART,
  DECREASE_QUANTITY,
  DELETE_CART,
  GET_NUMBER_CART,
  INCREASE_QUANTITY,
  UPDATE_CART,
} from "./actionTypes";

/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: GET_NUMBER_CART,
  };
}

export function AddCart(payload) {
  return {
    type: ADD_CART,
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: UPDATE_CART,
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: DELETE_CART,
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: INCREASE_QUANTITY,
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
}
