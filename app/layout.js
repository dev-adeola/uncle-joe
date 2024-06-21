import "./globals.css";
import { Jost, Karla, Manrope, Rubik } from "next/font/google";
import MuiProvider from "@/utils/theme/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Providers";
import { ReduxProvider } from "@/redux/store";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Ratefy Market",
  description: "Welcome to Ratefy Market Place general page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${rubik.variable} ${manrope.variable} ${jost.variable}`}
      >
        <ReduxProvider>
          <AuthProvider>
            <ToastContainer
              position="top-right"
              // pauseOnHover={true}
              autoClose={4000}
              hideProgressBar={true}
            />
            <MuiProvider>{children}</MuiProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
