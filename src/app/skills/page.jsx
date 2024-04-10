import SkillCard from "@/components/SkillCard/index";

function Skills() {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div className="mb-8">
        <h1 className="uppercase text-4xl font-semibold">My Skills</h1>
        {/* <SkillCard color="bg-teal-200" logo="" text=""/> */}
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <div className="">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Skills;
