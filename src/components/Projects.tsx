import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import projects from "@/projects.json";

const Projects = () => {
  return (
    <div className="grid items-center justify-items-center">
      <Command className="border p-4 shadow-md md:max-w-[680px] md:max-h-[680px]">
        <CommandInput className="rounded-2xl p-4 tracking-wider text-md" placeholder="Search" />
        <CommandList className="p-4 md:max-h-[450px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <CommandItem key={project.title}>
                <div className="w-full h-full py-4 border-b flex items-center justify-between">
                  <div className="flex flex-col justify-between gap-4 text-primary font-semibold">
                    {/* <img
                    className="w-[40px] h-[40px] bg-secondary border-2 border-secondary rounded-full"
                    width="40"
                    height="40"
                    src={user?.profilePic}
                    alt={user?.name}
                  /> */}
                    <div className="font-bold">{project.title}</div>
                    <div className="text-sm font-light text-gray-400">{project.description}</div>
                  </div>
                  <Button variant="outline" onClick={() => window.open(project.url, "_blank")}>
                    Open
                  </Button>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
};

export default Projects;
