import React from "react";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiMysql } from "react-icons/si";

function SkillCard() {
  const skills = [
    {
      title: "HTML",
      icon: <DiHtml5 className="w-10 h-10" />,
      color: "bg-green-200",
      key: "html",
    },
    {
      title: "CSS",
      icon: <DiCss3 className="w-10 h-10" />,
      color: "bg-yellow-200",
      key: "css",
    },
    {
      title: "JavaScript",
      icon: <RiJavascriptFill className="w-10 h-10" />,
      color: "bg-red-200",
      key: "javascript",
    },
    {
      title: "Java",
      icon: <FaJava className="w-10 h-10" />,
      color: "bg-blue-200",
      key: "java",
    },
    {
      title: "SQL",
      icon: <TbSql className="w-10 h-10" />,
      color: "bg-orange-200",
      key: "sql",
    },
    {
      title: "React",
      icon: <FaReact className="w-10 h-10" />,
      color: "bg-purple-200",
      key: "react",
    },
    {
      title: "Nextjs",
      icon: <TbBrandNextjs className="w-10 h-10" />,
      color: "bg-slate-200",
      key: "nextjs",
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="w-10 h-10" />,
      color: "bg-amber-200",
      key: "tailwindcss",
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap className="w-10 h-10" />,
      color: "bg-emerald-200",
      key: "bootstrap",
    },
    // {
    //   title: "Shadcn",
    //   icon: <DiHtml5 className="w-10 h-10" />,
    //   color: "bg-green-200",
    //   key: "shadcn",
    // },
    {
      title: "Nodejs",
      icon: <FaNodeJs className="w-10 h-10" />,
      color: "bg-cyan-200",
      key: "nodejs",
    },
    {
      title: "Express",
      icon: <SiExpress className="w-10 h-10" />,
      color: "bg-violet-200",
      key: "express",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="w-10 h-10" />,
      color: "bg-pink-200",
      key: "mongodb",
    },
    {
      title: "Redis",
      icon: <SiRedis className="w-10 h-10" />,
      color: "bg-teal-200",
      key: "redis",
    },
    {
      title: "MySQL",
      icon: <SiMysql className="w-10 h-10" />,
      color: "bg-sky-200",
      key: "mysql",
    },
    {
      title: "Git",
      icon: <FaGitAlt className="w-10 h-10" />,
      color: "bg-lime-200",
      key: "git",
    },
    {
      title: "Vercel",
      icon: <SiVercel className="w-10 h-10" />,
      color: "bg-stone-200",
      key: "vercel",
    },
  ];

  return (
    <div className="flex flex-col gap-24 max-w-screen-2xl md:px-20 px-4 my-20 flex-wrap ">
      <h1 className="text-5xl text-center font-semibold uppercase text-black drop-shadow-xl">My Skills</h1>
      <div className="flex flex-wrap max-w-screen-md gap-10 ">
        {skills.map((skill) => {
          return (
            <div
              className={`border-2 border-black flex items-center gap-3 p-4 h-32 w-80 ${skill.color} hover:shadow-[5px_5px_rgba(0.059,_0.090,_0.165,_1.0)]`}
              key={skill.key}
            >
              <div className="border-2 border-black p-4 bg-white">
                {skill.icon}
              </div>
              <div className=" font-semibold text-xl">{skill.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
