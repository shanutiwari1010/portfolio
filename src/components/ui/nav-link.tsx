"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const navLinkVariants = cva(
  "relative transition-colors hover:text-foreground/80 flex items-center justify-center px-4 py-2",
  {
    variants: {
      variant: {
        default: "text-foreground/60",
        active: "text-foreground font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface NavLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navLinkVariants> {
  href: string;
  exact?: boolean;
}

export function NavLink({
  className,
  href,
  variant,
  exact = false,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const activeVariant = isActive ? "active" : "default";

  return (
    <Link
      href={href}
      className={cn(
        navLinkVariants({ variant: variant || activeVariant }),
        className
      )}
      {...props}
    >
      {props.children}
      {isActive && (
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary" />
      )}
    </Link>
  );
}
