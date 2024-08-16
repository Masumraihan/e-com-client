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
  }),
});

export const { useCreateOrderMutation, usePaymentInitMutation } = cartApi;
