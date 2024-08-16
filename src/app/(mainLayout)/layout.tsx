import Footer from "@/components/shared/Footer/footer";
import Navbar from "@/components/shared/Navbar/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className='fixed top-0 z-40 w-full'>
        <div className='fixed top-0 z-40 w-full bg-white dark:bg-darkSecondary'>
          <Navbar />
        </div>
      </nav>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
