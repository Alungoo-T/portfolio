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
    title: "Fruit Project",
    description: "A project related to fruits",
    url: "https://6-fruit-project.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="container  py-12">
      <div className="grid grid-cols-2  gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
