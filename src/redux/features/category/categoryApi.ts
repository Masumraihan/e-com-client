import baseApi from "@/redux/api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/category/get-all-categories",
        method: "GET",
      }),
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category/create-category",
        method: "POST",
        body: data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/delete-category/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation, useDeleteCategoryMutation } =
  categoryApi;
