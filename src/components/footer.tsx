import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/social-links";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-6 px-4 md:flex-row md:space-y-0 md:px-8">
        <div className="flex flex-col items-center space-y-3 md:items-start">
          <Link href="/">
            <Image src="/brand/logo.svg" width={100} height={100} alt="logo" />
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-md">
            Building innovative software solutions with a focus on performance
            and user experience.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <SocialLinks />
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Shanu Tiwari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
