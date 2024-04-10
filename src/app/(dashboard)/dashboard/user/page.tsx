import StoreProvider from "@/app/StoreProvider";
import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/users/client";
import { users } from "@/constants/data";
const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "User", link: "/dashboard/user" },
];

export default function page() {
  return (
    <>
      <div className='flex-1 px-4 mt-6 space-y-4 md:px-8'>
        <>
          <BreadCrumb items={breadcrumbItems} />
        </>
        <UserClient />
      </div>
    </>
  );
}
