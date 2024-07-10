import { createSlice } from "@reduxjs/toolkit";



//if the user info is exist get that otherwise null
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials: (state, action)=>{
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        }
    }
})


export const{setCredentials} = authSlice.actions

export default authSlice.reducer
