import baseApi from "@/redux/api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: "/order/create",
        method: "POST",
        body: data,
      }),
    }),
    paymentInit: build.mutation({
      query: ({ orderId }) => ({
        url: `/payment/payment-init/${orderId}`,
        method: "POST",
      }),
    }),
    getAllOrders: build.query({
      query: () => ({
        url: "/order/get-all-orders",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateOrderMutation, usePaymentInitMutation, useGetAllOrdersQuery } = cartApi;
