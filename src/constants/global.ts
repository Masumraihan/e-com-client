export const userRole = {
  customer: "customer",
  admin: "admin",
  superAdmin: "superAdmin",
} as const;

export const discounts = [
  {
    name: "10%",
    value: "10",
  },
  {
    name: "20%",
    value: "20",
  },
  {
    name: "30%",
    value: "30",
  },
  {
    name: "40%",
    value: "40",
  },
  {
    name: "50%",
    value: "50",
  },
  {
    name: "60%",
    value: "60",
  },
  {
    name: "70%",
    value: "70",
  },
  {
    name: "80%",
    value: "80",
  },
  {
    name: "90%",
    value: "90",
  },
  {
    name: "100%",
    value: "100",
  },
  {
    name: "No Discount",
    value: "0",
  },
];

export const productStatus = {
  inStock: "in stock",
  outOfStock: "out of stock",
} as const;
