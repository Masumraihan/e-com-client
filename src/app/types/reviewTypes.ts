import { TProduct } from "./product";
import { TResponseUser } from "./userTypes";

export type TReview = {
  _id: string;
  user: TResponseUser;
  product: TProduct;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
