"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import RatingAndReviews from "./RatingAndReviews";
import FAQ from "./FAQ";
import { TProduct } from "@/app/types";

const DetailsTabs = ({ product }: { product: TProduct }) => {
  const [currentTab, setCurrentTab] = useState("product-details");

  return (
    <Tabs defaultValue='product-details' onValueChange={(value) => setCurrentTab(value)}>
      <TabsList className='grid grid-cols-3 gap-5'>
        <TabsTrigger
          //onClick={() => setCurrentTab("product-details")}
          value='product-details'
          className={`p-0 shadow-none rounded-none border-b-2 border-b-white ring-offset-0 py-1 text-lg md:text-xl font-bold focus-visible:ring-offset-0 ${
            currentTab === "product-details" ? "border-black" : ""
          }`}
        >
          <span className='hidden md:inline-block'>Product</span> Details
        </TabsTrigger>
        <TabsTrigger
          //onClick={() => setCurrentTab("rating")}
          value='rating'
          className={`p-0 shadow-none border-b-2 rounded-none ring-offset-0 border-b-white py-1 text-lg md:text-xl font-bold focus-visible:ring-offset-0 ${
            currentTab === "rating" ? "border-black" : ""
          }`}
        >
          <span className='hidden md:inline-block'>Rating & </span> Reviews
        </TabsTrigger>
        <TabsTrigger
          //onClick={() => setCurrentTab("faqs")}
          value='faqs'
          className={`p-0 border-b-white shadow-none border-b-2 rounded-none ring-offset-0 py-1 text-lg md:text-xl font-bold focus-visible:ring-offset-0 ${
            currentTab === "faqs" ? " border-black" : ""
          }`}
        >
          FAQs
        </TabsTrigger>
      </TabsList>
      <TabsContent className='mt-6' value='product-details'>
        <ProductDetails product={product} />
      </TabsContent>
      <TabsContent className='mt-6' value='rating'>
        <RatingAndReviews productId={product._id} />
      </TabsContent>
      <TabsContent className='mt-6' value='faqs'>
        <FAQ />
      </TabsContent>
    </Tabs>
  );
};

export default DetailsTabs;
