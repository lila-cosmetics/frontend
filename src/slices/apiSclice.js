import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

//the root api slice
//fetchBaseQuery is a function allows us to make req to backend api

import { BASE_URL } from "../api/api";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product", "Order", "User"], //the types of data we are fetching from our api
  endpoints: (builder) => ({}),
});
