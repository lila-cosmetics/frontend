import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress:{}, paymentMethod:'paypal' }; //by default is paypal
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
    //any functions that have to do with the cart(add to cart/remove..)
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
      return updateCart(state)
      
    },
    removeFromCart:(state, action)=>{ 
     
      //the id that we are passing to this removeFromCart function is in action's payload
      state.cartItems = state.cartItems.filter((x)=> x._id !== action.payload) 
      //we return all the cart items that don't equal the one we want to delete
    return updateCart(state)

    },
    clearCart:(state)=>{
      state.cartItems=[]
    },

    saveShippingAddress: (state, action)=>{
      state.shippingAddress = action.payload
      return updateCart(state)
    }

  }, 
});

export const { addToCart, removeFromCart, clearCart, saveShippingAddress } = cartSlice.actions;
export default cartSlice.reducer;
