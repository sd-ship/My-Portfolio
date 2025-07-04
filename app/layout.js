import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jari",
  description: "Portfolio for showing my skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
       
       <div className="text-white absolute min-h-[100vh] min-w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
         <Navbar/>
        {children}
        {/* <Footer/> */}
       </div>
        
      </body>
    </html>
  );
}
