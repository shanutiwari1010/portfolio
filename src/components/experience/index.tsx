import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Experience = () => {
  return (
    <div className="flex flex-col items-start w-full ml-2 gap-3">
      <h1 className="font-semibold text-2xl">Work Experience</h1>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-7 ">
          <Avatar className="w-16 h-16 bg-blue-600">
            <AvatarImage src="/blursday.svg" />
            <AvatarFallback>Blursday-Logo</AvatarFallback>
          </Avatar>
          <div>
            <h1>Blursday</h1>
            <p className="text-gray-300">Frontend Engineer</p>
          </div>
        </div>
        <p className="text-muted-foreground brightness-125 ">
          November 2024 - Present
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-7 ">
          <Avatar className="w-auto h-[70px] ">
            <AvatarImage src="/techlene.png" />
            <AvatarFallback>Techelene-Logo</AvatarFallback>
          </Avatar>
          <div>
            <h1>Techelene Software Solutions</h1>
            <p className="text-gray-300">Software Development Engineer</p>
          </div>
        </div>
        <p className="text-muted-foreground brightness-125 ">
          March 2024 - November 2024
        </p>
      </div>
    </div>
  );
};

export default Experience;
