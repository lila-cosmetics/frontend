
import { apiSlice } from "./apiSclice"; 
import { USERS_URL } from "../api/apiConstants";

//this file is responsible for making api calls related to user actions such as
//login, logout and register but it does not store the userInfo directly

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register:builder.mutation({
      query:(data)=>({
        url: `${USERS_URL}/register`,
        method:'POST',
        body:data
      })
    })
    ,
    logout: builder.mutation({
      query:()=>({
        url:`${USERS_URL}/logout`,
        method:'POST'
      })
    })


  }),
 
});

console.log(usersApiSlice);


export const { useLoginMutation, useLogoutMutation, useRegisterMutation} = usersApiSlice;



