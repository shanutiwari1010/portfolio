// components/Header.js

import Link from "next/link";
import Button from "../Button/index.jsx";

const Header = () => {
  return (
    <header className="flex justify-evenly bg-white p-4 items-center">
      <nav>
        <ul className="flex justify-center gap-10 bg-rgb(255,247,237)">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Button text="Contact me" path="contact" />
    </header>
  );
};

export default Header;
