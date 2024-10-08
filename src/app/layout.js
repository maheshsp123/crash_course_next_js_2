
import { Inter } from "next/font/google";
import "./globals.css";
import { PageNoContextProvider } from "./context/PageNoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageNoContextProvider>
          {children}
        </PageNoContextProvider>
        
      </body>
    </html>
  );
}
