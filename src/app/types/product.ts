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

// {
//    _id: string;
//    title: string;
//    description: string;
//    price: number;
//    subCategory: string;
//    images: string[];
//    quantity: number;
//    discount: number;
//    status: 'in stock' | 'out of stock' | 'backordered'; // Assuming status can only be one of these values
//    user: string;
//    keywords: { [key: string]: any }[]; // Assuming keywords can be of any shape
//    isDeleted: boolean;
//    createdAt: string; // Assuming createdAt and updatedAt are ISO 8601 formatted strings
//    updatedAt: string;
//};
