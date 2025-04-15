"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";
import { NavBar } from "@/components/nav-bar";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const headerPadding = useTransform(scrollY, [0, 200], ["1.5rem", "1rem"]);

  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const borderBottomColor = useTransform(
    borderOpacity,
    (opacity) => theme === "light" && `rgba(234, 234, 234, ${opacity})`
  );
  const darkBorderBottomColor = useTransform(
    borderOpacity,
    (opacity) => theme === "dark" && `rgba(25, 25, 25, ${opacity})`
  );

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const darkBackgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(17, 17, 17, 0)", "rgba(17, 17, 17, 0.8)"]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.header
      key={theme}
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 p-4 h-20 backdrop-blur-sm w-full transition-all dark:text-white"
      style={{
        padding: headerPadding,
        borderBottomWidth: "1px",
        borderBottomColor:
          theme === "dark" ? darkBorderBottomColor : borderBottomColor,
        backgroundColor:
          theme === "dark" ? darkBackgroundColor : backgroundColor,
      }}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image src="/brand/logo.svg" width={100} height={100} alt="logo" />
        </Link>

        <NavBar />

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/resume"
            target="_blank"
            className={cn(
              "hidden md:inline-flex h-9 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
              "shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1",
              "focus-visible:ring-primary"
            )}
          >
            Resume
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
