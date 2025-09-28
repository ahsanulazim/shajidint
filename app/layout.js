import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import MyContext from "@/context/MyContext";
import FooterWrapper from "@/Components/FooterWrapper";
import { Bounce, ToastContainer } from "react-toastify";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Shajid International",
  description: "Supplier of Tactical & Military Gear.",
  icons: {
    icon: "/Shajid-International-Favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={`${dmSans.variable} font-mono antialiased bg-base-300`}>
        <MyContext>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <Header />
          {children}
          <FooterWrapper />
        </MyContext>
      </body>
    </html>

  );
}
