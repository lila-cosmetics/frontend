
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { BASE_URL } from "../api/apiConstants";


export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}), 
});
