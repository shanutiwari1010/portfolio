"use client";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "rgb(255, 247, 237)" }}
      className="w-full h-screen"
    >
      <Header />
      <Hero />
      <About />
      <Skills/>
      <Section />

    </div>
  );
}
