import { RootState } from "@/redux/store";
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

//const baseUrl = `https://e-com-server-seven.vercel.app/api/v1`;

const baseQuery = fetchBaseQuery({
  baseUrl: `https://e-com-server-seven.vercel.app/api/v1`,
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (
  args,
  api,
  extraOptions,
): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery(
      { url: "auth/refresh", method: "POST" },
      api,
      extraOptions,
    );
    if (refreshResult?.data) {
      console.log({ refreshResult });
      //const user = jwtDecode(refreshResult.data.accessToken);
      //api.dispatch(login({ user, token: refreshResult.data.accessToken }));
      //result = await baseQuery(args, api, extraOptions);
    } else {
      //api.dispatch(logout());
    }
  }
  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["User", "Product", "Category"],
});

export default baseApi;
