import CustomNavbar from "@/components/CustomNavbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/userprovider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer></ToastContainer>
          <CustomNavbar />
          <div className="mt-2 mb-2">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
