import { projects } from "@/projects";
import "@/public/styles/globals.css";
import { Suspense } from "react";

/**
 * Root App Component
 */

export function App() {
  return (
    <div className="container mx-auto p-4 relative z-10 min-h-screen flex flex-col items-center justify-center">
      {projects.map(({ name, description, component: Component }) => (
        <section
          key={name}
          className="border border-muted p-6 rounded-xl bg-card/50"
        >
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Suspense fallback={<p>Loading {name}...</p>}>
            <Component />
          </Suspense>
        </section>
      ))}
    </div>
  );
}

export default App;
