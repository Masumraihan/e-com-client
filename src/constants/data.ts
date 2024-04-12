import { NavItem } from "@/types";

export type TUser = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export type TPayment = {
  id: string;
  transaction: string;
  delivered: boolean;
  userEmail: string;
};

export const users: TUser[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export const payments: TPayment[] = [
  {
    id: "1",
    transaction: "TRX001",
    delivered: true,
    userEmail: "user1@example.com",
  },
  {
    id: "2",
    transaction: "TRX002",
    delivered: false,
    userEmail: "user2@example.com",
  },
  {
    id: "3",
    transaction: "TRX003",
    delivered: true,
    userEmail: "user3@example.com",
  },
  {
    id: "4",
    transaction: "TRX004",
    delivered: true,
    userEmail: "user4@example.com",
  },
  {
    id: "5",
    transaction: "TRX005",
    delivered: false,
    userEmail: "user5@example.com",
  },
  {
    id: "6",
    transaction: "TRX006",
    delivered: true,
    userEmail: "user6@example.com",
  },
  {
    id: "7",
    transaction: "TRX007",
    delivered: false,
    userEmail: "user7@example.com",
  },
  {
    id: "8",
    transaction: "TRX008",
    delivered: true,
    userEmail: "user8@example.com",
  },
  {
    id: "9",
    transaction: "TRX009",
    delivered: true,
    userEmail: "user9@example.com",
  },
  {
    id: "10",
    transaction: "TRX010",
    delivered: false,
    userEmail: "user10@example.com",
  },
  {
    id: "11",
    transaction: "TRX011",
    delivered: true,
    userEmail: "user11@example.com",
  },
  {
    id: "12",
    transaction: "TRX012",
    delivered: false,
    userEmail: "user12@example.com",
  },
  {
    id: "13",
    transaction: "TRX013",
    delivered: true,
    userEmail: "user13@example.com",
  },
  {
    id: "14",
    transaction: "TRX014",
    delivered: true,
    userEmail: "user14@example.com",
  },
  {
    id: "15",
    transaction: "TRX015",
    delivered: false,
    userEmail: "user15@example.com",
  },
  {
    id: "16",
    transaction: "TRX016",
    delivered: true,
    userEmail: "user16@example.com",
  },
  {
    id: "17",
    transaction: "TRX017",
    delivered: false,
    userEmail: "user17@example.com",
  },
  {
    id: "18",
    transaction: "TRX018",
    delivered: true,
    userEmail: "user18@example.com",
  },
  {
    id: "19",
    transaction: "TRX019",
    delivered: true,
    userEmail: "user19@example.com",
  },
  {
    id: "20",
    transaction: "TRX020",
    delivered: false,
    userEmail: "user20@example.com",
  },
];

//console.log(payments);

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Category",
    href: "/dashboard/category",
    icon: "category",
    label: "category",
  },
  {
    title: "User",
    href: "/dashboard/user",
    icon: "user",
    label: "user",
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: "order",
    label: "order",
  },
  {
    title: "Payment History",
    href: "/dashboard/payment",
    icon: "payment",
    label: "payment",
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: "product",
    label: "product",
  },
  {
    title: "Logout",
    href: "/signin",
    icon: "login",
    label: "Logout",
  },
];
