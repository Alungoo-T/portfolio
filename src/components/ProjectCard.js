import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ project }) {
  return (
    <Card className=" w-[400px] p-5 gap-3 flex bg-[#202022] rounded-[12px] z-10 shadow-md border-[1px] shadow-[#2b2b30] border-[#3a3a3b]">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button asChild>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
