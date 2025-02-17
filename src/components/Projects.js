import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    id: "1",
    title: "Multi-Step Form",
    description: "A multi-step form implementation",
    url: "https://multi-steps-dusky.vercel.app/",
  },
  {
    id: "2",
    title: "To-Do List",
    description: "A simple to-do list application",
    url: "https://to-do-list-gamma-lilac-35.vercel.app/",
  },
  {
    id: "3",
    title: "States Management",
    description: "A project demonstrating state management",
    url: "https://states-nine-self.vercel.app/",
  },
  {
    id: "4",
    title: "Blog Project",
    description: "A project demonstrating a dynamic blog web",
    url: "https://blog-project-beta-flame.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="container px-10">
      <div className=" mb-4 flex flex-col gap-4">
        <div className=" text-white text-[30px] font-bold text-right mr-9">
          Projects
        </div>
        <div className=" border-[4px]  border-[#FF00FF] rounded-md ml-[780px] w-[50px]"></div>
      </div>
      <div className="grid grid-cols-2  gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
