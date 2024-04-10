import React from "react";
import Button from "../Button";

function Section() {
  return (
    <div className="bg-slate-900 w-full h-40 flex p-10 items-center justify-evenly">
      <h1 className="text-white text-4xl font-semibold">Interested working with me?</h1>
      <Button text="Contact me" path="contact" />
    </div>
  );
}

export default Section;
