"use client";

import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col">
      <h1 className=" font-semibold text-2xl">About</h1>
      <p className="max-w-3xl text-start ">
        I&apos;m a passionate front-end software engineer with a strong
        foundation in JavaScript, TypeScript, React, and Next.js. I love solving
        complex problems and crafting intuitiwve, user-friendly experiences. With
        a keen eye for design and functionality, I strive to build seamless and
        engaging web applications. Constantly learning and exploring new
        technologies, I&apos;m eager to contribute to impactful projects that
        enhance people&apos;s lives.
        <Link href="/contact" className=" line-clamp-1 underline tracking-wide">
          I&apos;m open to full-time opportunities and collaborations—let&apos;s
          build something amazing together!
        </Link>
      </p>
    </div>
  );
};

export default About;
