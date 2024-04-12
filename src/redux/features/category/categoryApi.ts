import baseApi from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category/create-category",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateCategoryMutation } = productApi;
