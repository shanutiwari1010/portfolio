"use client";

import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "rgb(255, 247, 237)" }}
      className="w-full h-screen pl-28"
    >
      <Header />
      <Hero />
    </div>
  );
}
