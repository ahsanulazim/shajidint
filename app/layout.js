import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";


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
    <html lang="en" data-theme="light">
      <body
        className={`${dmSans.variable} font-mono antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
