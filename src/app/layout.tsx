import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "../components/layout/Header/Header";
import { Footer } from "../components/layout/Footer/Footer";
import { Main } from "../components/layout/Main/Main";
import { BottomNav } from "../components/layout/Header/BottomNav";
import { BackToTopBtn } from "../components/layout/BackToTopBtn";
import { ThemeProvider } from "../components/layout/Theme/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Slidocs | Best Slides",
  description: "Get Your slides from us!",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning={true} has been added to html tag
    // due to the warning: extra attributes from the server: class,style  (attribute="class" on Themeprovider)

    <html suppressHydrationWarning={true} lang="en">
      <body
        className={`${poppins.className} dark:bg-gray-800 bg-gray-100 transition duration-200 !text-black !dark:text-white`}
      >
        <ThemeProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <BackToTopBtn />
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
