import baseApi from "@/redux/api/baseApi";

const subCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSubCategory: builder.mutation({
      query: (data) => ({
        url: "/sub-category/create-sub-category",
        method: "POST",
        body: data,
      }),
    }),
    deleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `/sub-category/delete-sub-category/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useCreateSubCategoryMutation, useDeleteSubCategoryMutation } = subCategoryApi;
