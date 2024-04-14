import Button from "@/components/Button";
import { Contact } from "lucide-react";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";

function page() {
  return (
    <div className="h-screen  bg-white">
      <Header />
      <div className="flex items-center justify-between px-20">
        <div className="w-2/4	flex items-center my-40">
          <Image
            alt="img"
            width={400}
            height={400}
            src="/assets/classic.jpeg"
            className="shadow-[5px_5px_rgba(0.059,_0.090,_0.165,_1.0)]"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="w-2/4 flex-col">
          <h1 className=" text-4xl font-semibold">I'm a Front-end Developer</h1>
          <p className="text-gray-600 text-lg max-w-xl pt-8">
            I'm a Freelancer Front-end Developer. I'm from Indore,India. I code
            and create web elements for amazing people around the world. I like
            work with new people. New people new Experiences
          </p>
          <div className="flex gap-5 py-8">
            <Link
              href="https://www.linkedin.com/in/shanutiwari1010/"
              className="bg-gray-100 p-3 hover:-translate-y-3 transition-all duration-300 hover:shadow-lg"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com/shanutiwari1010"
              className="bg-gray-100 p-3 hover:-translate-y-3 transition-all duration-300 hover:shadow-lg"
            >
              <Github />
            </Link>
            <Link
              href="https://twitter.com/shanutiwari1010"
              className="bg-gray-100 p-3 hover:-translate-y-3 transition-all duration-300 hover:shadow-lg"
            >
              <Twitter />
            </Link>
            <Link
              href="https://www.instagram.com/_.shanuuu.__"
              className="bg-gray-100 p-3 hover:-translate-y-3 transition-all duration-300 hover:shadow-lg"
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.instagram.com/_.shanuuu.__"
              className="bg-gray-100 p-3 hover:-translate-y-3 transition-all duration-300 hover:shadow-lg"
            >
              <Mail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
