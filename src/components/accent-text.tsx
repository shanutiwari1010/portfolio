import { cn } from "@/lib/utils";

type AccentTextType = React.ComponentPropsWithoutRef<"span">;

const AccentText = ({ children, className }: AccentTextType) => {
  return (
    <span
      className={cn(
        className,
        "transition-colors",
        "bg-linear-to-tr from-orange-600 via-orange-400/90 to-orange-600",
        "dark:from-orange-700 dark:via-orange-200 dark:to-orange-700 bg-clip-text text-transparent"
      )}
    >
      {children}
    </span>
  );
};

export default AccentText;
