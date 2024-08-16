import { TProduct } from "./product";

export type TOrder = {
  _id: string;
  email: string;
  address: string;
  products: Product[];
  paymentStatus: string;
  status: string;
  transactionId: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
}

export type Product = {
  product: TProduct;
  quantity: number;
  _id: string;
}
