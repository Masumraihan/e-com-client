import baseApi from "@/redux/api/baseApi";
import { TQuery } from "@/types";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (query: TQuery) => {
        const params = new URLSearchParams();
        if (query && query.length > 0) {
          for (const key of query) {
            if (key.value) {
              params.append(key.name, key.value);
            }
          }
        }
        return {
          url: "/user/get-all-users",
          method: "GET",
          params,
        };
      },
      providesTags: ["User"],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: "/user/get-user/" + id,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "/user/update-user/" + data.id,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: "/user/delete-user/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
