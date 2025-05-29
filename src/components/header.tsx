"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { SOCIAL_URLS } from "@/constants";
import { NavBar } from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven transforms
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

  useEffect(() => {
  setMobileOpen(false);
}, [pathname]);


  if (!mounted) return null;

  if (pathname === "/resume") return null;

  return (
    <>
      <motion.header
        key={theme}
        ref={headerRef}
        className="fixed top-0 inset-x-0 z-50 w-full max-w-screen-sm mx-auto md:max-w-screen-xl md:mx-auto backdrop-blur-sm dark:text-white"
        style={{
          padding: headerPadding,
          borderBottomWidth: "1px",
          borderBottomColor:
            theme === "dark" ? darkBorderBottomColor : borderBottomColor,
          backgroundColor:
            theme === "dark" ? darkBackgroundColor : backgroundColor,
        }}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/brand/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          {/* Desktop Nav & Resume */}
          <NavBar />
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/resume"
              target="_blank"
              className={cn(
                "h-9 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
                "shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1",
                "focus-visible:ring-primary"
              )}
            >
              Resume
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 top-16 z-40 bg-white dark:bg-black p-4 sm:p-6 lg:hidden overflow-auto"
        >
          <NavBar isMobile />
          <div className="space-y-4 w-full flex flex-col items-stretch">
            <Button asChild>
              <Link href="/resume" target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href={SOCIAL_URLS.meeting}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Meeting <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
