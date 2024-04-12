import baseApi from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleProduct: builder.query({
      query: (id) => ({
        url: "/product/get-single-product/" + id,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: "/product/update-product/" + data.id,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: "/product/delete-product/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useGetSingleProductQuery, useUpdateProductMutation, useDeleteProductMutation } =
  productApi;