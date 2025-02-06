import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <div className="flex flex-col justify-between px-20 pt-8 bg-orange-50 backdrop-blur-md ">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex flex-col gap-4 items-center">
          <Link href="/">
            <Image src="/assets/logo.svg" width={110} height={110} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex">
            <Link
              href="https://www.linkedin.com/in/shanutiwari1010/"
              className="bg-transparent p-1 hover:-translate-y-3 transition-all duration-300 text-gray-600"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com/shanutiwari1010"
              className="bg-transparent p-1 hover:-translate-y-3 transition-all duration-300 text-gray-600 "
            >
              <Github />
            </Link>
            <Link
              href="https://twitter.com/shanutiwari1010"
              className="bg-transparent p-1 hover:-translate-y-3 transition-all duration-300 text-gray-600"
            >
              <Twitter />
            </Link>
            <Link
              href="https://www.instagram.com/_.shanuuu.__"
              className="bg-transparent p-1 hover:-translate-y-3 transition-all duration-300 text-gray-600"
            >
              <Instagram />
            </Link>
            <Link
              href="mailto: shanutiwari.work@gmail.com"
              className="bg-transparent p-1 hover:-translate-y-3 transition-all duration-300 text-gray-600"
            >
              <Mail />
            </Link>
          </div>
        </div>
      </div>
      <div className=" pb-6 mt-10 text-sm text-center text-gray-600 dark:text-gray-400">
        Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
        <a href="https://web3templates.com/" target="_blank" rel="noopener">
          shanu
        </a>{" "}
      </div>
    </div>
  );
}

export default Footer;
