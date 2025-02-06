import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Portfolio | Shanu Tiwari",
  description: "Documenting my journey here...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white max-w-screen-md m-auto">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
