export type TKeyword = {
  value: string;
  isDelete: boolean;
};

export type TProduct = {
  _id: string;
  title: string;
  description: string;
  price: number;
  subCategory: string;
  images: string[];
  quantity: number;
  discount: number;
  status: "in stock" | "out of stock";
  user: string;
  size?: string;
  color?: string;
  keywords?: TKeyword[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};
