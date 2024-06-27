import { createSlice } from "@reduxjs/toolkit";



const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartSlice:[]}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{}   //any functions that have to do with the cart(add to cart/remove..)
})

export default cartSlice.reducer