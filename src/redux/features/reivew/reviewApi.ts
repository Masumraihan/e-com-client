import baseApi from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleProductReview: builder.query({
      query: (productId) => ({
        url: `/review/get-product-reviews/${productId}`,
        method: "GET",
      }),
      providesTags:["Review"]
    }),
  }),
});

export const { useGetSingleProductReviewQuery } = productApi;
