import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_APP_URL;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "7f02819f-8254-410a-b8af-ab98572bd26b",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
