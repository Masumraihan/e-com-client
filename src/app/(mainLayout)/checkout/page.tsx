import BreadCrumb from "@/components/breadcrumb";

const CheckoutPage = () => {
  const breadcrumb = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Checkout",
      link: "/checkout",
    },
  ];
  return (
    <div className='mt-10 md:mt-[80px] container space-y-5'>
      <div className='flex items-center justify-between'>
        <BreadCrumb items={breadcrumb} />
      </div>
    </div>
  );
};

export default CheckoutPage;
