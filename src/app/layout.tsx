import ThemeProvider from "@/components/layout/ThemeToggle/theme-provider";
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
      <html lang='en' suppressHydrationWarning={true}>
        <body className={poppins.className}>
          <ThemeProvider attribute='class' defaultTheme='light'>
            <Toaster duration={3000} />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
