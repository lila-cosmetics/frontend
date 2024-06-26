import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };
/* This line defines the initial state for the cart. It checks if there is an existing cart stored in the browser's localStorage. If there is, it parses the JSON string into an object and uses it as the initial state.
If no cart is found in localStorage, it sets the initial state to an object with an empty cartSlice array. */

//helper function
const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  //current state of the cart , action:any data inside of payload
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      //calculating item price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      //calculating shipping price (if order is over 20€ then free, else 3€)
      state.shippingPrice = addDecimals(state.itemsPrice > 20 ? 0 : 3);

      //tax price (%15)
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice).toFixed(2))
      );

      //calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    },
  }, //any functions that have to do with the cart(add to cart/remove..)
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
