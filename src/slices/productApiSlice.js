// productApiSlice.js
import { apiSlice } from "./apiSclice"; // Ensure correct relative path
import { PRODUCTS_URL } from "../api/apiConstants";

// Injecting endpoints into the apiSlice
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `${PRODUCTS_URL}/getAllProducts`,
      providesTags: ["Product"],
    }),
    
    getProductDetails: builder.query({
      query: (productId) => `${PRODUCTS_URL}/${productId}`,
      providesTags: ["Product"],
    }),
    keepUnusedDataFor: 5,
  }),
  overrideExisting: false, // Prevent overwriting existing definitions
});

console.log(productApiSlice);

// Export the generated hook
export const { useGetProductsQuery } = productApiSlice;
export const {useGetProductDetailsQuery}= productApiSlice

/* import { PRODUCTS_URL } from "../api/apiConstants";
import { apiSlice } from "./apiSclice";


//fetching data with redux toolkit instead of axios or fetch
export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
           query:()=> ({
            url:PRODUCTS_URL,
           }),
           keepUnusedDataFor:5,
        })
    }),
});

export  const { useGetProductsQuery } = productsApiSlice;
// this is the convention useGet + name of the query + Query */
