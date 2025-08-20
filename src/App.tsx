import { projects } from "@/projects";
import "@/public/styles/globals.css";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ProjectSkeleton } from "@/components/shared";

export function App() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const renderProjectButtons = (onSelect?: () => void) => (
    <div className="space-y-2">
      {projects.map((project) => (
        <Button
          key={project.id}
          variant={project.id === activeProject.id ? "default" : "ghost"}
          className="w-full justify-start text-left"
          onClick={() => {
            setActiveProject(project);
            onSelect?.();
          }}
        >
          {project.name}
        </Button>
      ))}
    </div>
  );

  // Function to get container class based on project width setting
  const getContainerClass = (width?: string) => {
    switch (width) {
      case "full":
        return "w-full";
      case "large":
        return "w-full max-w-6xl mx-auto";
      case "medium":
        return "w-full max-w-4xl mx-auto";
      case "small":
        return "w-full max-w-2xl mx-auto";
      case "narrow":
        return "w-full max-w-xl mx-auto";
      default:
        return "w-full max-w-4xl mx-auto"; // default medium
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Header - Now shown on all screen sizes */}
      <header className="w-full flex items-center justify-between p-4 border-b bg-background sticky top-0 z-50">
        <h1 className="text-xl font-semibold">Projects</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 sm:w-96">
            <SheetHeader>
              <h2 className="text-lg font-medium">Select Project</h2>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-6rem)] mt-4 pr-2">
              {renderProjectButtons()}
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </header>

      {/* Main Content - Full width mobile layout */}
      <main className="flex-1 p-4 sm:p-6">
        <div className={getContainerClass(activeProject.width)}>
          <section className="border border-muted p-4 sm:p-6 rounded-xl bg-card/50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {activeProject.name}
            </h2>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              {activeProject.description}
            </p>
            <div className="mt-6">
              <Suspense fallback={<ProjectSkeleton />}>
                <activeProject.component />
              </Suspense>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
