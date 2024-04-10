import baseApi from "@/redux/api/baseApi";
import { TQuery } from "@/types";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (query: TQuery) => {
        console.log(query);
        return {
          url: "/user/get-all-users",
          method: "GET",
        };
      },
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
  }),
});

export const { useGetAllUsersQuery, useUpdateUserMutation } = userApi;
