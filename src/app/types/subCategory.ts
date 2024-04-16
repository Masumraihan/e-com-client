export type TSubCategory = {
  _id: string;
  subCategory: string;
  isFeatured: boolean;
  category: {
    _id: string;
    category: string;
    user: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  icon: string;
  user: string;
  __v: number;
};
