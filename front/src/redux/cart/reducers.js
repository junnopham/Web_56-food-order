import {
  ADD_CART,
  DECREASE_QUANTITY,
  DELETE_CART,
  GET_NUMBER_CART,
  INCREASE_QUANTITY,
} from "./actionTypes";

const initProduct = {
  numberCart: 0,
  carts: [],
};

const Cart = (state = initProduct, action) => {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          price: action.payload.price,
        };
        state.carts.push(cart);
      } else {
        let check = false;
        state.carts.map((item, key) => {
          if (item.id === action.payload.id) {
            state.carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.carts[action.payload].quantity++;

      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.carts[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case DELETE_CART:
      let quantity_ = state.carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        carts: state.carts.filter((item) => {
          return item.id !== state.carts[action.payload].id;
        }),
      };
    default:
      return state;
  }
};

export default Cart;
