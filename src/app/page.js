"use client";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Skills from "@/components/SkillCard";
import Section from "@/components/Section";
import Projects from "./projects/page";
import Footer from "@/components/Footer/index";

export default function Home() {
  return (
    <div className="w-full h-screen max-w-screen-2xl ">
      <Header />
      <Hero />
      <Skills />
      <Section />
      <Projects/>
      <Footer />
    </div>
  );
}
