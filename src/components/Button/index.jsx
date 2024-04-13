import Link from "next/link";
import React from "react";

const Button = React.forwardRef(
  ({ text, path, variant = "primary", ...props }, ref) => {
    return (
      <div className="">
        <Link href={path ? path : "/"} {...props}>
          <button
            ref={ref}
            className={`text-white uppercase tracking-wide ${
              variant === "primary"
                ? "bg-orange-600 hover:bg-[rgba(0.059,_0.090,_0.165,_1.0)] shadow-[5px_5px_rgba(0.059,_0.090,_0.165,_1.0)] hover:shadow-orange-600"
                : "bg-[rgba(0.059,_0.090,_0.165,_1.0)] shadow-[5px_5px_rgba(234,_88,_11,_1)]  hover:bg-orange-600 hover:shadow-[5px_5px_rgba(0.059,_0.090,_0.165,_1.0)]"
            }   px-6 py-2  s 
        `}
          >
            {text}
          </button>
        </Link>
      </div>
    );
  }
);

export default Button;
