import { TypeAnimation } from "react-type-animation";
import Button from "../Button/index.jsx";
import Image from "next/image.js";
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link.js";
function Hero() {
  return (
    <div className="h-screen flex items-center justify-between px-20 bg-primary relative">
      <div className="w-full">
        <h6 className="text-black text-6xl font-bold">
          I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-orange-400 to-red-500 ">
            Shanu
          </span>
          {"  "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-orange-400 to-red-500">
            Tiwari
          </span>
        </h6>
        <h1 className="text-black text-6xl font-bold pt-10">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Frontend Developer ",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "UI Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={10}
          />
        </h1>
        <p className="text-gray-600 py-5">Based in Indore, India.</p>
        <div className="flex gap-2 pb-4">
          <Link
            href="https://www.linkedin.com/in/shanutiwari1010/"
            className="bg-transparent py-3 hover:-translate-y-3 transition-all duration-300 "
          >
            <Linkedin />
          </Link>
          <Link
            href="https://github.com/shanutiwari1010"
            className="bg-transparent p-3 hover:-translate-y-3 transition-all duration-300 "
          >
            <Github />
          </Link>
          <Link
            href="https://twitter.com/shanutiwari1010"
            className="bg-transparent p-3 hover:-translate-y-3 transition-all duration-300 "
          >
            <Twitter />
          </Link>
          <Link
            href="https://www.instagram.com/_.shanuuu.__"
            className="bg-transparent p-3 hover:-translate-y-3 transition-all duration-300"
          >
            <Instagram />
          </Link>
          <Link
            href="mailto:shanutiwari.work@gmail.com"
            className="bg-transparent p-3 hover:-translate-y-3 transition-all duration-300 "
          >
            <Mail />
          </Link>
        </div>
        <Button text="hire me" path="mailto:shanutiwari.work@gmail.com" />
      </div>
      <div className="images-wrapper w-[45rem]">
        {/* 1st */}
        <div className="w-56 h-56 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute rotate-6 top-40 right-80">
          <Image
            alt="img"
            width={400}
            height={400}
            src="/assets/selfie.jpg"
            style={{ color: "transparent" }}
          />
        </div>

        {/*  2nd  */}
        <div className="w-56 h-56 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute -rotate-6 right-20 top-40">
          <Image
            alt="img"
            width={400}
            height={400}
            src="/assets/citypalace.jpeg"
            className="scale-150 relative left-12"
            style={{ color: "transparent" }}
          />
        </div>

        {/* 3rd */}
        <div className="w-56 h-56 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute -rotate-6 right-80 ">
          <Image
            alt="img"
            width={850}
            height={850}
            src="/assets/laptop.jpg"
            className="scale-150 relative left-12"
            style={{ color: "transparent" }}
          />
        </div>

        {/* 4th */}
        <div className="w-56 h-56 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute rotate-6 right-20 top-96">
          <Image
            alt="img"
            width={400}
            height={400}
            src="/assets/sunkissed.jpeg"
            style={{ color: "transparent" }}
          />
        </div>

        {/* 5th */}
        <div className="w-56 h-56 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute right-56 top-64 ">
          <Image
            alt="img"
            width={400}
            height={400}
            src="/assets/mirrorselfie.jpg"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
