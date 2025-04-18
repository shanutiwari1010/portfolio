"use client";

import Link from "next/link";
import type * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Home, User, FolderKanban, Briefcase, ScrollText } from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const navItem: NavItem[] = [
  {
    icon: <Home className="h-4 w-4" />,
    label: "Home",
    href: "/",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <User className="h-4 w-4" />,
    label: "About",
    href: "/about",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <FolderKanban className="h-4 w-4" />,
    label: "Projects",
    href: "/projects",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <Briefcase className="h-4 w-4" />,
    label: "Experience",
    href: "/experience",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
  // {
  //   icon: <ScrollText className="h-4 w-4" />,
  //   label: "Blog",
  //   href: "/blog",
  //   gradient:
  //     "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
  //   iconColor: "text-blue-500",
  // },
  {
    icon: <User className="h-4 w-4" />,
    label: "Contact",
    href: "/contact",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export function NavBar() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <motion.nav
      className="hidden md:block p-1 rounded-2xl bg-linear-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-xs text-sm relative overflow-hidden"
      initial="wait"
      whileHover="hover"
    >
      <motion.div
        className={`absolute -inset-2 bg-gradient-radial from-transparent ${
          isDarkTheme ? "via-blue-400/30 via-30%" : "via-blue-400/20 via-30%"
        } to-transparent rounded-3xl z-0 pointer-events-none`}
        variants={navGlowVariants}
      />
      <ul className="flex items-center gap-2 relative z-10">
        {navItem.map((item) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: "16px",
                }}
              />
              <Link href={item.href}>
                <motion.p
                  className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom",
                  }}
                >
                  <span
                    className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.p>
              </Link>

              <Link href={item.href}>
                <motion.p
                  className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    rotateX: 90,
                  }}
                >
                  <span
                    className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.p>
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
