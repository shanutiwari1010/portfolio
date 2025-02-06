import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed flex justify-between px-10 items-center py-5 z-50 shadow-sm w-full backdrop-blur-md bg-white/50">
      <nav className="flex gap-20 items-center">
        <div>
          <Link href="/">
            <Image src="/assets/logo.svg" width={150} height={150} alt="logo" />
          </Link>
        </div>
        <ul className="flex justify-center gap-10 uppercase font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-6">
        <Link href="/resume">
          <Button variant="ghost">Resume</Button>
        </Link>
        <Link href="https://cal.com/shanutiwari1010" target="_blank">
          <Button variant="secondary">Schedule a call</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
