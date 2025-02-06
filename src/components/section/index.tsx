import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Section() {
  return (
    <div className="bg-slate-900 w-full h-40 flex p-10 items-center justify-evenly">
      <h1 className="text-white text-4xl font-semibold">
        Interested working with me?
      </h1>
      <Link href="/contact">
        <Button>Contact me</Button>
      </Link>
    </div>
  );
}

export default Section;
