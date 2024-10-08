import Arrivals from "@/components/homepage-components/Arrivals";
import Banner from "@/components/homepage-components/Banner";
import SubCategories from "@/components/homepage-components/SubCategories";
import Categories from "@/components/homepage-components/Categories";
import DressStyle from "@/components/homepage-components/DressStyle";
import TopSales from "@/components/homepage-components/TopSales";
import Reviews from "@/components/homepage-components/Reviews";
import TopCollections from "@/components/homepage-components/TopCollections";
import OurServiceArea from "@/components/homepage-components/OurServiceArea";

const Home = () => {
  return (
    <main className='relative space-y-10 lg:space-y-20 mt-[50px] md:mt-[80px]'>
      <Banner />
      {/*<Categories />*/}
      <Arrivals />
      {/*<TopSales />*/}
      <TopCollections />
      <DressStyle />
      <Reviews />
      <OurServiceArea/>
    </main>
  );
};

export default Home;
