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
import { RegistrationForm, ProjectSkeleton } from "@/components/shared";

import { Menu } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Projects</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <h2 className="text-lg font-medium">Select Project</h2>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-6rem)] mt-4 pr-2">
              {renderProjectButtons()}
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar Desktop */}
        <aside className="hidden md:flex md:flex-col fixed left-0 w-64 h-screen border-r border-muted bg-background p-4">
          <h1 className="text-xl font-semibold mb-4">Projects</h1>
          <ScrollArea className="flex-1 pr-2">
            {renderProjectButtons()}
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <section className="border border-muted p-6 rounded-xl bg-card/50">
            <h2 className="text-5xl font-bold mb-4 leading-tigh">
              {activeProject.name}
            </h2>
            <p className="text-muted-foreground mb-4">
              {activeProject.description}
            </p>
            <Suspense fallback={<ProjectSkeleton />}>
              <activeProject.component />
            </Suspense>

            {/* Main Registration Form */}
            <RegistrationForm />

            {/* Toast Container - Sonner from Shadcn UI */}
            <Toaster
              position="top-right"
              richColors
              closeButton
              toastOptions={{
                style: {
                  background: "hsl(var(--background)",
                  color: "hsl(var(--foreground)",
                  border: "1px solid hsl(var(--border))",
                },
              }}
            />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
