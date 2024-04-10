import Link from "next/link";
import Button from "../Button/index.jsx";

const Header = () => {
  return (
    <header className="fixed flex justify-evenly items-center p-2 w-full ">
      <nav >
        <ul className="flex justify-center gap-10 uppercase">
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





