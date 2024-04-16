import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <div className="flex justify-between px-20 py-8 bg-orange-50">
      <div className="flex flex-col gap-4 items-center">
        <Link href="/">
          <Image src="/assets/logo.svg" width={150} height={150} alt="logo" />
        </Link>
        <p className="text-gray-600 text-xs"> Thanks for popping in</p>
      </div>
      <div>
        <ul className="flex flex-col gap-4 justify-center uppercase text-gray-600 text-sm">
          <li   >
            <Link href="/" >Home</Link>
          </li>
          <li >
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-gray-600">Get in Touch</h1>
        <div className="flex gap-2 pb-4">
          <Link
            href="https://www.linkedin.com/in/shanutiwari1010/"
            className="bg-transparent py-3 hover:-translate-y-3 transition-all duration-300 text-gray-600"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://github.com/shanutiwari1010"
            className="bg-transparent p-3 hover:-translate-y-3 transition-all duration-300 text-gray-600 "
          >
            <Github />
          </Link>
          <Link
            href="https://twitter.com/shanutiwari1010"
            className="bg-transparent p-3 hover:-translate-y-3 transition-all duration-300 text-gray-600"
          >
            <Twitter />
          </Link>
          <Link
            href="https://www.instagram.com/_.shanuuu.__"
            className="bg-transparent p-3 hover:-translate-y-3 transition-all duration-300 text-gray-600"
          >
            <Instagram />
          </Link>
          <Link
            href="mailto: shanutiwari.work@gmail.com"
            className="bg-transparent p-3 hover:-translate-y-3 transition-all duration-300 text-gray-600"
          >
            <Mail />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
