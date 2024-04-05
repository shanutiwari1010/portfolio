import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Shanu Tiwari",
  description: "Documenting my journey here...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        {/* <h1 className="text-5xl">Hello Shanu</h1> */}
      </body>
    </html>
  );
}
