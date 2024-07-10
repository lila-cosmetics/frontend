
import { apiSlice } from "./apiSclice"; 
import { USERS_URL } from "../api/apiConstants";


export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),


  }),
 
});

console.log(usersApiSlice);


export const { useLoginMutation} = usersApiSlice;



