import Button from "@/components/Button";
import { Contact } from "lucide-react";
import React from "react";

function page() {
  return (
    <div
      // style={{ backgroundColor: "rgb(255, 247, 237)" }}
      className="h-screen flex items-center justify-between bg-white"
    >
      <div className="w-2/4	">
        <img src="" alt="img" />
      </div>
      <div className="w-2/4 flex-col">
        <h1 className=" text-4xl font-semibold">
          I'm a Front-end Developer
        </h1>
        <p className="text-gray-600 text-lg max-w-xl pt-8">
          I'm a Freelancer Front-end Developer. I'm from Indore,India. I code
          and create web elements for amazing people around the world. I like
          work with new people. New people new Experiences
        </p>
        <div className="flex gap-5">
          <Button text="Contact me" path="contact" variant="primary"/>
          <Button text="Projects" path="projects" variant="secondary"/>
        </div>
      </div>
    </div>
  );
}

export default page;
