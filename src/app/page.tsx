import Arrivals from "@/components/homepage-components/Arrivals";
import Banner from "@/components/homepage-components/Banner";
import Brands from "@/components/homepage-components/Brands";
import Categories from "@/components/homepage-components/Categories";
import DressStyle from "@/components/homepage-components/DressStyle";
import NewCollections from "@/components/homepage-components/NewCollections";
import Reviews from "@/components/homepage-components/Reviews";
import TopCollections from "@/components/homepage-components/TopCollections";

const Home = () => {
  return (
    <main className='relative space-y-10 lg:space-y-20'>
      <Banner />
      {/*<Categories />*/}
      <Arrivals />
      <NewCollections />
      <TopCollections />
      <DressStyle />
      <Reviews />
    </main>
  );
};

export default Home;
