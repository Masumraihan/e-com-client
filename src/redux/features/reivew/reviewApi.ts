import baseApi from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleProductReview: builder.query({
      query: (productId) => ({
        url: `/review/get-product-reviews/${productId}`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: "/review/create-review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const { useGetSingleProductReviewQuery, useAddReviewMutation } = productApi;
