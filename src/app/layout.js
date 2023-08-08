import CustomNavbar from "@/components/CustomNavbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomNavbar />
        <div className="mt-2 mb-2">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
