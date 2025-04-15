import Link from "next/link";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS_DATA } from "@/data/links";

import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {SOCIAL_LINKS_DATA.map((item) => (
          <DockIcon key={item.key}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "size-10 rounded-full"
                  )}
                >
                  <item.icon className="size-full" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-orange-50 text-muted-foreground">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
};

export default SocialLinks;
