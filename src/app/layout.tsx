import ThemeProvider from "@/components/layout/ThemeToggle/theme-provider";
import Footer from "@/components/shared/Footer/footer";
import Navbar from "@/components/shared/Navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import "@smastrom/react-rating/style.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "E Com",
  description: "This is a e-commerce application",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={poppins.className}>
          <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
            <Toaster duration={3000} />
            <nav className='fixed top-0 z-40 w-full'>
              <div className='fixed top-0 z-40 w-full bg-white dark:bg-darkSecondary'>
                <Navbar />
              </div>
            </nav>
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
