import SkillCard from "@/components/SkillCard/index";

function Skills() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://uiocean.com/themeforest/react/krinky-tailwind/img/effect/bg-effect-1.png')",
      }}
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="mb-8">
        <h1 className="uppercase text-4xl font-semibold">My Skills</h1>
        {/* <SkillCard color="bg-teal-200" logo="" text=""/> */}
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <div className="">
        <img src="" alt=""/>
      </div>
    </div>
  );
}

export default Skills;
