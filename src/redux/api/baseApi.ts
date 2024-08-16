import { RootState } from "@/redux/store";
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { jwtDecode } from "jwt-decode";
import { TTokenUser, login, logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  //baseUrl: `https://e-com-server-seven.vercel.app/api/v1`,
  baseUrl: "http://localhost:8080/api/v1",
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
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const res = await fetch(`https://e-com-server-seven.vercel.app/api/v1/auth/refresh`, {
      credentials: "include",
    });

    const refreshData = await res.json();
    const accessToken = refreshData?.data?.accessToken;
    if (accessToken) {
      const user = jwtDecode(accessToken) as TTokenUser;
      api.dispatch(login({ user, token: accessToken }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["User", "Product", "Category", "Review"],
});

export default baseApi;
