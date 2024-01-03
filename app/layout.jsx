import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Mr. Lota | Official Website",
  description: "This is Lotanna Chuka Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
      
        {children}
        <Navbar />
      </body>
    </html>
  );
}
