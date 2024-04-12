import Button from "@/components/Button";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      key: "pocket-money-tracker",
      img: "/assets/money-tracker.png",
      title: "Pocket Money Tracker ",
      description: [
        "Pocket Money Tracker is a web application designed for easy and comprehensive financial management.",
        "Using HTML and CSS for a user-friendly interface that looks great on any device.",
        "Pocket Money Tracker is a financial transaction tracking tool that uses React.js for seamless tracking and MongoDB for secure stocd rage and quick data retrieval",
      ],
    },
    {
      key: "currency-converter",
      img: "/assets/currency-converter.png",
      title: "Currency Converter",
      description: [
        "Crafted a robust currency converter tool leveraging HTML, CSS, and JavaScript, facilitating effortless currency conversions for users.",
        "Designed an intuitive user interface for enhanced usability and streamlined conversion experience.",
        "Integrated real-time currency exchange rate updates to provide accurate financial information for users.",
      ],
    },
    {
      key: "task-manager",
      img: "/assets/todo.png",
      title: "Task Manager",
      description: [
        "Created task manager with React and Tailwind CSS for efficient task organization.",
        "Developed a dynamic todo list with features such as task addition, deletion, and updates using React’s component architecture.",
        "Enhanced user interface and responsiveness using Tailwind CSS, ensuring seamless task management across devices.",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10 max-w-screen-2xl md:px-20 px-4 py-40 flex-wrap bg-orange-50">
      <h1 className="text-4xl font-semibold uppercase">My Projects</h1>
      <div className="flex flex-wrap gap-10">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.key}
              className={`flex ${
                isEven ? "flex-row-reverse" : ""
              }  gap-20 items-center`}
            >
              <Image
                src={project.img}
                alt="img"
                className={`${
                  isEven
                    ? "hover:shadow-[-5px_5px_rgba(0.059,_0.090,_0.165,_1.0)]"
                    : "hover:shadow-[5px_5px_rgba(0.059,_0.090,_0.165,_1.0)]"
                }`}
                width={400}
                height={400}
              />
              <div className="space-y-6">
                <h2 className="font-semibold text-3xl">{project.title}</h2>
                <ul className="space-y-2 list-disc w-full">
                  {project.description.map((description) => {
                    return (
                      <div>
                        <li>{description}</li>
                      </div>
                    );
                  })}
                </ul>
                <Button text="view project" path="contact" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
