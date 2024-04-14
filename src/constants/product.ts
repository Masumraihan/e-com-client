export const ProductFilterItems = [
  {
    label: "All",
    value: "",
  },
  {
    label: "In Stock",
    value: "status:in stock",
  },
  {
    label: "Out of Stock",
    value: "status:out of stock",
  },
];

export const ProductSortingItems = [
  {
    label: "Newest",
    value: "sortBy:-createdAt",
  },
  {
    label: "Oldest",
    value: "sortBy:createdAt",
  },
  {
    label: "Lowest Price",
    value: "sortBy:price",
  },
  {
    label: "Highest Price",
    value: "sortBy:-price",
  },
  {
    label: "Title",
    value: "sortBy:title",
  },
  {
    label: "Discount",
    value: "sortBy:discount",
  },
];
